<template>
  <div class="relative font-medium">
    <div
      class="con text-sm flex py-10 flex-wrap sm:flex-row flex-col sm:items-start items-center services justify-between gap-10 lg:gap-20 text-white"
    >
      <div class="footer-icons flex-1 relative ms-5">
        <button href="" @click="scrollToTop" class="hidden sm:block">
          <img src="../public/images/svg/gotop.svg" alt="" class="goToTOP" />
        </button>
        <p class="quated leading-7 sm:text-start text-center sm:mt-[-25px]">
          <span>{{ $t("footer.description.span") }}</span>
          {{ $t("footer.description.text") }}
        </p>
        <div class="social-icons mt-8">
          <ul class="flex justify-center sm:justify-start gap-2">
            <li class="icon">
              <a href=""><i class="mdi mdi-facebook text-primary"></i></a>
            </li>
            <li class="icon">
              <a href=""><i class="mdi mdi-instagram text-primary"></i></a>
            </li>
            <li class="bg-white icon">
              <a href=""><img src="../public/tiktok.svg" alt="" /></a>
            </li>
            <li class="bg-white icon">
              <a href=""><img src="../public/x.svg" alt="" /></a>
            </li>
            <li class="icon">
              <a href=""><i class="mdi mdi-linkedin text-primary"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div
        v-for="(foot, index) in FooterLinks"
        :key="index"
        class="relative foot-links flex-1 px-5"
        :class="{ 'ps-[86px]': index === 2 }"
      >
        <h2 class="title mb-5 relative">{{ $t(foot.title) }}</h2>
        <a
          href=""
          class="flex relative"
          v-for="link in foot.link"
          :key="link.text"
        >
          <div
            class="flex items-center gap-3"
            v-if="link.text === 'footer.contactUs.email.text'"
          >
            <i class="mdi mdi-email link-icon"></i>
            <p class="">hello@contact.com</p>
          </div>
          <div v-else class="flex items-center gap-3 font-medium">
            <p v-if="link.icon" class="">
              <i :class="['mdi', link.icon]" class="link-icon"></i>
            </p>
            <p class="my-3">
              {{ $t(link.text) }}
            </p>
          </div>
        </a>
      </div>
    </div>
    <hr class="opacity-50 text-white my-4 w-full absolute bottom-0" />
  </div>
</template>
<script setup>
import FooterLinks from "./json/footer";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<style scoped>
.goToTOP {
  position: absolute;
  bottom: 60px;
  inset-inline-start: -80px;
}
@media (max-width: 768px) {
  .goToTOP {
    position: absolute;
    bottom: 60px;
    inset-inline-start: -53px;
  }
}
.link-icon {
  font-size: 24px;
}
.foot-links .title::after {
  content: "";
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  position: absolute;
  border-radius: 5px;
  bottom: -5px;
}
.icon {
  border-radius: 50%;
  background-color: white;
  text-align: center;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon a {
  font: 50px;
}

.link-icon {
  font-size: 24px;
}
.foot-links .title::after {
  content: "";
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  position: absolute;
  border-radius: 5px;
  bottom: -5px;
}

.quated span::after {
  content: "”";
}
</style>
