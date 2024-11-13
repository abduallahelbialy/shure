<template>
  <button
    class="pe-2 md:ps-5 ps-2 py-3 bg-primary rounded-full flex items-center text-xs md:text-sm font-bold justify-between m-auto md:m-0"
  >
    {{ props.text }}
    <span class="md:ms-5 ms-2"
      ><img
        src="../../public/hero/btnarrow.svg"
        alt=""
        class="mx-2 text-center bg-white rounded-3xl p-2.5"
        :class="{ en: $t('language') === 'English' }"
        width="35"
        height="35"
    /></span>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{ text: string }>();
</script>
<style scoped>
.en {
  transform: scale(-1, 1);
}
</style>
