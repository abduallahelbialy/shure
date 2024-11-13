<template>
  <div>
    <div class=" py-10 mt-8 relative w-full">
      <div
        class="relative parent flex xl:flex-row flex-col justify-between lx:items-center mt-4 xl:px-20 blog bg-primary"
        :class="{ 'parent-en': $t('language') === 'English' }"
      >
        <div>
          <div
            class="flex flex-col xl:flex-row mt-6 md:mt-24 email-input sm:mx-20 xl:mx-2"
          >
            <inputsEmail :label="$t('blog.label')" class="" />
          </div>
          <div class="flex justify-center xl:justify-start">
            <img
              src="../public/images/svg/collectionofDoctors.svg"
              alt="doctors"
              class="image rounded-full mx-5 mt-8"
            />
          </div>
        </div>
        <div class="relative">
          <div class="img-wrpap mx-12">
            <div class="consalt-cover">
              <img
                src="../public/images/consaltion-cover.png"
                alt=""
                class="border-full bg-primary w-full"
                width="650"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <iconsWhatsApp class="what-icon" />

        <div class="bg-light-blue">
          <div class="con py-10 text-start">
            <SectionHeader
              :title="$t('blog.header')"
              :primary="true"
            />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DoctorWrap />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Faqs />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.what-icon {
  top: 200px;
  inset-inline-end: 20px;
}
.consalt-cover {
  max-width: 100%; /* Allows the image to scale with the container */
  margin: auto;
  padding: 1rem;
}
.consalt-cover img {
  width: 100%;
  max-width: 100%; /* Prevents overflow */
  height: auto; /* Maintains aspect ratio */
  object-fit: cover; /* Fills the space while preserving aspect */
}

@media (min-width: 768px) {
  .consalt-cover::before {
    position: absolute;
    content: " ";
    width: 168px;
    top: 0;
    background-repeat: no-repeat;
    bottom: 0;

    inset-inline-end: 50px;
    background-image: url("../public/images/svg/virus.svg");
  }
  .consalt-cover::after {
    position: absolute;
    content: " ";
    width: 169px;
    height: 169px;
    top: 100px;
    background-repeat: no-repeat;
    inset-inline-start: 00px;

    background-image: url("../public/images/svg/DNA.svg");
  }
  .parent::after {
    content: " ";
    position: absolute;
    width: 285px;
    height: 47px;
    inset-inline-end: 0;
    bottom: 30px;

    background-image: url("../public/images/svg/hero/patent-arrow.svg");
    background-repeat: no-repeat;
    z-index: 11;
  }
  .parent::before {
    content: "";
    position: absolute;
    height: 47px;
    width: 285px;
    inset-inline-start: 0;
    bottom: 0;
    top: 50px;
    background-image: url("../public/images/svg/hero/patent-arrow.svg");
    background-repeat: no-repeat;
    z-index: 11;
  }
  .parent-en::after {
    transform: scale(-1, 1);
  }
  .parent-en::before {
    transform: scale(-1, 1);
  }
}
</style>
