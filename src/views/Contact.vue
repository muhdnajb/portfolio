<script setup>
import { ref } from "vue";

const cardList = [
  {
    label: "email",
    value: "muhdn4jib@gmail.com",
  },
  {
    label: "phone",
    value: "+60176954045",
  },
  {
    label: "github",
    value: "https://github.com/muhdnajb",
  },
];
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-500/25 p-10">
    <div class="col-span-1 md:col-span-1 p-8 flex flex-col items-center justify-center">
      <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center">
        get in touch <br />
      </p>
      <p class="text-sm md:text-base text-gray-600 text-center font-light">
        feel free to reach out to me via both platforms
      </p>
    </div>
    <div class="col-span-1 md:col-span-2 p-8">
      <div>
        <div class="p-4">
          <div class="flex flex-wrap justify-center gap-4">
            <div
              v-for="(item, idx) in cardList"
              :key="idx"
              class="block min-w-[290px] max-w-sm p-6 bg-white rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300 transition duration-800"
            >
              <h5
                class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-900/80 flex items-center gap-2"
              >
                <span v-if="item.label === 'email'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0H2.25"
                    />
                  </svg>
                </span>
                <span v-else-if="item.label === 'phone'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.125 1.125 0 0 0-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <span v-else-if="item.label === 'github'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    />
                  </svg>
                </span>
                {{ item.label }}
              </h5>
              <p class="font-normal text-sm text-gray-700 dark:text-gray-800">
                <template v-if="item.label.toLowerCase() === 'email'">
                  <a :href="`mailto:${item.value}`">
                    {{ item.value }}
                  </a>
                </template>
                <template v-else>
                  {{ item.value }}
                </template>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
