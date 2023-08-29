<script setup>
import { usePage } from '@inertiajs/vue3';
import { createColumnHelper } from '@tanstack/vue-table';
import { computed, h } from 'vue';
import DataTable from '@/Components/Ui/Table/DataTable.vue';
import DataTableColumnHeader from '@/Components/Ui/Table/DataTableColumnHeader.vue';
import AppLayout from '@/Layouts/AppLayout.vue';

const props = defineProps(['name']);

const page = usePage();

/** @type {import('vue').ComputedRef<User>} */
const user = computed(() => page.props.auth.user);

/** @type {import('vue').ComputedRef<Jetstream>} */
const jetstream = computed(() => page.props.jetstream);

const defaultData = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

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
</script>

<template>
  <AppLayout title="Dashboard">
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-8">
          <DataTable :columns="columns" :data="defaultData" />
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
