<template>
  <button @click.prevent=""
    class="text-white pe-32 ps-5 py-3 bg-primary rounded-full flex items-center text-sm font-bold justify-between"
  >
    <span class="ms-"
      ><img
        src="../../public/hero/btnarrow.svg"
        alt=""
        class="mx-2 text-center bg-white rounded-3xl p-2.5"
        :class="{ en: $t('language') === 'English' }"
        width="35"
        height="35" /></span
    >{{ props.text }}
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
