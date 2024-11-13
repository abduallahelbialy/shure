<template>
  <div class="text-center font-bold">
    <div class="flex justify-center">
      <div class="w-fit relative">
        <h3 class="text-green title  flex justify-center w-fit">
          <span class="quated">
            {{ props.title }}<span class="hidden md:inline"></span
          ></span>
        </h3>
      </div>
    </div>
    <h2 class="my-4 text-xl" :class="{ 'text-primary': props.primary }">
      {{ props.description }}
    </h2>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
  primary: boolean;
}>();
</script>
<style scoped>

.title::after {
  content: "";
  position: absolute;
  width: 86px;
  height: 12px;
  top: 25px;

  text-align: center;
  background-image: url("../public/services/line.svg");
  background-repeat: no-repeat;
  z-index: 11;
}
</style>
