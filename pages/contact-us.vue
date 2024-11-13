<template>
  <div class="con my-20 py-20">
    <div class="flex justify-start flex-col lg:flex-row">
      <div class="text w-3/4 mx-12 md:px-4">
        <div>
          <p>
            <span class="key text-gray-500 text-sm my-5 py-5">
              {{ $t("contact-us.text.label1") }}
            </span>
          </p>
          <h2 class="font-bold text-primary text-3xl my-4">
            {{ $t("contact-us.text.question") }}
          </h2>
          <h2 class="font-bold text-primary text-3xl my-4">
            {{ $t("contact-us.text.pros") }}
          </h2>
        </div>
        <p>
          <span class="key text-gray-500 text-sm my-5 py-5">
            {{ $t("contact-us.text.label2") }}</span
          >
        </p>
        <h2 class="text-3xl py-4 font-bold">
          {{ $t("contact-us.text.goal") }}
        </h2>
        <p class="font-semibold">
          {{ $t("contact-us.text.paragraph") }}
        </p>
      </div>
      <div class="form w-full">
        <FormsContactUs />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
