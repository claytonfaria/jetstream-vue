<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { createColumnHelper } from '@tanstack/vue-table';
import { loadLanguageAsync } from 'laravel-vue-i18n';
import type { ComputedRef } from 'vue';
import { computed, h } from 'vue';
import { t } from '@/Lib/typedTranslation';
import type { Jetstream, User } from '@/types';
import AppLayout from '@/Layouts/AppLayout.vue';
import DataTableColumnHeader from '@/Components/Ui/Table/DataTableColumnHeader.vue';
import DataTable from '@/Components/Ui/Table/DataTable.vue';

const page = usePage();

const user: ComputedRef<User> = computed(() => page.props.auth.user);

const jetstream: ComputedRef<Jetstream> = computed(() => page.props.jetstream);

const people: Person[] = [
  { firstName: 'John', lastName: 'Doe', age: 30, visits: 5, status: 'single', progress: 50 },
  { firstName: 'Jane', lastName: 'Doe', age: 27, visits: 8, status: 'married', progress: 60 },
  { firstName: 'Dave', lastName: 'Smith', age: 25, visits: 10, status: 'single', progress: 70 },
  { firstName: 'Alice', lastName: 'Johnson', age: 35, visits: 7, status: 'single', progress: 80 },
  { firstName: 'Bob', lastName: 'Anderson', age: 29, visits: 9, status: 'married', progress: 90 },
];

interface Person {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const columnHelper = createColumnHelper<Person>();

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
    cell: info => info.getValue(),
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
          Hello  {{ user.name }} {{ t("Welcome to your Jetstream application!") }}
          <div class="mt-10 space-x-4">
            change on FE
            <button class="bg-red-300" @click="loadLanguageAsync('pt_BR')">
              Change to Portuguese Language
            </button>
            <button class="bg-blue-300" @click="loadLanguageAsync('en')">
              Change to English Language
            </button>
          </div>

          <div class="mt-10 space-x-4">
            change on Laravel side
            <a class="bg-red-300" href="/dashboard/pt_BR">
              Change to Portuguese Language
            </a>
            <a class="bg-blue-300" href="/dashboard/en">
              Change to English Language
            </a>
          </div>
          <DataTable :columns="columns" :data="people" />
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
