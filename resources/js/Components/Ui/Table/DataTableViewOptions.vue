<script setup>
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import Dropdown from '@/Components/Dropdown.vue';

const props = defineProps({
  table: {
    type: Object,
    required: true,
  },
});
const columns = computed(() => props.table
  .getAllColumns()
  .filter(
    column =>
      typeof column.accessorFn !== 'undefined' && column.getCanHide(),
  ),
);
</script>

<template>
  <Dropdown align="right" width="48">
    <template #trigger>
      <button class="flex items-center gap-x-2">
        <Icon icon="lucide-sliders-horizontal" class="w-4 h-4" />
        View
      </button>
    </template>
    <template #content>
      <p>Toggle columns</p>
      <hr class="my-1">
      <label v-for="column in columns" :key="column.id" class="flex items-center gap-x-2">
        <input
          type="checkbox"
          :checked="column.getIsVisible()"
          @change="(e) => column.toggleVisibility(e.target.checked)"
        >
        <span>{{ column.id }}</span>
      </label>
    </template>
  </Dropdown>
</template>
