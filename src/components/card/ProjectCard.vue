<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { props } = defineProps({
  props: { type: Object },
});

const imgList = {
  mysitasi: [
    {
      title: "MySITASI: Sistem Repositori Penerbitan Ilmiah Malaysia",
      institution: "Ministry of Education Malaysia",
      img: [
        "/img/mysitasi/mysitasi-1.jpg",
        "/img/mysitasi/mysitasi-2.jpg",
        "/img/mysitasi/mysitasi-4.jpg",
        "/img/mysitasi/mysitasi-5.jpg",
      ],
      period: "2023-Present",
      imgcaption:
        "Some highlights with end-users throughout the project journey (2023–2025).",
      description: `
      The Department of Higher Education (JPT) is responsible for enhancing the global visibility of Malaysia's academic publications. To support this effort, an integrated system with new features, known as the Sistem Repositori Penerbitan Ilmiah Malaysia (MySitasi), is being developed. This system will replace three existing separate platforms; MyJurnal, MyCite, and MyJMS, aligning with the latest technological advancements to improve the delivery of products and services. <br/><br/> MySitasi is a unified platform for Malaysia's academic publishing, integrating key services such as user management, journal management, journal evaluation and performance tracking, reporting and analytics, subscription management, and both internal and external system integration. Equipped with advanced ICT features, it ensures seamless operations in citation management while enhancing the visibility of Malaysian scholarly publications on the international stage. <br/><br/> The target users include the Ministry of Higher Education (KPT), the Department of Higher Education (JPT), Higher Education Institutions (IPT), public agencies, private agencies, as well as professional bodies and associations. This diverse user base ensures comprehensive engagement across academic and research communities.
      `,
      contribution:
        "As a front-end developer for the MySitasi project, I was responsible for developing and enhancing the portal and system management platform. I worked closely with UI/UX designers to translate design concepts into a responsive and user-friendly interface, ensuring a seamless user experience. Additionally, I integrated APIs for dynamic interactions and collaborated with the backend team to align front-end functionality with system requirements. I also conducted testing and debugging to optimize performance and ensure cross-browser compatibility. Through these efforts, I contributed to improving the efficiency, usability, and overall user experience of the MySitasi platform.",
      client: "Ministry of Education Malaysia",
      source: "eRMS-SPID",
    },
  ],
  upmnet: [
    {
      title: "UPMNet 4.0",
      institution: "Universiti Putra Malaysia (UPM)",
      img: [
        "/img/upm/upm-1.jpg",
        "/img/upm/upm-2.jpg",
        "/img/upm/upm-3.jpg",
        "/img/upm/upm-4.jpg",
        "/img/upm/upm-5.jpg",
      ],
      period: "2023",
      imgcaption: "Networking UAT session at UPM, Serdang (2023)",
      description: `UPMNet 4.0 has led to significant upgrades in ICT infrastructure, including the University Data Center and computer network, to enhance online learning and digital services at Universiti Putra Malaysia (UPM). As technology continues to evolve, the UPMNet project aims to upgrade its 23-year-old network with better-designed equipment. As part of this initiative, from December 2023 to early 2024, a User Acceptance Test (UAT) was conducted in selected UPM blocks to assess the network’s stability, performance, and overall effectiveness. The testing phase focused on identifying potential bottlenecks, evaluating connection speeds, and ensuring that the upgraded infrastructure meets the university’s operational and academic requirements. The results from this UAT will guide further improvements and optimizations in the next phases of the UPMNet upgrade.`,
      contribution:
        "I assisted in the networking testing phase of the UPMNet project, ensuring the upgraded infrastructure met performance expectations and operational requirements. My contributions included conducting User Acceptance Testing (UAT) in selected UPM blocks, testing network stability, speed, and reliability, and identifying potential issues. I also monitored latency, bandwidth, and connectivity performance to help optimize the network. Moreover, I assisted in troubleshooting and reporting network issues, collected test data, and provided feedback for improvements. Throughout the process, I collaborated with IT and network teams to refine configurations and ensure a stable and efficient upgraded network for Universiti Putra Malaysia (UPM).",
      client: "Universiti Putra Malaysia (UPM)",
    },
  ],
};

localStorage.setItem("projectData", JSON.stringify(imgList));

const goDetails = (item) => {
  router.push({
    name: "ProjectDetails",
    params: { path: item.path },
  });
};

onMounted(() => {});
</script>

<template>
  <div class="min-w-[350px] max-h-auto">
    <div class="overflow-hidden">
      <img
        class="rounded-t-sm object-cover w-full min-h-[180px] max-h-[220px] transition-transform duration-700 hover:scale-108 bg-white"
        :src="props.img"
        :alt="props.title"
      />
    </div>
    <div class="min-h-[200px] flex flex-col items-center justify-center">
      <a :href="props.link">
        <p
          class="text-xl font-bold tracking-tight text-black dark:text-white bg-black/80 px-2.5"
        >
          {{ props.title }}
        </p>
      </a>
      <div class="p-1.5">
        <p class="text-sm font-medium text-black">
          {{ props.institution }}
        </p>
        <p class="text-sm font-medium text-black">
          {{ props.period }}
        </p>
      </div>
      <!-- <button
        @click.prevent="goDetails(props)"
        class="cursor-pointer inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <p class="px-2 text-xs">Read more</p>
      </button> -->
      <button
        @click.prevent="goDetails(props)"
        class="cursor-pointer inline-flex items-center px-3 py-1.5 text-sm font-medium text-black border border-blue-500 rounded-sm focus:outline-none dark:border-blue-500 dark:text-blue-500"
      >
        <p class="px-2 text-xs">Read more</p>
      </button>

      <!-- div -->
    </div>
  </div>
</template>

<style scoped></style>
