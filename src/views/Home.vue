<script setup>
import { onMounted, ref, defineEmits, computed } from "vue";
import About from "./About.vue";
import Education from "./Education.vue";
import Projects from "./Projects.vue";
import Stack from "./Stack.vue";
import Contact from "./Contact.vue";
import moment from "moment";
import { useRoute } from "vue-router";

const route = useRoute();
let index = 0;
let isDeleting = false;
const emit = defineEmits(["setRefs"]);
const aboutRef = ref(null);
const educationRef = ref(null);
const projectsRef = ref(null);
const stackRef = ref(null);
const text = "@muhdnajb's portfolio website.";
const displayedText = ref("");
const currentTime = ref(moment().format("Do MMMM YYYY, h:mm:ss a"));

const updateTime = () => {
  currentTime.value = moment().format("Do MMMM YYYY, h:mm:ss a");
  setTimeout(updateTime, 1000);
};

const typeText = () => {
  if (!isDeleting) {
    if (index < text.length) {
      displayedText.value += text[index];
      index++;
      setTimeout(typeText, 200);
    } else {
      isDeleting = true;
      setTimeout(typeText, 1500);
    }
  } else {
    if (index > 0) {
      displayedText.value = text.substring(0, index - 1);
      index--;
      setTimeout(typeText, 50);
    } else {
      isDeleting = false;
      setTimeout(typeText, 500);
    }
  }
};

const showMobileMenu = ref(false);

const navLinks = [
  {
    label: "About",
    section: aboutRef,
  },
  {
    label: "Education",
    section: educationRef,
  },
  {
    label: "Projects",
    section: projectsRef,
  },
  {
    label: "Stack",
    section: stackRef,
  },
];

const filteredNavLinks = computed(() => {
  return route.path === "/"
    ? navLinks
    : navLinks.filter((link) => link.label === "Contact");
});

const scrollToSection = (item) => {
  if (!item?.value) {
    return;
  }

  const element = item.value;
  const start = window.scrollY;
  const target = element.getBoundingClientRect().top + start;
  const distance = target - start;
  const duration = 1500;
  let startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress =
      progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, start + distance * easedProgress);
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
};

const handleNavClick = (item) => {
  if (item.section) {
    scrollToSection(item.section);
    showMobileMenu.value = false;
  }
};

onMounted(() => {
  typeText();
  updateTime();
  emit("setRefs", {
    aboutRef: aboutRef?.value,
    educationRef: educationRef?.value,
    projectsRef: projectsRef?.value,
    stackRef: stackRef?.value,
  });
});
</script>

<template>
  <div class="relative h-screen">
    <!-- <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
      <source src="../assets/background5.mp4" type="video/mp4" />
    </video> -->
    <img
      src="/public/img/myself.jpg"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    />
    <!-- <div
      class="flex flex-col items-end p-4 text-gray-300 text-2xl sm:text-base md:text-base base:text-base xl:text-base font-bold"
    >
      <p class="text-white">{{ currentTime }}</p>
    </div> -->
    <!-- <div class="fixed inset-0 flex justify-center">
      <div class="p-4 bg-white">hereee</div>
    </div> -->
    <nav
      class="fixed top-0 left-0 z-50 p-4 sm:p-6 md:p-7 lg:p-8 flex justify-center w-full"
    >
      <div
        class="p-2.5 flex flex-wrap justify-center items-center gap-5 rounded-lg bg-gray-700/25 backdrop-blur-md w-full max-w-sm sm:text-sm md:text-base lg:text-lg font-bold cursor-pointer transition-colors duration-300"
      >
        <a
          v-for="(item, idx) in filteredNavLinks"
          :key="idx"
          @click="handleNavClick(item)"
          class="text-white cursor-pointer hover:text-gray-300 transition duration-300"
        >
          {{ item.label.toLocaleLowerCase() }}
        </a>
      </div>
    </nav>

    <div
      class="absolute top-1/4 left-3/10 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
    >
      <div
        class="text-gray-800 text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold"
      >
        welcome,
      </div>
      <div
        class="text-gray-600 text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold"
        v-if="displayedText"
      >
        {{ displayedText }}
      </div>
    </div>
  </div>
  <div class="components">
    <div ref="aboutRef">
      <About />
    </div>
    <div ref="educationRef">
      <Education />
    </div>
    <div ref="projectsRef">
      <Projects />
    </div>
    <div ref="stackRef">
      <Stack />
    </div>
    <div ref="contactRef">
      <Contact />
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
