<script setup>
import { Icon } from '@iconify/vue';
import { computed, ref } from 'vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';

const props = defineProps({
  column: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

/** @type {import('vue').Ref<{open:boolean}>} */
const dropdownRef = ref(null);

const isDropdownOpen = computed(() => dropdownRef.value?.open);

const currentIcon = computed(() => {
  switch (props.column.getIsSorted()) {
    case 'desc':
      return 'lucide-sort-desc';
    case 'asc':
      return 'lucide-sort-asc';
    default:
      return 'lucide:chevrons-up-down';
  }
});
</script>

<template>
  <Dropdown ref="dropdownRef" align="left" width="">
    <template #trigger>
      <button :class="{ 'bg-gray-200': isDropdownOpen }" class="flex items-center gap-x-2">
        {{ title }}
        <Icon :icon="currentIcon" class="w-4 h-4" />
      </button>
    </template>
    <template #content>
      <DropdownLink as="button" @click="column.toggleSorting(false)">
        <div class="flex items-center gap-x-2">
          <Icon icon="lucide:sort-asc" class="w-4 h-4" />
          Asc
        </div>
      </DropdownLink>
      <DropdownLink as="button" @click="column.toggleSorting(true)">
        <div class="flex items-center gap-x-2">
          <Icon icon="lucide:sort-desc" class="w-4 h-4" />
          Desc
        </div>
      </DropdownLink>
      <DropdownLink as="button" @click="column.toggleVisibility(false)">
        <div class="flex items-center gap-x-2">
          <Icon icon="lucide:eye-off" class="w-4 h-4" />
          <span>

            Hide
          </span>
        </div>
      </DropdownLink>
    </template>
  </Dropdown>
</template>
