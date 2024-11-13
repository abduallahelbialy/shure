<template>
  <div
    class="m-auto mt-4 text-center gap-4 w-full bg-white lg:w-3/4 rounded-bl-3xl rounded-br-3xl py-24"
  >
    <div class="content m-auto flex flex-col items-center justify-center">
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
      <p class="my-6 font-bold"> {{ props.message }}</p>
      <p class="text-sm text-gray-500"> {{ props.followUpMessage }}</p>
      <nuxt-link :to="props.route"
        class="m-auto bg-primary rounded-full py-5 px-6 text-white my-6 font-bold"
        @click="handleEmitNumber(6)"
      >
      {{ props.routeText }}
      </nuxt-link>
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
const emit = defineEmits<{
  (e: "emitNumber", number: number): void;
}>();
const handleEmitNumber = (number: number) => {
  emit("emitNumber", number);
};
</script>
