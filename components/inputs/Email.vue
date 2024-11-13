<template>
  <div class="px-3 xl:w-80">
    <div>
      <label
        for="price"
        class="block text-xs font-medium leading-6 text-white"
        >{{ props.label }}</label
      >
      <div class="relative mt-2 rounded-md shadow-sm">
        <div
          class="pointer-events-none absolute inset-y-0 ps-5 mt-1 flex items-center"
        >
          <span class="text-gray-500 sm:text-sm"
            ><i class="material-icons emails">email</i>
          </span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          class="block w-full rounded-full ps-14 input h-14 border-0 py-1.5 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          :placeholder="$t('plachHolder.email')"
        />
      </div>
    </div>
  </div>
  <div
    class="mx-1 bg-green nav-item text-white mt-2 h-14 text-sm font-normal sm:w[30px]"
    :class="{ 'mt-8': props.label }"
  >
    <p>{{ $t("footer.subscribe") }}</p>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  label?: string;
}>();
</script>
