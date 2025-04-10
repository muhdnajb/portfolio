<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  label: { type: String, default: "" },
  img: { type: String, default: "" },
});
</script>

<template>
  <div :class="['flex flex-col transition-all duration-400 ease-in-out ', $attrs.class]">
    <img
      v-if="img"
      :src="img"
      :alt="`${label} logo`"
      class="w-full h-20 object-contain mb-2"
    />
    <h5
      v-if="title"
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ title }}
    </h5>
    <div v-if="label" class="font-normal text-base text-gray-800 dark:text-gray-100">
      <div
        v-if="label && !img"
        class="font-normal text-base text-gray-800 dark:text-gray-100 flex items-center space-x-1"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m10 16 4-4-4-4"
          />
        </svg>
        <span>{{ label }}</span>
      </div>
      <div
        v-else-if="label && img"
        class="font-normal text-base text-gray-800 dark:text-gray-100"
      >
        {{ label }}
      </div>
    </div>
  </div>
</template>
