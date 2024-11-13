<template>
  <div class="z-50">
    <div
      style="background-color: rgba(0, 0, 0, 0.5)"
      class="w-full shadow absolute h-full top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <div
        class="sm:w-1/3 z-50 sm:h-1/2 w-full relative text-primary bg-white rounded-3xl flex flex-col justify-center items-center"
      >
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="78" height="78" rx="39" fill="#E4A200" />
          <path
            d="M37.5415 31.707H40.4582V41.9154H37.5415V31.707ZM37.5415 43.3737H40.4582V46.2904H37.5415V43.3737Z"
            fill="white"
          />
          <path
            d="M53.1559 32.135L45.8642 24.8433C45.729 24.7076 45.5683 24.6 45.3914 24.5267C45.2144 24.4533 45.0247 24.4157 44.8332 24.416H33.1665C32.975 24.4157 32.7853 24.4533 32.6083 24.5267C32.4314 24.6 32.2707 24.7076 32.1355 24.8433L24.8438 32.135C24.7081 32.2702 24.6005 32.4309 24.5272 32.6078C24.4538 32.7848 24.4162 32.9745 24.4165 33.166V44.8327C24.4165 45.2206 24.5696 45.591 24.8438 45.8637L32.1355 53.1554C32.2707 53.2911 32.4314 53.3987 32.6083 53.472C32.7853 53.5454 32.975 53.583 33.1665 53.5827H44.8332C45.2211 53.5827 45.5915 53.4296 45.8642 53.1554L53.1559 45.8637C53.2916 45.7285 53.3992 45.5678 53.4725 45.3909C53.5458 45.2139 53.5835 45.0242 53.5832 44.8327V33.166C53.5835 32.9745 53.5458 32.7848 53.4725 32.6078C53.3992 32.4309 53.2916 32.2702 53.1559 32.135ZM50.6665 44.2289L44.2294 50.666H33.7703L27.3332 44.2289V33.7698L33.7703 27.3327H44.2294L50.6665 33.7698V44.2289Z"
            fill="white"
          />
        </svg>

        <h2 class="py-2">{{ props.message }}</h2>
        <p>{{ props.followUpMessage }}</p>
        <nuxt-link
          class="bg-primary py-2 px-4 my-4 text-white text-xl rounded-full"
          to=""
        >
          {{ props.routeText }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  message: string;
  followUpMessage?: string;
  routeText: string;
  route?: string;
}>();
</script>
