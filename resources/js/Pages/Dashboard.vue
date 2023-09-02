<script setup>
import { useForm, usePage } from '@inertiajs/vue3';
import { createColumnHelper } from '@tanstack/vue-table';
import { computed, h } from 'vue';
import route from 'ziggy-js/src/js/index.js';
import DataTableColumnHeader from '@/Components/Ui/Table/DataTableColumnHeader.vue';
import AppLayout from '@/Layouts/AppLayout.vue';

const props = defineProps(['name']);
// const tableSort = computed(() => {
//   if (props.params && props.params.sort) {
//     return [{
//       id: props.params.sort,
//       desc: props.params.direction === 'desc',
//     }];
//   }
//   return [];
// });

const page = usePage();

/** @type {import('vue').ComputedRef<User>} */
const user = computed(() => page.props.auth.user);

/** @type {import('vue').ComputedRef<Jetstream>} */
const jetstream = computed(() => page.props.jetstream);

/**
 * Maps a collection of column configurations for a data table using the helper function `columnHelper`.
 *
 * @typedef {Object} Person
 *
 * @property {String} firstName - Column configuration for "First Name"
 * @property {String} lastName - Column configuration for "Last Name"
 * @property {Number} age - Column configuration for "Age"
 * @property {Number} visits - Column configuration for "Visits"
 * @property {String} status - Column configuration for "Status"
 * @property {Number} progress - Column configuration for "Profile Progress"
 */

/**
 * @type {import('@tanstack/vue-table').ColumnHelper<Person>}
 */
const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('firstName', {
    cell: info => info.getValue(),
    header: ({ column }) => h(DataTableColumnHeader, {
      column,
      title: 'First name',
    }),
  }),
  columnHelper.accessor(row => row.lastName, {
    id: 'lastName',
    cell: info => info.getValue(),
    header: ({ column }) => h(DataTableColumnHeader, {
      column,
      title: 'Last name',
    }),
  }),
  columnHelper.accessor('age', {
    header: ({ column }) => h(DataTableColumnHeader, {
      column,
      title: 'Age',
    }),
  }),
  columnHelper.accessor('visits', {
    header: ({ column }) => h(DataTableColumnHeader, {
      column,
      title: 'Visits',
    }),
  }),
  columnHelper.accessor('status', {
    header: ({ column }) => h(DataTableColumnHeader, {
      column,
      title: 'Status',
    }),
  }),
  columnHelper.accessor('progress', {
    header: ({ column }) => h(DataTableColumnHeader, {
      column,
      title: 'Progress',
    }),
  }),

];

const form = useForm({
  method: 'POST',
  name: '',
});

function submit() {
  console.log('submitting');
  form.post(route('person.store'), {
    preserveScroll: true,
    onSuccess: () => {
      console.log('success');
    },
    onError: (e) => {
      console.log(e);
    },
  },
  );
}
</script>

<template>
  <AppLayout title="Dashboard">
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-8">
          <form @submit.prevent="submit">
            <input v-model="form.name" type="text">

            <button type="submit">
              Create person
            </button>
          </form>
          <!--          <DataTable :columns="columns" :data="props.person" :sorting="tableSort" /> -->
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<!--        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"> -->
<!--          <Welcome /> -->
<!--        </div> -->

<!-- <p -->
<!--  class="bg-red-300" -->
<!-- &gt; -->
<!-- {{ name }} -->
<!-- </p> -->
<!-- <form @submit.prevent="submit"> -->
<!-- <input v-model="form.name" type="text"> -->
<!-- <button>Update name</button> -->
<!-- </form> -->
