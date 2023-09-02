<?php

use App\Models\Person;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function (Request $request) {

        $validated = $request->validate([
            'sort' => 'in:age,name,email,visits',
            'direction' => 'in:asc,desc',
            'page_size' => 'integer|min:1|max:100',
        ]);

        $sortBy = $validated['sort'] ?? 'age';
        $sortDirection = $validated['direction'] ?? 'asc';

        $page_size = $validated['page_size'] ?? 10;

        return Inertia::render('Dashboard', [
            'person' => Person::orderBy($sortBy, $sortDirection)
                ->paginate($page_size)
                ->withQueryString(),
            'params' => $validated,
        ]);
    })->name('dashboard');

    Route::post('/person', function (Request $request) {

        $validated = $request->validate([
            'name' => 'required|string|max:255|min:3',
        ]);

        $name = $validated['name'];
        return redirect()->route('dashboard')->dangerBanner(
            "Hello $name, welcome to the dashboard! You have been logged in. Please fill out the form below."
        );
    })->name('person.store');

});
