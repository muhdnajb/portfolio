<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  show: Boolean,
  project: Object,
});

const close = () => {
  emit("close");
};
</script>
<template>
  <div v-if="props.show" class="fixed inset-0 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        <button @click="close" class="text-gray-500 hover:text-gray-700">✖</button>
      </div>
      <div class="mb-4">
        <img :src="project.img[0]" class="w-full h-auto rounded-lg" alt="Project Image" />
      </div>
      <div class="mb-4">
        <p class="text-sm text-gray-700" v-html="project.description"></p>
      </div>
      <div class="flex justify-end">
        <button
          @click="close"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
