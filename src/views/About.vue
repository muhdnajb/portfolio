<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="min-h-screen relative">
    <img
      src="../assets/pexels-goumbik.jpg"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    />
    <div
      class="relative grid min-h-screen max-w-full grid-cols-1 md:grid-cols-10 mx-auto px-4 sm:px-6 md:px-10"
    >
      <div class="hidden md:block md:col-span-3"></div>
      <div class="col-span-10 md:col-span-6 bg-transparent p-5 pt-20 sm:pt-32 md:py-60">
        <div
          class="mt-5 sm:mt-10 md:mt-20 text-black text-left text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          about
        </div>
        <p class="text-base sm:text-lg leading-relaxed text-justify mt-4">
          I'm <span class="font-normal">Muhd Najib</span>, a front-end system developer
          with a background in computer science, passionate about building clean and
          efficient applications. I specialize in Vue.js, Quasar, Tailwind CSS, and
          JavaScript. I enjoy solving problems, learning new technologies, and optimizing
          performance. Beyond coding, I love doing sports like running, badminton, and
          futsal. Staying active helps me push my limits and stay motivated. <br /><br />
          I enjoy collaborating with teams to create impactful solutions and adapt well to
          dynamic environments. Continuously improving my skills, I explore new
          technologies and best practices to enhance software development and create
          efficient solutions. My objective is to build seamless, user-friendly
          experiences with high performance and scalability, while remaining open to
          opportunities in web development, data analysis, and software testing to stay
          adaptable in the ever-evolving tech landscape.
        </p>
      </div>
    </div>
  </div>
</template>
