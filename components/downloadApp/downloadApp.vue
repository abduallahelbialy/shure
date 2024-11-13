<template>
  <div class="flex flex-col md:items-center">
    <div class="flex justify-center">
      <downloadAppDownloadFrame title="Google Play" />
      <downloadAppDownloadFrame title="Apple Store" />
    </div>
    <div class="mt-8  mx-5 text-center ">
      <p class="text-white">{{ $t(props.title) }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
