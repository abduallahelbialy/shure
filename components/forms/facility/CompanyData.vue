<template>
  <div
    class="m-auto mt-4 text-center gap-4 w-full bg-white lg:w-3/4 rounded-bl-3xl rounded-br-3xl py-8"
  >
    <p class="quated">{{ $t("register.facility.head") }}</p>
    <div class="form my-8 w-full">
      <form
        action=""
        class="text-center m-auto flex justify-center flex-col items-center px-2"
      >
        <div class="relative input sm:w-3/4 w-full">
          <label
            for="subject"
            class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue text-blue-500"
            >{{ $t("register.facility.form.name")
            }}<span class="text-red-500 ms-1">*</span></label
          >
          <input
            type="text"
            :placeholder="$t('register.facility.form.placeholder.name')"
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
              >{{ $t("register.facility.form.address")
              }}<span class="text-red-500 ms-1">*</span></label
            >
            <input
              type="text"
              :placeholder="$t('register.facility.form.address')"
              id="subject"
              name="subject"
              class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div class="relative input sm:w-3/4 w-full">
          <label
            for="subject"
            class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue text-blue-500"
            >{{ $t("register.facility.form.phone")
            }}<span class="text-red-500 ms-1">*</span></label
          >
          <input
            type="text"
            :placeholder="$t('register.facility.form.phone')"
            id="subject"
            name="subject"
            class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="relative input sm:w-3/4 w-full mb-12">
          <label
            for="subject"
            class="block text-sm font-bold text-start ms-3 px-2 sm:tex-base text-xs text-blue text-blue-500"
            >{{ $t("register.facility.form.email")
            }}<span class="text-red-500 ms-1">*</span></label
          >
          <input
            type="text"
            :placeholder="$t('register.facility.form.email')"
            id="subject"
            name="subject"
            class="mt-1 block w-full px-3 py-2 py-4 rounded-2xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <btnsEntityBtn
          :text="$t('register.facility.form.submit')"
          @click="handleEmitNumber(2)"
        />
      </form>
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
</style>
