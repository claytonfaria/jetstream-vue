<script setup>
import { FlexRender, getCoreRowModel, useVueTable } from '@tanstack/vue-table';
import Pagination from '@/Components/Ui/Table/Pagination.vue';
import DataTableViewOptions from '@/Components/Ui/Table/DataTableViewOptions.vue';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/Ui/Table/index.js';

const props = defineProps({
  sorting: {
    type: Array,
    required: false,
  },
  data: {
    type: Object,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
});

const table = useVueTable({
  get data() {
    return props.data.data;
  },
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
    get sorting() {
      return props.sorting;
    },
  },
});
</script>

<template>
  <div class="space-y-4">
    <div class="flex justify-end">
      <DataTableViewOptions :table="table" />
    </div>

    <div class="overflow-x-hidden rounded-md border">
      <Table>
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead
              v-for="header in headerGroup.headers"
              :key="header.id"
              :col-span="header.colSpan"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <Pagination :links="props.data.links" />
  </div>
</template>
