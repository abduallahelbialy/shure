<template>
  <section class="default-hero con bg-white">
    <div
      class="grid lg:grid-cols-2 grid-cols-1 pb-10 gap-4 lg:text-start text-center"
    >
      <div class="text-white">
        <div class="titles mx-2">
          <div class="relative">
            <div class="relative">
              <h1
                class="text-primary py-10 font-extrabold title relative font-bold"
                :class="{
                  'text-[15px] sm:text-[20px] lg:text-[25px] xl:text-[35px] ':
                    $t('language') === 'English',
                  'text-[38px] sm:text-5xl': $t('language') === 'العربية',
                }"
              >
                {{ $t("hero-title.text")
                }}<span
                  class="circle relative"
                  :class="{
                    'circle-en': $t('language') === 'English',
                    'circle-ar': $t('language') === 'العربية',
                  }"
                  >{{ $t("hero-title.span") }}</span
                >
              </h1>
            </div>
            <h2
              class="text-black font-bold"
              :class="{
                'title-en text-[15px] sm:text-[20px] md:text-[35px]':
                  $t('language') === 'English',
                'lg:text-5xl text-4xl xl:text-6xl':
                  $t('language') === 'العربية',
              }"
            >
              {{ $t("hero-subtitle") }}
            </h2>
            <p class="text-gray text-xl font-medium py-5">
              {{ $t("hero-book.text1") }}
              <span class="text-primary">{{ $t("hero-book.text2") }}</span
              >{{ $t("hero-book.text3") }}
              <span class="text-green">{{ $t("hero-book.text4") }}</span
              >{{ $t("hero-book.text4") }}
              <span class="">{{ $t("hero-book.text5") }}</span> <br />
              <span class="text-black">{{ $t("hero-book.text6") }}</span>
            </p>
            <div class="flex flex-col items-center lg:items-start">
              <btnsRegisterBtn :text="$t('btns.Entity-Register-1')" />

              <div
                class="flex docotrs-waiting py-5 items-center md:justify-start justify-center font-bold relative"
                :class="{ eng: $t('language') === 'English' }"
              >
                <img
                  src="../../public/hero/doctors.jpg"
                  alt="doctors"
                  class="image"
                />
                <p class="text-primary px-2 text-xs md:text-base">
                  {{ $t("doctor-waiting") }}
                </p>
                <span>
                  <img
                    src="../../public/hero/handrasie.jpg"
                    alt="hand"
                    class="px-1"
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="img-section p-6 text-white relative">
        <div class="relative">
          <img :src="`/hero/${$t('lang')}/hero.png`" alt="hero image" class="" />
          <iconsWhatsApp class="what-icon" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.default-hero {
  position: relative;
  top: 100px;
  margin-block-end: 100px;
}
.title::before {
  content: " ";
  position: absolute;
  width: 110px;
  top: 48px;
  bottom: 0;
  inset-inline-start: -130px;
  background-image: url("../../public/hero/Vector.svg");
  background-repeat: no-repeat;
  z-index: 11;
}

.eng::before,
.circle-en::before {
  transform: scale(-1, 1);
}

.titles::before {
  content: " ";
  position: absolute;
  width: 200px;
  height: 200px;
  right: 0;
  inset-inline-start: -140px;
  top: -55px;
  border-radius: 100%;
  background-image: url("../../public/hero/Ellipse.svg");
  background-repeat: no-repeat;
  z-index: 11;
}

.what-icon {
  bottom: 50px;
  inset-inline-end: -60px;
}
.circle::after {
  content: " ";
  position: absolute;
  width: 50px;
  display: block;
  background-image: url("../../public/hero/stars.svg");
  top: -40px;
  bottom: 0px;
  inset-inline-end: -28px;
  padding: 50px 0;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 11;
}

.circle-ar::before {
  content: "";
  position: absolute;
  width: 116px;
  height: 62px;
  background-image: url("../../public/hero/cicrle.png");
  top: 0;
  font-family: "Cairo";
  background-position: bottom;
  bottom: 0px;
  inset-inline-end: -15px;
  background-repeat: no-repeat;
  background-size: contain;
}
.circle-en::before {
  content: "";
  position: absolute;
  width: 259px;
  height: 100px;
  background-image: url(../../public/images/svg/hero/en-circle.svg);
  top: -32px;
  left: -7px;
  background-position: bottom;
  bottom: 0px;
  padding: 48px;
  background-repeat: no-repeat;
  background-size: contain;
}
@media (min-width: 400px) {
  .docotrs-waiting::before {
    content: "";
    position: absolute;
    top: -55px;
    bottom: 0;
    inset-inline-start: -45px;
    height: 100px;
    width: 50px;
    background-repeat: no-repeat;
    background-image: url("../../public/hero/Arrow.svg");
    z-index: 11;
  }
}
@media (min-width: 1024px) and (max-width: 1280px) {
  .circle-en::before {
    width: 225px;
    height: 89px;
  }
}
@media (max-width: 768px) {
  .circle-en::before {
    width: 158px;
    height: 100px;
    left: -4px;
    top: -60px;
  }
  .what-icon {
    top: -100px;
    inset-inline-end: -50px;
    height: fit-content;
  }
}
@media (max-width: 430px) {
  .circle-ar::before {
    width: 100px;
    height: 44px;
  }
  [dir="ltr"] .circle-en::before {
    width: 135px;
    height: 97px;
  }
}
[dir="ltr"] .title::before,
[dir="ltr"] .circle::after {
  transform: scale(-1, 1);
  padding: 0 10px;
}
</style>
