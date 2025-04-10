/* ProjectPopover.vue */
<script setup>
import { ref } from "vue";

const props = defineProps({
  project: { type: Object, required: true },
});

const isActive = ref(false);

const togglePopover = () => {
  isActive.value = !isActive.value;
};
</script>
<template>
  <div class="relative group inline-block mt-2">
    <button
      @click="togglePopover"
      class="cursor-pointer inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      <p class="px-2 text-xs">Show Info</p>
    </button>

    <div
      v-if="isActive"
      class="absolute left-1/2 -translate-x-1/2 mt-2 w-60 rounded-md shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 transition-opacity duration-300"
    >
      <p class="text-sm font-semibold">{{ project.title }}</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">
        {{ project.institution }}
      </p>
      <p class="text-xs text-gray-600 dark:text-gray-400">Period: {{ project.period }}</p>
      <p class="text-xs mt-2">{{ project.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
