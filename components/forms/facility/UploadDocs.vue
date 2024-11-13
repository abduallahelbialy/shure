<template>
  <div
    class="m-auto mt-4 text-center gap-4 w-full bg-white lg:w-3/4 rounded-bl-3xl rounded-br-3xl py-8"
  >
    <p class="quated">{{ $t("register.upload-docs.head") }}</p>
    <div class="form my-8 w-full">
      <form
        action=""
        class="text-center m-auto flex justify-center flex-col items-center px-2 relative"
      >     <button @click="handleEmitNumber(2)" class="absolute text-white bg-black end-2 top-0 rounded-xl p-2">
          <span class="mdi mdi-arrow-left"></span>
        </button>
        <div class="relative input sm:w-3/4 w-full">
          <div class="flex flex-col gap-4">
            <div
              class="flex flex-col sm:flex-row gap-4 justify-around items-center gap-4 pt-16"
            >
              <div
                class="relative border-dashed border-2 text-center py-10 flex flex-col items-center w-full sm:w-1/2 rounded-2xl"
              >
                <p class="absolute start-5 top-5 font-bold text-sm">
                  {{ $t("register.upload-docs.form.commercial") }}
                </p>
                <btnsUploadBtn />
                <p class="py-4 text-sm text-gray-500">
                  {{ $t("register.upload-docs.form.upload") }}
                </p>
                <p class="text-sm text-gray-500">
                  {{ $t("register.upload-docs.form.max-size") }}
                </p>
              </div>
              <div
                class="relative border-dashed border-2 text-center py-10 flex flex-col items-center w-full sm:w-1/2 rounded-2xl"
              >
                <p class="absolute start-5 top-5 font-bold text-sm">
                  {{ $t("register.upload-docs.form.license") }}
                </p>
                <btnsUploadBtn />
                <p class="py-4 text-sm text-gray-500">
                  {{ $t("register.upload-docs.form.upload") }}
                </p>
                <p class="text-sm text-gray-500">
                  {{ $t("register.upload-docs.form.max-size") }}
                </p>
              </div>
            </div>
            <div
              class="relative border-dashed border-2 text-center py-10 flex flex-col items-center w-full rounded-2xl"
            >
              <p class="absolute start-5 top-5 font-bold text-sm">
                {{ $t("register.upload-docs.form.another") }}
              </p>
              <btnsUploadBtn />
            </div>
            <div class="m-auto mt-6">
              <btnsEntityBtn
                :text="$t('register.upload-docs.form.submit')"
                @click="handleEmitNumber(4)"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: "emitNumber", number: number): void;
}>();
const handleEmitNumber = (number: number) => {
  emit("emitNumber", number);
};
</script>
