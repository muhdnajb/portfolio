<script setup></script>

<template>
  <div class="relative flex flex-col min-h-screen">
    <div>
      <img
        src="../assets/pexels-goumbik.jpg"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
        <source src="../assets/typing.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="relative flex-1 flex items-center justify-center">
      <h1 class="text-4xl font-bold text-white">Stack Page</h1>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Waterfall&display=swap");

.waterfall-regular {
  font-family: "Waterfall", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
