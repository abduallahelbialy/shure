<template>
  <div class="text-center flex justify-center my-1 mt-10">
    <button
      class="pe-2 ps-5 py-2 rounded-full flex items-center text-sm font-bold justify-between bg-white text-primary"
      :class="{ default: props.def }"
    >
      {{props.text }}
      <span class="mx-4">
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ en: $t('language') === 'English' }"
        >
          <path
            d="M1 4.5H13M1 4.5L4 1.5M1 4.5L4 7.5"
            :stroke="def === true ? '#fff' : '#005dba'"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  def?: boolean;
  text?: string;
}>();
</script>
<style scoped>
.default {
  background-color: #005dba !important;
  color: white;
}
.en {
  transform: scale(-1, 1);
}
</style>
