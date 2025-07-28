<script setup>
import ProjectCard from "../components/card/ProjectCard.vue";

const projects = [
  {
    id: 1,
    path: "mysitasi",
    title: "MySITASI",
    institution: "Kementerian Pendidikan Tinggi",
    img: `/img/kpt.png`,
    period: "2023-2025",
  },
  {
    id: 2,
    path: "upmnet",
    title: "UPMNet 4.0",
    institution: "Universiti Putra Malaysia",
    img: `/img/upm.png`,
    period: "2023",
  },
];
</script>

<template>
  <div
    class="min-h-screen relative flex items-center justify-center bg-gray-100 md:bg-gradient-to-t md:from-gray-100 md:via-gray-100 md:to-gray-300"
  >
    <!-- <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
      <source src="../assets/typing.mp4" type="video/mp4" />
    </video> -->
    <!-- <img
      src="/public/img/pexels-hngstrm-17811923.jpg"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    /> -->
    <div class="relative text-center text-white p-4 sm:p-8 lg:p-12">
      <div class="my-0">
        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-bold pt-4 md:pt-0 text-black sm:text-white text-center"
        >
          projects
        </h1>
        <!-- <div
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-black sm:text-white text-center"
        >
          tech stack
        </div> -->
        <p class="text-black pt-2 text-sm sm:text-base md:text-lg">
          collection of industry projects highlighting my work and contributions
        </p>
      </div>
      <div class="flex flex-auto justify-center items-center flex-wrap gap-6 m-auto mt-8">
        <ProjectCard
          v-for="(item, index) in projects"
          :key="index"
          :props="item"
          class="rounded-sm dark:bg-gray-750 border dark:border-gray-300 shadow-xl"
        />
      </div>
    </div>
  </div>
</template>
