<template>
  <div>
    <div class="py-10 mt-12 con">
      <img
        src="../public/images/serivcescover.png"
        alt=""
        height="765"
        class="border-full rounded-3xl bg-primary w-full"
      />
    </div>
    <div class="text-center py-4">
      <h2 class="text-primary font-bold text-4xl">
        {{ $t("services-page.title") }}
      </h2>
      <div class="flex justify-center py-2 my-5">
        <div class="flex">
          <p class="text-green px-2">{{ $t("services-page.doctor-name") }}</p>
          <span class="mx-1 mt-2"
            ><img src="../public/hero/dot.svg" alt="" width="8"
          /></span>
          <p class="text-black mx-1">
            {{ $t("services-page.specialization") }}
          </p>
          <span class="mx-1 mt-2"
            ><img src="../public/hero/dot.svg" alt="" width="8"
          /></span>
          <p class="date text-gray-500">{{ $t("services-page.date") }}</p>
        </div>
      </div>
      <div class="text con md:px-12 lg:w-8/12">
        <p class="text-xl text-center m-auto mb-12 lg:w-8/12">
          مع منصة شور الطبية، أصبح الحصول على استشارة طبية أمرًا أسهل من أي وقت
          مضى. من خلال الاستشارات الطبية عبر الإنترنت، يمكنك الآن التواصل مع
          نخبة من الأطباء المتخصصين مباشرة من منزلك أو أي مكان آخر...
        </p>
        <p class="text-xl text-center m-auto mb-12 lg:w-8/12">
          مع منصة شور الطبية، أصبح الحصول على استشارة طبية أمرًا أسهل من أي وقت
          مضى. من خلال الاستشارات الطبية عبر الإنترنت، يمكنك الآن التواصل مع
          نخبة من الأطباء المتخصصين مباشرة من منزلك أو أي مكان آخر...
        </p>
      </div>
      <hr
        class="opacity-50 text-white my-4 w-full w-3/12 bottom-0 text-center m-auto"
      />
      <div class="text-center my-8 m-auto w-full">
        <ul class="flex flex-col gap md:flex-row justify-center gap-2">
          <div class="flex py-2">
            <li class="bg-white icon mx-4">
              <a href=""
                ><img src="../public/tiktok.svg" alt="" width="48"
              /></a>
            </li>
            <li class="bg-white icon mx-4">
              <a href=""
                ><img
                  src="../public/images/svg/social/whats.svg"
                  alt=""
                  width="48"
              /></a>
            </li>
            <li class="bg-white icon mx-4">
              <a href=""
                ><img
                  src="../public/images/svg/social/linkedin.svg"
                  alt=""
                  width="48"
              /></a>
            </li>

            <li class="bg-white icon mx-4">
              <a href=""
                ><img
                  src="../public/images/svg/social/snapshat.svg"
                  alt=""
                  width="48"
              /></a>
            </li>
          </div>
          <div class="flex py-2">
            <li class="bg-white icon mx-4">
              <a href=""
                ><img
                  src="../public/images/svg/social/telegram.svg"
                  alt=""
                  width="48"
              /></a>
            </li>
            <li class="bg-white icon mx-4">
              <a href=""
                ><img
                  src="../public/images/svg/social/insta.svg"
                  alt=""
                  width="48"
              /></a>
            </li>
            <li class="bg-white icon mx-4">
              <a href=""
                ><img src="../public/images/svg/social/x.svg" alt="" width="48"
              /></a>
            </li>
            <li class="bg-white icon mx-4">
              <a href=""
                ><img
                  src="../public/images/svg/social/facebook.svg"
                  alt=""
                  width="48"
              /></a>
            </li>
          </div>
        </ul>
      </div>
      <div class="bg-primary">
        <div class="bg-primary parent relative py-32">
          <div
            class="flex flex-col sm:flex-row medical justify-center items-center"
          >
            <inputsEmail />
          </div>
          <div class="flex justify-center">
            <img
              src="../public/images/svg/collectionofDoctors.svg"
              alt="doctors"
              class="image rounded-full mx-4 mt-8"
            />
          </div>
        </div>
      </div>
    </div>
    <Faqs />
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
@media (min-width: 768px) {
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
  .medical::before {
    content: " ";
    position: absolute;
    width: 85px;
    height: 85px;
    inset-inline-start: 15%;
    bottom: 40px;
    background-image: url("../public/images/svg/Medical-Record.svg");
    background-repeat: no-repeat;
    z-index: 11;
  }
  .medical::after {
    content: "";
    position: absolute;
    height: 171px;
    width: 171px;
    inset-inline-end: 10%;

    top: 60;
    background-image: url("../public/images/svg/Pills.svg");
    background-repeat: no-repeat;
    z-index: 11;
  }
}
</style>
