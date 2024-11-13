<template>
  <div>
    <div class="register-step-show flex gap-2 mb-8 px-2">
      <div
        class="flex md:text-xl text-sm sm:text-base"
        :class="{ 'md:m-auto': $t('language') === 'English' }"
      >
        <p
          class="font-bold m-auto w-fit flex items-center justify-center md:mx-5 px-2 text-primary"
        >
          {{ $t("register.breadcamps.one") }}
          <span class="ms-5"
            ><svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="breadspace"
            >
              <path
                d="M0.473062 9.19536C0.733402 9.45571 1.15554 9.45571 1.41587 9.19536L4.67414 5.9339C5.1944 5.4131 5.1942 4.56923 4.67374 4.0487L1.41347 0.7885C1.15314 0.5281 0.731002 0.5281 0.470656 0.7885C0.210302 1.04883 0.210302 1.47097 0.470656 1.7313L3.26107 4.5217C3.52147 4.78203 3.5214 5.20417 3.26107 5.4645L0.473062 8.25255C0.212709 8.5129 0.212709 8.93501 0.473062 9.19536Z"
                fill="#005DBA"
              />
            </svg>
          </span>
        </p>
        <p
          class="font-bold m-auto w-fit flex items-center justify-center mx-2"
        >
          {{ $t("register.breadcamps.two") }}
          <span class="ms-5"
            ><svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="breadspace"
            >
              <path
                d="M0.473062 9.19536C0.733402 9.45571 1.15554 9.45571 1.41587 9.19536L4.67414 5.9339C5.1944 5.4131 5.1942 4.56923 4.67374 4.0487L1.41347 0.7885C1.15314 0.5281 0.731002 0.5281 0.470656 0.7885C0.210302 1.04883 0.210302 1.47097 0.470656 1.7313L3.26107 4.5217C3.52147 4.78203 3.5214 5.20417 3.26107 5.4645L0.473062 8.25255C0.212709 8.5129 0.212709 8.93501 0.473062 9.19536Z"
                fill="#005DBA"
              />
            </svg>
          </span>
        </p>
        <p class="font-bold m-auto">
          {{ $t("register.breadcamps.three") }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
[dir="rtl"] .breadspace {
  transform: scale(-1, 1);
}
</style>
