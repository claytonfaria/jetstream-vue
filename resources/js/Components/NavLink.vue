<script setup>
import { Icon } from '@iconify/vue';
import { Link } from '@inertiajs/vue3';

defineProps({
  href: String,
  active: Boolean,
  icon: String,
});
</script>

<template>
  <Link
    :href="href"
    :class="{ 'text-purple-800 dark:text-purple-400 bg-gray-200': active }"
    class="flex items-center rounded-md text-sm p-2 gap-x-2.5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-800 font-semibold dark:hover:text-gray-300"
  >
    <Icon :icon="icon" class="w-6 h-6" />

    <slot />
  </Link>
</template>
