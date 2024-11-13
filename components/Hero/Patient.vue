<template>
  <section class="bg-primary relative patient-app">
    <div class="py-20 top-arrow overflow-hidden">
      <div class="text-center flex justify-center">
        <div class="wrap relative text-white w-fit">
          <SectionHeader
            class="highlited"
            :class="{ 'highlited-en': $t('language') === 'English' }"
            :description="$t('patient.description')"
            :title="$t('patient.title')"
            :primary="false"
          />
        </div>
      </div>
      <div
        class="flex flex-col xl:flex-row justify-center items-center gap-4 py-10 px-4"
      >
        <img :src="`/images/hero/${$t('lang')}/patient/Frame-mobile.jpg`" alt="" class="mainimg rounded-2xl" />
        <div class="flex flex-col">
          <div class="rounded-2xl flex flex-col lg:flex-row gap-4 mb-3">
            <img
              :src="`/images/hero/${$t('lang')}//patient/Frame-sm-card-top.jpg`"
              alt=""
              class="mobileimg rounded-2xl"
            />
            <img
              :src="`/images/hero/${$t('lang')}/patient/Frame-top-lg.jpg`"
              alt=""
              class="mobileimg rounded-2xl"
            />
          </div>
          <div class="rounded-2xl flex flex-col lg:flex-row gap-4">
            <img
              :src="`/images/hero/${$t('lang')}/patient/Frame-lg-bottom-card.jpg`"
              alt=""
              class="mobileimg rounded-2xl"
            />
            <img
              :src="`/images/hero/${$t('lang')}/patient/Frame-sm-card-bottom.jpg`"
              alt=""
              class="mobileimg rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div class="download-title flex justify-center text-center my">
        <div
          class="relative py-6"
          :class="{
            'md:px-6': $t('language') === 'English',
            'md:px-28': $t('language') === 'العربية',
          }"
        >
          <h2
            class="text-white mb-12 -mt-24 relative top-[35px] md:top-[45px] font-bold text-primary text-center px-2 md:text-sm text-xs lg:text-lg"
          >
            <img
              src="../../public/images/svg/hero/downloadcicrle.svg"
              alt=""
              class="title-wrap"
            />
            {{ $t("patient.download") }}
          </h2>
        </div>
      </div>
      <div class="flex justify-center">
        <downloadAppDownloadFrame title="Apple Store" />
        <downloadAppDownloadFrame title="Google Play" />
      </div>
      <div class="app-arrow">
        <img
          src="../../public/images/svg/hero/patient-bottom-arrow.svg"
          alt=""
          class="arrow-1"
        />
        <img
          src="../../public/images/svg/hero/patient-bottom-arrow.svg"
          alt=""
          class="arrow-2"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const ar = ref("ar");
</script>
<style scoped>
.mainimg {
  height: 92vh;
  object-fit: contain;
}
.mobileimg {
  height: 45vh;
}
.app-arrow {
  display: none;
}
@media (min-width: 1000px) {
  .app-arrow {
    position: absolute;
    display: block;
    z-index: 11;
    width: 100%;
    bottom: 0px;
  }
  .arrow-1 {
    top: -125px;
    position: absolute;
    left: 0;
    width: 34.5%;
    transform: scale(-1, 1);
  }
  .arrow-2 {
    top: -125px;
    position: absolute;
    width: 34.5%;
    right: 0;
  }
}

@media (min-width: 1280px) {
  .arrow-1 {
    width: 38.5%;
  }
  .arrow-2 {
    width: 38.5%;
  }
}
@media (min-width: 1400px) {
  .arrow-1 {
    width: 39%;
  }
  .arrow-2 {
    width: 39%;
  }
}
@media (min-width: 1620px) {
  .arrow-1 {
    width: 40%;
  }
  .arrow-2 {
    width: 40%;
  }
}

@media (min-width: 768px) {
  .top-arrow::after {
    content: " ";
    position: absolute;
    width: 285px;
    left: 0;
    bottom: 0;
    top: 151px;
    background-image: url("../../public/images/svg/hero/patent-arrow.svg");
    background-repeat: no-repeat;
    z-index: 11;
  }
  .top-arrow::before {
    content: " ";
    position: absolute;
    width: 285px;
    right: 0;
    bottom: 0;
    top: 40px;
    background-image: url("../../public/images/svg/hero/patent-arrow.svg");
    background-repeat: no-repeat;
    z-index: 11;
  }
}

.highlited::before {
  content: " ";
  position: absolute;
  width: 54px;
  inset-inline-end: -50px;
  bottom: 0;
  top: 0;
  background-image: url("../../public/images/svg/hero/highlited.svg");
  background-repeat: no-repeat;
}
.highlited-en::before {
  transform: scale(-1, 1);
}
</style>
