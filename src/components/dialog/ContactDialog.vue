<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  show: Boolean,
});

const contacts = [
  {
    type: "phone",
    text: "0176954045",
    link: "https://wa.me/60176954045",
    icon: `<path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>`,
  },
  {
    type: "email",
    text: "muhdn4jib@gmail.com",
    link: "mailto:muhdn4jib@gmail.com",
    icon: `<path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm6.962 4.856a1.475 1.475 0 0 1 1.484.066A1 1 0 1 0 11.53 9.24a3.475 3.475 0 1 0-.187 5.955 1 1 0 1 0-.976-1.746 1.474 1.474 0 1 1-1.405-2.593Zm6.186 0a1.475 1.475 0 0 1 1.484.066 1 1 0 1 0 1.084-1.682 3.475 3.475 0 1 0-.187 5.955 1 1 0 1 0-.976-1.746 1.474 1.474 0 1 1-1.405-2.593Z" clip-rule="evenodd"/>`,
  },
];
</script>

<template>
  <div v-if="props.show" class="fixed inset-0 flex items-center justify-center">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <div
          class="flex justify-between items-center md:px-4 md:py-2.5 border-b rounded-t dark:border-gray-600 border-gray-200"
        >
          <p class="text-lg font-semibold text-gray-900 dark:text-white">Contact</p>
          <button
            type="button"
            @click="emit('close')"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="static-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4 md:p-8 space-y-4">
          <div class="text-base leading-relaxed text-white">
            <p class="font-medium text-base">You can reach me through below platform:</p>
            <div v-for="item in contacts" :key="item.type" class="flex items-center mt-2">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                v-html="item.icon"
              ></svg>

              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                class="pl-2 text-base font-sans text-blue-400 hover:text-blue-600"
              >
                {{ item.text }}
              </a>

              <span v-else class="pl-2 text-base font-sans">{{ item.text }}</span>
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="static-modal"
            @click="emit('close')"
            type="button"
            class="text-white bg-red-400 hover:bg-red-500 focus:outline-none font-medium rounded-lg text-sm px-3 py-1 text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
