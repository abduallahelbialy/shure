<template>
  <div class="con py-16">
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
      class="flex overflow-scroll md:overflow-none overflow-hidden-scrollbar sm:overflow-none reviews-parent md:flex-col xl:flex-row lg:flex-nowrap md:items-center md:justify-center py-12 gap-4"
    >
      <div class="relative reviews py-10 px-5 rounded-2xl bg-light-blue">
        <div class="flex review justify-between items-center">
          <div class="flex">
            <img
              src="../public/images/reviewimg.jpg"
              alt="reviewer imgage"
              class="me-3 rounded-full"
            />
            <div class="relative">
              <p>{{ $t("review.r1.name") }}</p>
              <p class="flex">
                <span class="star"
                  ><img
                    src="../public/images/svg/hero/star.svg"
                    alt="star"
                    class="mt-2"
                /></span>
                <span class="px-1 font-bold">{{ $t("review.r1.rate") }}</span>
              </p>
            </div>
          </div>
          <div>
            <img
              src="../public/images/svg/hero/stars.svg"
              alt=""
              class="rounded-full"
            />
          </div>
        </div>
        <p class="py-5 text-sm text-gray-500">{{ $t("review.r1.text") }}</p>
        <div class="flex justify-between mt-4 text-gray-500">
          <span>{{ $t("review.r1.date") }}</span>
          <span>{{ $t("review.r1.country") }}</span>
        </div>
      </div>

      <div
        class="relative reviews ue py-10 px-5 rounded-2xl text-white bg-primary"
      >
        <div class="flex pr-review justify-between items-center">
          <div class="flex">
            <img
              src="../public/images/reviewimg.jpg"
              alt="reviewer imgage"
              class="me-3 rounded-full"
            />
            <div class="relative">
              <p>{{ $t("review.r1.name") }}</p>
              <p class="flex">
                <span class="star"
                  ><img
                    src="../public/images/svg/hero/star.svg"
                    alt="star"
                    class="mt-2"
                /></span>
                <span class="px-1 font-bold">{{ $t("review.r1.rate") }}</span>
              </p>
            </div>
          </div>
          <div>
            <img
              src="../public/images/svg/hero/stars.svg"
              alt=""
              class="rounded-full"
            />
          </div>
        </div>
        <p class="py-5 text-sm">{{ $t("review.r1.text") }}</p>
        <div class="flex justify-between mt-4">
          <span>{{ $t("review.r1.date") }}</span>
          <span>{{ $t("review.r1.country") }}</span>
        </div>
      </div>

      <div class="relative reviews py-10 px-5 rounded-2xl bg-light-blue">
        <div class="flex review justify-between items-center">
          <div class="flex">
            <img
              src="../public/images/reviewimg.jpg"
              alt="reviewer imgage"
              class="me-3 rounded-full"
            />
            <div class="relative">
              <p>{{ $t("review.r1.name") }}</p>
              <p class="flex">
                <span class="star"
                  ><img
                    src="../public/images/svg/hero/star.svg"
                    alt="star"
                    class="mt-2"
                /></span>
                <span class="px-1 font-bold">{{ $t("review.r1.rate") }}</span>
              </p>
            </div>
          </div>
          <div>
            <img
              src="../public/images/svg/hero/stars.svg"
              alt=""
              class="rounded-full"
            />
          </div>
        </div>
        <p class="py-5 text-sm text-gray-500">{{ $t("review.r1.text") }}</p>
        <div class="flex justify-between mt-4 text-gray-500">
          <span>{{ $t("review.r1.date") }}</span>
          <span>{{ $t("review.r1.country") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.reviews {
  margin-top: 15px;
  max-width: 524px;
  min-width: 325px;
  width: 100%;
}
.pr-review::before {
  content: " ";
  position: absolute;
  inset-inline-end: 25px;
  width: 100px;
  height: 74px;
  background-image: url("../public/images/svg/hero/blackreview.svg");
  background-repeat: no-repeat;
  top: -30px;
}
.review::before {
  content: " ";
  position: absolute;
  inset-inline-end: 25px;
  width: 100px;
  height: 74px;
  background-image: url("../public/images/svg/hero/primaryreview.svg");
  background-repeat: no-repeat;
  top: -30px;
}
.star::before {
  content: " ";
  position: absolute;
  inset-inline-end: 25px;
  width: 100px;
  height: 74px;

  background-repeat: no-repeat;
  top: -30px;
}

</style>
