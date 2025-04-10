<script setup>
import { ref, onMounted, computed } from "vue";
import ContactDialog from "../components/dialog/ContactDialog.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const aboutRef = ref(null);
const educationRef = ref(null);
const projectsRef = ref(null);
const showContactDialog = ref(false);
const showMobileMenu = ref(false);
const currentYear = ref(new Date().getFullYear());

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const handleContact = () => {
  showContactDialog.value = true;
};

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
    label: "Contact",
    onClick: handleContact,
  },
];

const filteredNavLinks = computed(() => {
  return route.path === "/"
    ? navLinks
    : navLinks.filter((link) => link.label === "Contact");
});

const scrollToSection = (item, scrollDuration = 2000) => {
  if (item?.value) {
    const target = item.value;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, scrollDuration);
      window.scrollTo(0, run);
      if (timeElapsed < scrollDuration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  }
};

const handleNavClick = (item) => {
  if (item.onClick) {
    item.onClick();
  } else if (item.section) {
    scrollToSection(item.section);
  }
};

const setRefs = (item) => {
  aboutRef.value = item.aboutRef;
  educationRef.value = item.educationRef;
  projectsRef.value = item.projectsRef;
};

onMounted(() => {});
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- <nav class="bg-gray-600 top-0 z-50 w-full">
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
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
                  v-for="(item, idx) in filteredNavLinks"
                  :key="idx"
                  @click="handleNavClick(item)"
                  class="text-white px-2 py-1 rounded-md sm:text-sm md:text-base lg:text-base xl:text-basew font-bold cursor-pointer hover:bg-transparent transition-colors duration-800"
                  >{{ item.label.toLocaleLowerCase() }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav> -->
    <div v-if="showMobileMenu" class="sm:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1">
      <a
        v-for="(item, idx) in navLinks"
        :key="idx"
        @click="
          handleNavClick(item);
          showMobileMenu = false;
        "
        class="block text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-gray-700 transition-colors"
      >
        {{ item.label.toLocaleLowerCase() }}
      </a>
    </div>
    <div class="flex-1">
      <router-view @setRefs="setRefs" />
    </div>
    <div>
      <ContactDialog
        v-if="showContactDialog"
        :show="showContactDialog"
        @close="showContactDialog = false"
      />
    </div>
    <footer
      v-if="route.path === '/'"
      class="bg-gray-800 font-normal text-[12px] py-4 text-white text-center"
    >
      <div>
        Developed by <span class="text-blue-300">@muhdnajb</span>. All rights reserved.
        &copy;
        {{ currentYear }}
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Waterfall&display=swap");
.sticky {
  position: fixed;
  width: 100%;
  z-index: 9999;
  top: 0;
}
.waterfall-regular {
  font-family: "Waterfall", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
