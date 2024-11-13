// ~/stores/stringsStore.js

import { defineStore } from "pinia";

export const useStringsStore = defineStore("useStringsStore", {
  state: () => ({
    lang: "en",
    texts: {},
  }),
  actions: {
    async loadTexts(lang) {
      try {
        const response = await import(`~/assets/locales/${lang}.json`);
        this.texts = response.default || response;
      } catch (error) {
        console.error(`Failed to load texts for language ${lang}:`, error);
        this.texts = {};
      }
    },
    async toArabic() {
      this.lang = "ar";
      await this.loadTexts(this.lang);
    },
    async toEnglish() {
      this.lang = "en";
      await this.loadTexts(this.lang);
    },
  },
});
