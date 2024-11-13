<template>
  <div class="py-5 d-card" v-for="doctor in DoctorCard" :key="doctor.name">
    <div class="docto-img w-full">
      <img src="../public/hero/doctor-khaled.jpg" alt="" class="w-full"/>
    </div>
    <div class="description p-5 rounded-bl-2xl rounded-br-2xl bg-white">
      <div class="flex justify-between py-2">
        <div class="flex">
          <p class="text-green px-2">{{ $t(doctor.name) }}</p>
          <span class="mx-1 mt-2"
            ><img src="../public/hero/dot.svg" alt="" width="8"
          /></span>
          <p class="text-black mx-1">{{ $t(doctor.depart) }}</p>
        </div>
        <p class="date text-gray-500">{{ $t(doctor.date) }}</p>
      </div>
      <h2 class="font-bold text-primary mt-2">{{ $t(doctor.title) }}</h2>
      <p class="text-gray-500 mt-1">{{ $t(doctor.description) }}</p>
      <div class="flex justify-between items-end">
        <btnsBookBtn :def="true" :text="$t('btns.book')" />
        <div class="text-center bg-primary rounded-full">
          <span class="w-2 p-2 -m-1 icon text-white text-center" :class="{}">
            <i :class="['mdi', 'mdi-heart-outline']"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import DoctorCard from "./json/doctors";
</script>
<style scoped>
.d-card {
  min-width: 375px;
}
</style>
