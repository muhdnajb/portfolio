<script setup>
const timelineItems = [
  {
    year: "2023-2025, Omesti Group, Kuala Lumpur",
    label: "Software Developer (Front-End)",
    description:
      "Developed system applications and portal for educational institutions, contributing to a digital learning platform for the Ministry of Higher Education Malaysia. Focused on delivering high-quality software solutions to enhance accessibility and user experience in online education.",
  },
  {
    year: "2020-2022, Universiti Teknologi MARA, Kampus Jasin",
    label: "Bachelor of Computer Science (Hons.)",
    description:
      "Bachelor's Degree in Computer Science (CGPA 3.45). Served as class representative, developing strong leadership and teamwork skills. Coursework focused on software engineering, artificial intelligence, statistics, business data analytics, and data mining.",
  },
  {
    year: "2017-2020, Universiti Teknologi MARA, Kampus Jasin",
    label: "Diploma in Computer Science",
    description:
      "Diploma in Computer Science (CGPA 3.20). Built a strong foundation in programming, databases, and system analysis. Developed problem-solving skills through coursework and hands-on projects. Served as class representative, enhancing leadership and collaboration.",
  },
];
</script>

<template>
  <div
    class="min-h-screen relative flex items-center justify-center px-4 sm:px-8 md:px-16"
  >
    <video
      autoplay
      muted
      loop
      class="absolute inset-0 w-full h-full object-cover -z-10"
      style="filter: blur(0px)"
    >
      <source src="../assets/white_animation.mp4" type="video/mp4" />
    </video>
    <div
      class="relative flex flex-col sm:flex-row justify-center items-center w-full max-w-4xl z-10"
    >
      <div
        class="text-white text-center text-2xl sm:text-2xl md:text-3xl font-bold pt-8 md:pt-0 px-0 md:px-6"
      >
        education & career
      </div>
      <div class="w-full max-w-2xl">
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li
            v-for="(item, index) in timelineItems"
            :key="index"
            class="my-8 sm:my-10 ml-4 sm:ml-5"
          >
            <div
              class="absolute w-3 h-3 bg-gray-200 rounded-full mt-2 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
            ></div>
            <time class="mb-1 text-lg font-bold text-gray-700 dark:text-gray-900"
              >{{ item.year }}
            </time>
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">
              <span class="bg-blue-100 dark:bg-blue-950 px-2 py-0.5 text-base">
                {{ item.label }}
              </span>
            </h3>
            <p
              class="text-base text-justify p-1 mt-0.5"
              style="font-size: medium; font-weight: 300; color: #000000"
            >
              {{ item.description }}
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
