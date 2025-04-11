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
  // {
  //   label: "github",
  //   value: "https://github.com/muhdnajb",
  // },
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
              class="block min-w-[300px] max-w-sm p-6 bg-white rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300 transition duration-800"
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
                <!-- <span v-else-if="item.label === 'github'">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span> -->
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
