<script setup lang="ts">
import menuItems from "./json/menu";
const { locale } = useI18n();
const langList = ref<boolean>(false);
const openMobileMenu = ref<boolean>(false);
const route = useRoute();
const langCookie = useCookie("i18n_redirected");

const changeLang = () => {
  langList.value = false;
  if (locale.value === "en") {
    locale.value = "ar";
    langCookie.value = "ar";
    document.documentElement.setAttribute("dir", "rtl");
  } else if (locale.value === "ar") {
    locale.value = "en";
    langCookie.value = "en";
    document.documentElement.setAttribute("dir", "ltr");
  }
};
</script>
<template>
  <div class="header bg-white fixed w-full py-3">
    <div class="con p-2 justify-between items-center flex">
      <div class="flex items-center">
        <div class="logo mx-5">
          <nuxt-link to="/">
            <img src="/public/logo.svg" alt="Shure"
          /></nuxt-link>
        </div>
        <div class="items">
          <ul class="hidden mx-4 lg:flex">
            <nuxt-link
              v-for="item in menuItems"
              :key="item.id"
              :to="$t(item.route)"
              class="text-primary nav-item"
            >
              {{ $t(item.label) }}
            </nuxt-link>
          </ul>
        </div>
      </div>
      <div
        class="relative hidden lg:flex items-center justify-center text-center"
      >
        <nuxt-link
          to="/login"
          v-if="route.name != 'login'"
          class="mx-2 text-primary border-solid border font-bold text-xs border-primary p-2 rounded-3xl nav-item"
          >{{ $t("btns.Entity-Register") }}</nuxt-link
        >
        <div class="relative">
          <button
            type="button"
            class="text-white text-uppercase bg-green nav-item font-bold z-10"
            @click="langList = !langList"
          >
            {{ $t("language") }}
            <svg
              class="mr-1 h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            class="absolute w-full mt-1 t rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            v-if="langList"
          >
            <div class="py-1 cursor-pointer" role="none">
              <a
                class="block px-4 py-2 text-sm text-gray-700"
                @click="changeLang"
              >
                {{ $t("language") === "English" ? "العربية" : "English" }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center lg:hidden">
        <button>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="openMobileMenu = !openMobileMenu"
          >
            <rect width="50" height="50" rx="18" fill="#005DBA" />
            <path
              d="M17 30H26.1429M17 25H33M23.8571 20H33"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-if="openMobileMenu"
      class="mobile-items pb-10 lg:hidden absolute w-full top-20"
    >
      <ul class="flex flex-col">
        <li
          v-for="(item, index) in menuItems"
          :key="item.id"
          class="text-primary nav-item"
          :class="{ 'bg-primary text-white': index === 0 }"
        >
          {{ $t(item.label) }}
        </li>
      </ul>
      <div class="actions w-full flex flex-col">
        <nuxt-link
          to="/"
          class="mx-2 text-primary border-solid border font-bold text-xs border-primary p-2 rounded-3xl nav-item"
          >{{ $t("btns.Entity-Register") }}</nuxt-link
        >
        <button
          type="button"
          class="text-white text-uppercase bg-green mt-1 nav-item font-bold"
          @click="langList = !langList"
        >
          {{ $t("language") }}
          <svg
            class="mr-1 h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div class="relative w-full flex">
          <div
            class="absolute w-full mt-1 t rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            v-if="langList"
          >
            <div class="py-1 cursor-pointer" role="none">
              <a
                class="block px-4 py-2 text-sm text-gray-700"
                @click="changeLang"
              >
                {{ $t("language") === "English" ? "العربية" : "English" }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: #005dba;
  color: white;
}
.header {
  height: 90px;
  z-index: 111;
  top: 0;
}
.items ul li {
  background-color: #f9f9f9;
  cursor: pointer;
}
.mobile-items {
  background-color: white;
  z-index: 11;
}
</style>
