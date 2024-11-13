<template>
  <div class="bg-white relative">
    <div class="py-12 parent overflow-hidden">
      <div class="text-center flex justify-center">
        <div class="wrap relative text-primary w-fit">
          <SectionHeader
            class="highlited"
            :description="$t('Practitioner.description')"
            :title="$t('Practitioner.title')"
            :primary="false"
          />
        </div>
      </div>
      <div
        class="flex flex-col xl:flex-row justify-center items-center gap-4 py-10"
      >
        <img
          :src="`/images/hero/${$t('lang')}/health/healthmobile.jpg`"
          alt=""
          class="mainimg rounded-2xl"
        />
        <div class="flex flex-col">
          <div class="rounded-2xl flex flex-col lg:flex-row gap-4 mb-3 mx-2">
            <img
              :src="`/images/hero/${$t('lang')}/health/sm-top.jpg`"
              alt=""
              class="mobileimg rounded-2xl"
            />
            <img
              :src="`/images/hero/${$t('lang')}/health/health-top-lg.jpg`"
              alt=""
              class="mobileimg rounded-2xl"
            />
          </div>
          <div class="rounded-2xl mx-2 flex flex-col lg:flex-row gap-4">
            <img
              :src="`/images/hero/${$t('lang')}/health/health-bottom-lg.jpg`"
              alt=""
              class="mobileimg rounded-2xl"
            />
            <img
              :src="`/images/hero/${$t('lang')}/health//health-sm-bottom.jpg`"
              alt=""
              class="mobileimg rounded-2xl col-start-2 col-span-1"
            />
          </div>
        </div>
      </div>
      <div class="download-title flex justify-center text-sm text-center my">
        <div
          class="relative py-6"
          :class="{
            'md:px-32': $t('language') === 'English',
            'md:px-48': $t('language') === 'العربية',
          }"
        >
          <h2
            class="mb-12 -mt-24 relative top-[35px] md:top-[45px] font-bold text-primary text-center px-2 md:text-sm text-xs lg:text-base"
          >
            <img
              src="../../public/images/svg/hero/Practitionercicrle.svg"
              alt=""
              class="title-wrap w-full"
            />
            {{ $t("Practitioner.download") }}
          </h2>
        </div>
      </div>
      <div class="text-center flex justify-center">
        <downloadAppDownloadFrame
          title="Apple Store"
          bg="bg-black text-white"
        />
        <downloadAppDownloadFrame
          title="Google Play"
          bg="bg-primary text-white"
        />
      </div>
      <div class="app-arrow">
        <img
          src="../../public/images/svg/hero/healt-arrow.svg"
          alt=""
          class="arrow-1"
        />
        <img
          src="../../public/images/svg/hero/healt-arrow.svg"
          alt=""
          class="arrow-2"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>

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
    top: -90px;
    position: absolute;
    left: 0;
    width: 34.5%;
    transform: scale(-1, 1);
  }
  .arrow-2 {
    top: -90px;
    position: absolute;
    width: 34.5%;
    right: 0;
  }
}

@media (min-width: 1400px) {
  .arrow-1 {
    width: 50%;
  }
  .arrow-2 {
    width: 39%;
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
@media (min-width: 1620px) {
  .arrow-1 {
    width: 40%;
  }
  .arrow-2 {
    width: 40%;
  }
}
@media (min-width: 580px) {
  .wrap-with-white-circle-primary::before {
    content: " ";
    position: absolute;
    inset-inline-start: 12%;
    text-align: start;
    bottom: 0;
    top: 0;
    background-image: url("../../public/images/svg/hero/Practitionercicrle.svg");
    background-repeat: no-repeat;
    z-index: 11;
    width: 518px;
  }
}

.mainimg {
  height: 92vh;
}
.mobileimg {
  height: 45vh;
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
</style>
