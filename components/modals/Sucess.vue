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
          <rect width="78" height="78" rx="39" fill="#65CE00" />
          <path
            d="M27.625 42.25L32.8788 46.1903C33.5754 46.7127 34.56 46.5933 35.1115 45.9194L48.75 29.25"
            stroke="white"
            stroke-width="4.5"
            stroke-linecap="round"
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
