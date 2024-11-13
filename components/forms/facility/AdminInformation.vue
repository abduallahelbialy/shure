<template>
  <div
    class="m-auto mt-4 text-center gap-4 w-full bg-white lg:w-3/4 rounded-bl-3xl rounded-br-3xl py-8"
  >
    <p class="quated">{{ $t("register.responsible-information.head") }}</p>
    <div class="form my-8 w-full">
      <form
        action=""
        class="text-center m-auto flex justify-center flex-col items-center px-2 relative"
      >
        <button @click="handleEmitNumber(1)" class="absolute text-white bg-black end-2 top-0 rounded-xl p-2">
          <span class="mdi mdi-arrow-left"></span>
        </button>
        <div class="relative input sm:w-3/4 w-full">
          <label
            for="subject"
            class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue text-blue-500"
            >{{ $t("register.responsible-information.form.name")
            }}<span class="text-red-500 ms-1">*</span></label
          >
          <input
            type="text"
            :placeholder="
              $t('register.responsible-information.form.placeholder.name')
            "
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
              >{{ $t("register.responsible-information.form.id")
              }}<span class="text-red-500 ms-1">*</span></label
            >
            <input
              type="text"
              :placeholder="
                $t('register.responsible-information.form.placeholder.id')
              "
              id="subject"
              name="subject"
              class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
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
        <div class="relative input sm:w-3/4 w-full mb-6">
          <label
            for="subject"
            class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue text-blue-500"
            >{{ $t("register.responsible-information.form.email")
            }}<span class="text-red-500 ms-1">*</span></label
          >
          <input
            type="text"
            :placeholder="$t('register.responsible-information.form.email')"
            id="subject"
            name="subject"
            class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div
          class="flex items-center gap-2 items-center sm:w-3/4 flex w-full py-2 mb-6"
        >
          <input
            type="checkbox"
            id="rememberMe"
            v-model="rememberMe"
            class="custom-checkbox rounded-full h-5 w-5 border-2 border-gray-300 text-green-600 checked:bg-green-600 checked:border-green-600 focus:ring-2 focus:ring-green-500 cursor-pointer"
          />
          <label for="rememberMe" class="text-sm text-gray-500">{{
            $t("register.responsible-information.form.checkbox")
          }}</label>
        </div>
        <btnsEntityBtn
          :text="$t('register.responsible-information.form.submit')"
          @click="handleEmitNumber(3)"
        />
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
const rememberMe = ref<boolean>();
const emit = defineEmits<{
  (e: "emitNumber", number: number): void;
}>();
const handleEmitNumber = (number: number) => {
  emit("emitNumber", number);
};
</script>

<style scoped>
.relative label {
  height: 30px;
  transform: translateY(18px);
  z-index: 11111;
  line-height: 30px;
  width: fit-content;
  background-color: #fff;
}
.select option {
  background-color: white;
  color: green;
}
.custom-checkbox:checked {
  background-color: #16a34a !important; /* Green color */
  border-color: #16a34a !important;
}
</style>
