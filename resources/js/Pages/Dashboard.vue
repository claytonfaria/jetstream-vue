<script setup>
import { useForm, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';

const props = defineProps(['name']);

const form = useForm({
  name: props.name,
});

function submit() {
  form.get('/dashboard', {
    preserveScroll: true,
    preserveState: true,
  });
}

const page = usePage();

/** @type {import('vue').ComputedRef<User>} */
const user = computed(() => page.props.auth.user);

/** @type {import('vue').ComputedRef<Jetstream>} */
const jetstream = computed(() => page.props.jetstream);
</script>

<template>
  <AppLayout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        Dashboard {{ jetstream.canCreateTeams }}
      </h2>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
          <Welcome />
          <Welcome />
          <Welcome />
          <Welcome />
          <Welcome />
          <Welcome />
          <Welcome />
          <Welcome />
          <p
            class="bg-red-300"
          >
            {{ name }}
          </p>
          <form @submit.prevent="submit">
            <input v-model="form.name" type="text">
            <button>Update name</button>
          </form>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
