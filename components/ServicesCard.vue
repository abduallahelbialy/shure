<template>
  <div
    class=" card bg-light-blue flex flex-col justify-between text-primary p-4 py-10 rounded-3xl shadow-md text-center"
    v-for="(card, index) in Cards"
    :class="{ default: index === 0 }"
    :key="card.title"
  >
    <div class="text-center my-2 mb-5">
      <span
        class="p-2 w-2 rounded-full icon t"
        :class="{
          'bg-white': index === 0,
          'text-primary': index === 0,
          'text-white': index != 0,
          'bg-primary': index != 0,
        }"
      >
        <i :class="['mdi', card.icon]"></i
      ></span>
    </div>
    <h2 class="font-bold text-xl">{{ $t(card.title) }}</h2>
    <div class="flex justify-center py-2">
      <svg
        width="149"
        height="13"
        viewBox="0 0 149 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.13631 9.39304C20.9465 4.23974 76.2262 -2.73209 146.864 10.6069"
          :stroke="index === 0 ? '#fff' : '#005dba'"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <p class="py-2 text-sm px-3" :class="{ 'font-bold': index === 0 }">
      {{ $t(card.text) }}
    </p>

    <btnsBookBtn :def="index === 0 ? false : true" :text="$t('btns.book')" />
  </div>
</template>
<script setup lang="ts">
import Cards from "./json/services";
</script>
<style scoped>
.card{
  min-height:390px ;
  width: 100%;
  min-width: 320px;
}
.default {
  background-color: #005dba;
  color: white;
}
</style>
