<template>
  <div>
    <form class="space-y-4 mx-auto p-6 bg-white">
      <h2 class="text-3xl py-4 font-bold text-primary relative title">
        {{ $t("contact-us.form.title") }}
      </h2>
      <div class="grid grid-cols-2 gap-4 w-full">
        <div>
          <label for="firstName" class="block text-sm font-bold">
            {{ $t("contact-us.form.name") }}</label
          >
          <input
            type="text"
            id="name"
            name="name"
            :placeholder="$t('contact-us.form.name')"
            class="mt-1 ps-5 block bg-input w-full py-4 rounded-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="lastName" class="block text-sm font-bold">{{
            $t("contact-us.form.email")
          }}</label>
          <input
            type="mail"
            id="email"
            name="email"
            :placeholder="$t('contact-us.form.email')"
            class="mt-1 block w-full px-3 bg-input py-4 rounded-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <!-- Second input on a new line -->
      <div>
        <label for="subject" class="block text-sm font-bold">{{
          $t("contact-us.form.subject")
        }}</label>
        <input
          type="text"
          :placeholder="$t('contact-us.form.placeholder.subject')"
          id="subject"
          name="subject"
          class="mt-1 block w-full px-3 py-2 bg-input py-4 rounded-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <!-- Third input on a new line -->
      <div>
        <label for="message" class="block text-sm font-bold">
          {{ $t("contact-us.form.message") }}
        </label>
        <textarea
          id="message"
          name="message"
          :placeholder="$t('contact-us.form.placeholder.message')"
          class="mt-1 block w-full px-3 py-2 bg-input rounded-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          rows="4"
        ></textarea>
      </div>

      <!-- Submit button -->
      <div class="text-end">
        <button
          type="submit"
          class="bg-primary submit relative text-start text-white py-2 ps-4 font-bold pe-8 rounded-2xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {{ $t("contact-us.form.submit") }}
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.title::after {
  content: " ";
  display: block;
  width: 40px;
  height: 3px;
  background-color: #005dba;
  position: absolute;
  border-radius: 5px;
  bottom: 0;
}
.submit::after {
  content: "";
  width: 16px;
  background-image: url("../../public/images/svg/arrow-small-left.svg");
  height: 16px;
  bottom: 0;
  font-size: 20px;
  top: 14px;
  margin-inline-end: 4px;
  inset-inline-end: 2px;
  position: absolute;
  background-repeat: no-repeat;
}
[dir="ltr"] .submit::after {
  transform: scale(-1, 1);
}
</style>
