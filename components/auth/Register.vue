<template>
  <div class="bg-light-blue my-14 py-20">
    <authBreadcampsRegister />
    <div
      class="m-auto w-full bg-white lg:w-3/4 rounded-tl-3xl rounded-tr-3xl py-16"
    >
      <div
        class="flex sm:ms-0 bread justify-center gap-1 sm:gap-4 items-center"
      >
        <div class="step text-center">
          <div class="flex items-center justify-center">
            <p class="bg-primary p-3 rounded-2xl text-white">01</p>
            <span class="me-4">
              <svg
                class="md:w-[148px] sm:w-[90px] w-[74px]"
                height="12"
                viewBox="0 0 148 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M147 7C147.552 7 148 6.55228 148 6C148 5.44772 147.552 5 147 5V7ZM0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM147 5H6V7H147V5Z"
                  fill="#005DBA"
                />
              </svg>
            </span>
          </div>
          <p class="text-xs py-4 font-semibold">
            {{ $t("register.steps.one") }}
          </p>
        </div>

        <div class="step text-center">
          <div class="flex items-center justify-center">
            <p
              class="p-3 rounded-2xl text-white bg-black"
              :class="{ 'bg-primary': stepNum > 1 }"
            >
              02
            </p>
            <span class="">
              <svg
                class="md:w-[148px] sm:w-[90px] w-[74px]"
                height="12"
                viewBox="0 0 148 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M136.667 6C136.667 8.94552 139.054 11.3333 142 11.3333C144.946 11.3333 147.333 8.94552 147.333 6C147.333 3.05448 144.946 0.666667 142 0.666667C139.054 0.666667 136.667 3.05448 136.667 6ZM1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7V5ZM142 5H1V7H142V5Z"
                  :fill="stepNum > 2 ? '#005dba' : 'black'"
                />
              </svg>
            </span>
          </div>
          <p class="text-xs py-4 font-semibold">
            {{ $t("register.steps.two") }}
          </p>
        </div>
        <!-- <modalsFail
          class="z-50"
          message="messagge"
          followUpMessage="follow"
          routeText="routeText"
          route="route"
        /> -->
        <div class="step text-center sm:ms-4">
          <div class="flex items-center">
            <p
              class="bg-black p-3 rounded-2xl text-white"
              :class="{ 'bg-primary': stepNum > 2 }"
            >
              03
            </p>
          </div>
          <p class="text-xs py-4 font-semibold">
            {{ $t("register.steps.three") }}
          </p>
        </div>
      </div>
    </div>
    <FormsFacilityCongrats
      v-if="stepNum === 6"
      :message="$t('register.congrats.head')"
      :followUpMessage="$t('register.congrats.welcome')"
      :routeText="$t('register.congrats.btn')"
      route="/dashboard"
    />

    <component :is="stepFrom" @emitNumber="changeStep" v-else />
  </div>
</template>
<script lang="ts" setup>
const stepNum = ref<number>(1);
const changeStep = (num: number) => {
  console.log(num);
  stepNum.value = num;
};

const stepFrom = computed(() => {
  switch (stepNum.value) {
    case 1:
      return resolveComponent("formsFacilityCompanyData");
    case 2:
      return resolveComponent("formsFacilityAdminInformation");
    case 3:
      return resolveComponent("formsFacilityUploadDocs");
    case 4:
      return resolveComponent("formsOtp");
    case 5:
      return resolveComponent("formsFacilityOptinalBranch");
    case 6:
      return;
    // resolveComponent("FormsFacilityCongrats");
  }
});
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
@media (min-width: 425px) {
  .step p {
    transform: translate(50%);
  }
  [dir="ltr"] .step p {
    transform: translate(-50%);
  }
}
@media (max-width: 430px) {
  .bread {
    justify-content: end;
  }
}
</style>
