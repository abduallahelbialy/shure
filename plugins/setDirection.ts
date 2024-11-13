import { defineNuxtPlugin, useCookie, useHead } from "#app";

export default defineNuxtPlugin(() => {
  const langCookie = useCookie<string>("i18n_redirected");

  
  const lang = langCookie.value || "en"; 
  const direction = lang === "ar" ? "rtl" : "ltr";
  useHead({
    htmlAttrs: {
      dir: direction,
      lang: lang,
    },
  });
});
