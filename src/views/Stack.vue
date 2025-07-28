<script setup>
import BasicCard from "../components/card/BasicCard.vue";

const list = {
  stack: [
    // {
    //   label: "HTML5",
    //   img: `img/html.svg`,
    // },
    {
      label: "JavaScript",
      img: `img/javascript.svg`,
    },
    {
      label: "Vue.js",
      img: `img/vuejs.svg`,
    },
    {
      label: "Tailwind",
      img: `img/tailwind.svg`,
    },
    {
      label: "Quasar",
      img: `img/quasar4.svg`,
    },
    {
      label: "Vite",
      img: `img/vite.svg`,
    },
    // {
    //   label: "PHP",
    //   img: `img/php.svg`,
    // },
    // {
    //   label: "Laravel",
    //   img: `img/laravel.svg`,
    // },
    {
      label: "MySQL",
      img: `img/mysql.svg`,
    },
    {
      label: "Node.js",
      img: `img/nodejs.svg`,
    },
    {
      label: "Postman",
      img: `img/postman.svg`,
    },
  ],
  interest: [
    {
      label: "Software Development",
      // img: `img/code3.svg`,
    },
    {
      label: "Software Testing / QA",
      // img: `img/selenium.svg`,
    },
    {
      label: "Data Analytics",
      // img: `img/graph.svg`,
    },
    {
      label: "Artificial Intelligence",
      // img: `img/graph.svg`,
    },
  ],
};
</script>

<template>
  <div
    class="relative flex items-center justify-center min-h-screen bg-gray-200 md:bg-gradient-to-b md:from-gray-100 md:to-gray-400"
  >
    <!-- <video
      autoplay
      muted
      loop
      class="absolute inset-0 w-full h-full object-cover -z-10"
      style="filter: blur(0px)"
    >
      <source src="/public/img/3703708-uhd_2160_4096_25fps.mp4" type="video/mp4" />
    </video> -->
    <!-- <img
      src="/public/img/37980.jpg"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    /> -->
    <div
      class="relative flex flex-col justify-center items-center py-10 md:py-10 lg:px-15"
    >
      <div class="my-0">
        <div
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-black sm:text-white text-center"
        >
          tech stack
        </div>
        <div class="font-extralight text-black/90 text-center opacity-90 mt-1.5">
          variety of technologies, frameworks, and tools I’ve worked with to build
          efficient and digital solutions
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-5">
        <BasicCard
          v-for="(item, index) in list.stack"
          :key="index"
          v-bind="item"
          class="flex items-center justify-center p-5 transition-transform transform hover:scale-115 duration-200 ease-in-out"
        />
      </div>
      <div class="my-0 pt-15">
        <div
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-black sm:text-white text-center"
        >
          interest
        </div>
        <p class="font-extralight text-black/90 text-center opacity-90 mt-1.5">
          fields of technology that I’m interested in exploring and improving
        </p>
      </div>
      <div class="flex flex-row justify-center items-center flex-wrap">
        <BasicCard
          v-for="(item, index) in list.interest"
          :key="index"
          v-bind="item"
          class="flex items-center justify-center mx-2 p-8 transition-transform transform hover:scale-115 duration-200 ease-in-out cursor-context-menu"
        />
      </div>
    </div>
  </div>
</template>
