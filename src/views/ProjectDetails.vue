<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Vue3Marquee } from "vue3-marquee";

const route = useRoute();
const router = useRouter();
const projectPath = ref(route.params.path);
const dataList = ref([]);
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const fetchData = () => {
  const temp = localStorage.getItem("projectData");
  if (temp) {
    const temp2 = JSON.parse(temp);
    if (temp2[projectPath.value]) {
      let [tmp] = temp2[projectPath.value];
      dataList.value = tmp;
    } else {
      dataList.value = [];
    }
  }
};

const breadcrumbs = computed(() => [
  // { name: "Home", link: "/" },
  { name: "Project", link: "/" },
  { name: dataList.value.title, link: "#" },
]);

const navLink = computed(() => [
  {
    label: "Home",
    link: "/",
  },
]);

const handleNavClick = (item) => {
  router.push(item.link);
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <!-- {{ dataList }} -->
  <nav class="bg-gray-600 top-0 z-50 w-full">
    <div class="mx-auto max-w-full px-2 sm:px-4 lg:px-38">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
            aria-controls="mobile-menu"
            :aria-expanded="showMobileMenu"
          >
            <svg
              v-if="!showMobileMenu"
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              v-else
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="(item, idx) in navLink"
                :key="idx"
                @click="handleNavClick(item)"
                class="text-white px-2 py-1 rounded-md sm:text-sm md:text-base lg:text-base xl:text-basew font-bold cursor-pointer hover:bg-transparent transition-colors duration-800"
                >{{ item.label.toLocaleLowerCase() }}</a
              >
            </div>
          </div>
        </div>
        <div v-if="showMobileMenu" class="sm:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              v-for="(item, idx) in navLink"
              :key="idx"
              @click="handleNavClick(item)"
              class="block px-3 py-2 rounded-md text-base font-bold text-white hover:bg-gray-700 hover:text-white"
            >
              {{ item.label.toLocaleLowerCase() }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="min-h-auto relative mx-4 sm:mx-10 lg:mx-40 my-0 sm:my-0 lg:my-0">
    <!-- <img
      src="/img/bg-unsplash.jpg"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    /> -->
    <div id="breadcrumb">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li v-for="(item, index) in breadcrumbs" :key="index">
            <div class="flex items-center mt-3">
              <svg
                v-if="index !== 0"
                class="rtl:rotate-180 w-3 h-3 text-gray-400 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                :href="item.link"
                class="text-sm font-normal text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-800"
              >
                {{ item.name }}
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="text-2xl font-extrabold mt-2">
      <span
        class="py-0.5 bg-gradient-to-r from-[#1a2980] to-[#15d1cf] bg-clip-text gradient-text-fallback"
      >
        {{ dataList.title }}, {{ dataList.institution }}, {{ dataList.period }}.
      </span>
    </div>
    <div class="relative py-4 z-0">
      <Vue3Marquee :duration="25" :pause-on-hover="true" :clone="true">
        <img
          v-for="(img, index) in dataList.img"
          :key="index"
          :src="img"
          class="object-cover h-85 min-w-[500px] max-w-[600px]"
        />
      </Vue3Marquee>
      <p class="text-center italic text-sm m-1 text-black">
        {{ dataList.imgcaption }}
      </p>
    </div>
    <!-- <div id="content" class="content">
      <div class="font-light text-justify">
        <div class="font-light text-justify" v-html="dataList.description"></div>
        <div v-if="dataList.source" class="text-xs pt-4 flex justify-end font-normal">
          Source: {{ dataList.source }}
        </div>
      </div>
    </div> -->
    <div class="relative border border-black/10 mb-12">
      <details class="border border-transparent mx-10 my-8 ..." open>
        <summary class="text-sm leading-6 font-semibold text-gray-900 select-none">
          What is {{ dataList.title }}?
        </summary>
        <div class="mt-3 text-sm leading-6 text-gray-600">
          <div class="font-light text-justify" v-html="dataList.description"></div>
        </div>
      </details>

      <details class="border border-transparent mx-10 my-8 ..." open>
        <summary class="text-sm leading-6 font-semibold text-gray-900 select-none">
          My contributions
        </summary>
        <div class="mt-3 text-sm leading-6 text-gray-600">
          <div class="font-light text-justify" v-html="dataList.contribution"></div>
        </div>
      </details>

      <details class="border border-transparent mx-10 my-8 ..." open>
        <summary class="text-sm leading-6 font-semibold text-gray-900 select-none">
          User / Client
        </summary>
        <div class="mt-3 text-sm leading-6 text-gray-600">
          <div class="font-light text-justify">{{ dataList.client }}</div>
        </div>
      </details>
    </div>
  </div>
</template>

<style scoped>
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>
