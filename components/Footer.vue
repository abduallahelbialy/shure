<template>
  <div class="bg-primary overflow-hidden">
    <div class="relative">
      <div class="con overflow-hidden">
        <div
          class="app-resourse flex flex-col xl:flex-row items-center xl:items-start justify-between py-5"
        >
          <div class="logo flex items-center xl:items-start mt-8">
            <img
              src="../public/footer-logo.svg"
              alt="logo"
              width="180"
              height="100"
            />
          </div>
          <div class="app-links flex flex-col xl:flex-row">
            <inputsEmail :label="$t('footer.newsletter')" />
            <div class="flex flex-col sm:flex-row">
              <downloadApp title="footer.apps.patient" />
              <downloadApp title="footer.apps.doctors" />
            </div>
          </div>
        </div>
        <div class="arrows mt-10 flex items-center">
          <img src="../public/arrow-2.svg" alt="" class="arrow arrow-2" />
          <img src="../public/arrow-1.svg" alt="" class="arrow-1 arrow" />
        </div>
      </div>
    </div>
    <FooterLinks />
    <div class="flex px-1 sm:text-base text-xs font-medium sm:px-5 flex-row justify-between gap-2 text-white con">
      <p class="m-2 self-end sm:self-center whitespace-nowrap	md:whitespace-normal">{{ $t("footer.privacypolicy") }}</p>
      <div class="m-2 self-start sm:self-center pb-4 sm:pb-0">
        <p>{{ $t("footer.copywrights") }}</p>
        <p class="py-2 sm:text-center">{{ $t("footer.copywrights2") }}</p>
      </div>

      <p class="m-2 self-end sm:self-center whitespace-nowrap	md:whitespace-normal">{{ $t("footer.terms") }}</p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.link-icon {
  font-size: 24px;
}

.emails::before {
  content: " ";
  position: absolute;
  top: 18px;
  bottom: 0;
  inset-inline-start: 47px;
  height: 12px;
  width: 1.5px;
  opacity: 0.2;
  background-color: rgb(0, 0, 0);
}
.input {
  border-radius: 36px;
}
.arrow {
  position: absolute;
  z-index: 11;
  width: 51%;
  bottom: 0px;
}
.arrow-1 {
  right: 0;
}
.arrow-2 {
  left: 0;
  transform: scale(-1, 1);
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
</style>
