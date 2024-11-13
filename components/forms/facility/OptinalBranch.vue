<template>
  <div
    class="m-auto mt-4 text-center gap-4 w-full bg-white lg:w-3/4 rounded-bl-3xl rounded-br-3xl py-8"
  >
    <p class="quated font-bold">{{ $t("register.optional-branch.head") }}</p>
    <div class="form my-8 w-full">
      <form
        action=""
        class="text-center m-auto flex justify-center flex-col items-center px-2 relative"
      >      <button @click="handleEmitNumber(4)" class="absolute text-white bg-black end-2 top-0 rounded-xl p-2">
          <span class="mdi mdi-arrow-left"></span>
        </button>
        <div
          class="flex w-full flex-col sm:flex-row md:px-16 gap-4 justify-center w-3/4"
        >
          <div class="relative input w-full sm:w-5/12">
            <label
              for="subject"
              class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue text-blue-500"
              >{{ $t("register.optional-branch.form.country")
              }}<span class="text-red-500 ms-1">*</span></label
            >
            <select
              class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="sss" class="">
                {{ $t("register.optional-branch.form.placeholder.city") }}
              </option>
              <option>
                {{ $t("register.optional-branch.form.placeholder.city") }}
              </option>
              <option>889</option>
              <option>889</option>
              <option>889</option>
              <option>889</option>
            </select>
          </div>
          <div class="relative input flex items-center w-full sm:w-5/12">
            <div class="w-full">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500"
                >{{ $t("register.optional-branch.form.city")
                }}<span class="text-red-500 ms-1">*</span></label
              >
              <select
                id="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="sss" class="">
                  {{ $t("register.optional-branch.form.placeholder.city") }}
                </option>
                <option>
                  {{ $t("register.optional-branch.form.placeholder.city") }}
                </option>
                <option>889</option>
                <option>889</option>
                <option>889</option>
                <option>889</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="flex w-full flex-col sm:flex-row md:px-16 gap-4 justify-center w-3/4"
        >
          <div class="relative input w-full sm:w-5/12">
            <label
              for="subject"
              class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue text-blue-500"
              >{{ $t("register.optional-branch.form.country")
              }}<span class="text-red-500 ms-1">*</span></label
            >
            <input
              type="text"
              :placeholder="
                $t('register.optional-branch.form.placeholder.country')
              "
              id="subject"
              name="subject"
              class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div class="relative input flex items-center w-full sm:w-5/12">
            <div class="w-full">
              <label
                for="subject"
                class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue-500"
                >{{ $t("register.optional-branch.form.city")
                }}<span class="text-red-500 ms-1">*</span></label
              >
              <input
                type="text"
                :placeholder="$t('register.optional-branch.form.city')"
                id="subject"
                name="subject"
                class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <button
          class="m-auto bg-primary rounded-full py-5 w-3/4 text-white my-12 font-bold"
          @click="handleEmitNumber(6)"
        >
          {{ $t("register.optional-branch.form.submit") }}
        </button>
      </form>
      <div class="flex justify-center">
        <btnsRegisterBtn
          :text="$t('register.optional-branch.form.skip')"
          class="text-white"
          @click="handleEmitNumber(6)"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
