<template>
  <div class="flex items-center justify-center">
    <div
      class="flex"
      :class="{
        'text-primary': props.title === 'Google Play',
        'text-black': props.title !== 'Google Play',
      }"
    >
      <div
        :class="['nav-item','frame', 'bg-white','mt-8','h-14','flex','flex-row-reverse','p-5',props.bg]"
      >
        <div class="ps-2 text-start">
          <p style="font-size: 8px" class="">Download on the</p>
          <p class="text-xs md:text-sm">{{ props.title }}</p>
        </div>
        <span class=""
          ><i
            class="mdi text-2xl"
            :class="{
              'mdi-google-play': props.title === 'Google Play',
              'mdi-apple': props.title === 'Apple Store',
            }"
          ></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string;
    bg?: string;
  }>(),
  {
    bg: 'bg-white' // Default value for bg
  }
);

</script>
<style scoped>
.frame {
  min-width: 80px;
}
@media (max-width: 350px) {
  .frame {
    padding: 2px 15px;
  }
}
</style>
