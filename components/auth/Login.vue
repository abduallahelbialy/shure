<template>
  <div class="my-20 py-20 bg-light-blue flex justify-center items-center">
    <div
      class="flex justify-center w-full items-center shadow-lg bg-white lg:w-1/2 rounded-3xl"
    >
      <div class="py-10 text-center my-12 w-full">
        <div class="my-3 flex justify-center logo">
          <img src="../../public/logo.svg" alt="logo" />
        </div>
        <div class="mt-12 flex justify-center font-bold">
          <h2 class="md:font-5xl font-3xl">{{ $t("login.welcome") }}</h2>
          <span class="mx-2">
            <img src="../../public/hero/handrasie.jpg" alt="hand" class="px-1"
          /></span>
        </div>
        <p class="quated">{{ $t("login.account-details") }}</p>
        <div class="form my-8 w-full">
          <form
            action=""
            class="text-center m-auto flex justify-center flex-col items-center px-2"
          >
            <div class="relative input sm:w-3/4 w-full">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue text-blue-500"
                >{{ $t("login.form.name")
                }}<span class="text-red-500 ms-1">*</span></label
              >
              <input
                type="text"
                :placeholder="$t('login.form.placeholder.name')"
                id="subject"
                name="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div class="relative input sm:w-3/4 flex items-center w-full">
              <div class="w-full">
                <label
                  for="subject"
                  class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500"
                  >{{ $t("login.form.phone")
                  }}<span class="text-red-500 ms-1">*</span></label
                >
                <input
                  type="text"
                  :placeholder="$t('login.form.placeholder.phone')"
                  id="subject"
                  name="subject"
                  class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div class="text-white select">
                <select
                  id="options"
                  class="inline rounded-3xl bg-green shadow-sm ms-2 mt-8 py-4 px-2 cursor-pointer"
                >
                  <option value="" disabled class="">888</option>
                  <option>889</option>
                  <option>889</option>
                  <option>889</option>
                  <option>889</option>
                  <option>889</option>
                </select>
              </div>
            </div>
            <div
              class="flex items-center gap-2 items-center sm:w-3/4 flex w-full py-2"
            >
              <input
                type="checkbox"
                id="rememberMe"
                v-model="rememberMe"
                class="custom-checkbox rounded-full h-5 w-5 border-2 border-gray-300 text-blue-600 checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <label for="rememberMe" class="text-sm text-gray-500">{{
                $t("login.form.checkbox")
              }}</label>
            </div>
            <button
              @click.prevent=""
              class="bg-primary md:w-3/4 rounded-full py-3 text-white my-5 w-full font-bold"
            >
              {{ $t("contact-us.form.submit") }}
            </button>
            <p class="text-gray-500">
              {{ $t("login.form.no-account") }}
              <span
                ><nuxt-link to="/register" class="text-primary">
                  {{ $t("login.form.new-account") }}</nuxt-link
                ></span
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const rememberMe = ref<boolean>();
</script>
<style scoped>
.custom-checkbox {
  appearance: none;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.custom-checkbox:checked {
  background-color: #2563eb;
  border-color: #2563eb;
}

.custom-checkbox:checked::before {
  content: "✓";
  color: white;
  font-size: 0.75rem;
}
.select option {
  background-color: white;
  color: green;
}
.relative label {
  height: 30px;
  transform: translateY(18px);
  z-index: 11111;
  line-height: 30px;
  width: fit-content;
  background-color: #fff;
}
</style>
