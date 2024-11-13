<template>
  <div>
    <div
      class="flex w-full mt-10 bg-white justify-between items-center rounded-t-2xl p-5"
    >
      <dashboardBreadCamps :text="$t('dashboard_pages.sidebar.reservations')" />
      <div class="input relative">
        <input
          :placeholder="
            $t('dashboard_pages.dashboard.reservations.placeholder')
          "
          class="mdi mdi-magnify border-2 p-4 px-8 sm:pe-14 mx-4 rounded-full"
        />
        <span
          class="mdi mdi-magnify absolute start-7 top-[19px]"
          size="2xl"
          style="color: #b9b9b9"
        ></span>
      </div>
    </div>

    <table
      class="min-w-full text-xs bg-white border border-gray-300 rounded-b-2xl"
    >
      <thead>
        <tr class="bg-primary text-white uppercase text-xs">
          <th class="py-6 px-6 text-start">
            <input
              type="checkbox"
              class="form-checkbox h-4 w-4 text-blue-600"
            />
          </th>
          <th class="py-6 px-6 text-start">
            {{ $t("dashboard_pages.dashboard.reservations.table.col-1") }}
          </th>
          <th class="py-6 px-6 text-start">
            {{ $t("dashboard_pages.dashboard.reservations.table.col-2") }}
          </th>
          <th class="py-6 px-6 text-start">
            {{ $t("dashboard_pages.dashboard.reservations.table.col-3") }}
          </th>
          <th class="py-6 px-6 text-start">
            {{ $t("dashboard_pages.dashboard.reservations.table.col-4") }}
          </th>
          <th class="py-6 px-6 text-start">
            {{ $t("dashboard_pages.dashboard.reservations.table.col-5") }}
          </th>
          <th class="py-6 px-6 text-start">
            {{ $t("dashboard_pages.dashboard.reservations.table.col-6") }}
          </th>
          <th class="py-6 px-6 text-start">
            {{ $t("dashboard_pages.dashboard.reservations.table.col-7") }}
          </th>
          <th class="py-6 px-6 text-start">
            {{ $t("dashboard_pages.dashboard.reservations.table.col-8") }}
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-xs font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100 font-extrabold">
          <td class="py-6 px-6 text-start">
            <input
              type="checkbox"
              class="form-checkbox h-4 w-4 text-blue-600"
            />
          </td>
          <td class="py-6 px-6 text-start">
            <div class="flex gap-3 items-center">
              <div
                class="w-[40px] h-[40px] bg-primary rounded-full text-white text-center pt-3 text-xs font-medium"
              >
                z.w
              </div>
              <div>
                <p class="text-primary">name</p>
                <p class="text-gray-500 pt-1">phone</p>
              </div>
            </div>
          </td>
          <td class="py-6 px-6 text-start">
            <p class="text-primary">seccoin</p>
            <p class="text-gray-500 pt-1">minute</p>
          </td>
          <td class="py-6 px-6 text-start">
            <p class="text-primary">mobile</p>
          </td>
          <td class="py-6 px-6 text-start"><p class="text-primary">mail</p></td>
          <td class="py-6 px-6 text-start">
            <p class="text-primary">address</p>
          </td>
          <td class="py-6 px-4 text-start">
            <div
              class="bg-green flex items-center justify-center rounded-full mx-0 text-white h-14 text-xs w-[100px]"
            >
              <p>specilist</p>
            </div>
          </td>
          <td class="py-6 px-6 text-start">
            <p class="text-primary">date</p>
            <p class="text-gray-500 pt-1">time</p>
          </td>
          <td class="py-6 px-6 text-start cursor-pointer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="18" fill="#005DBA" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9993 28.3327C24.6017 28.3327 28.3327 24.6017 28.3327 19.9993C28.3327 15.397 24.6017 11.666 19.9993 11.666C15.397 11.666 11.666 15.397 11.666 19.9993C11.666 21.3324 11.979 22.5923 12.5356 23.7098C12.6835 24.0067 12.7327 24.3461 12.6469 24.6665L12.1506 26.5216C11.9351 27.3268 12.6719 28.0635 13.4771 27.8481L15.3322 27.3518C15.6526 27.266 15.992 27.3153 16.289 27.4631C17.4063 28.0197 18.6663 28.3327 19.9993 28.3327ZM16.666 21.041C16.3208 21.041 16.041 21.3208 16.041 21.666C16.041 22.0112 16.3208 22.291 16.666 22.291H21.2493C21.5945 22.291 21.8743 22.0112 21.8743 21.666C21.8743 21.3208 21.5945 21.041 21.2493 21.041H16.666ZM16.041 18.7493C16.041 18.4042 16.3208 18.1243 16.666 18.1243H23.3327C23.6778 18.1243 23.9577 18.4042 23.9577 18.7493C23.9577 19.0945 23.6778 19.3743 23.3327 19.3743H16.666C16.3208 19.3743 16.041 19.0945 16.041 18.7493Z"
                fill="white"
              />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between items-center">
      <div class="flex items-center justify-start space-x-1 mt-4">
        <!-- Previous Button -->
        <button
          class=""
          :disabled="currentPage === 1"
          @click="previousPage"
        >
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="25"
              height="23"
              rx="3.5"
              fill="#F5F5F5"
            />
            <rect
              x="0.5"
              y="0.5"
              width="25"
              height="23"
              rx="3.5"
              stroke="#EEEEEE"
            />
            <path
              d="M12.936 14.392L10.176 11.668L12.936 8.944H14.664L11.892 11.668L14.664 14.392H12.936Z"
              fill="#404B52"
            />
          </svg>
        </button>

        <!-- Page 1 -->
        <button
          class="px-2 py-1 border rounded-md"
          :class="{
            'bg-blue-500 text-white': currentPage === 1,
            'bg-white text-gray-500 border-gray-300': currentPage !== 1,
          }"
          @click="goToPage(1)"
        >
          1
        </button>

        <!-- Middle Ellipsis -->
        <span v-if="showMiddleEllipsis" class="px-4 py-2 text-gray-500"
          >...</span
        >

        <!-- Page Number before last -->
        <button
          v-if="currentPage !== totalPages - 1"
          class="px-2 py-1 border rounded-md"
          :class="{
            'bg-blue-500 text-white': currentPage === totalPages - 1,
            'bg-white text-gray-500 border-gray-300':
              currentPage !== totalPages - 1,
          }"
          @click="goToPage(totalPages - 1)"
        >
          {{ totalPages - 1 }}
        </button>

        <!-- Last Page -->
        <button
          class="px-2 py-1 border rounded-md"
          :class="{
            'bg-blue-500 text-white': currentPage === totalPages,
            'bg-white text-gray-500 border-gray-300':
              currentPage !== totalPages,
          }"
          @click="goToPage(totalPages)"
        >
          {{ totalPages }}
        </button>

        <!-- Next Button -->
        <button
          class=""
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="25"
              height="23"
              rx="3.5"
              fill="#F5F5F5"
            />
            <rect
              x="0.5"
              y="0.5"
              width="25"
              height="23"
              rx="3.5"
              stroke="#EEEEEE"
            />
            <path
              d="M10.344 8.944H12.072L14.832 11.668L12.072 14.392H10.344L13.116 11.668L10.344 8.944Z"
              fill="#404B52"
            />
          </svg>
        </button>
      </div>
      <button class="bg-black py-4 px-4 rounded-full text-white m-4">
        next
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
const currentPage = ref(1);
const totalPages = ref(10);

const goToPage = (page: number) => {
  currentPage.value = page;
};

const previousPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const showMiddleEllipsis = computed(() => {
  return currentPage.value < totalPages.value - 1;
});
</script>
