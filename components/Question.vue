<template>
  <div class="question flex justify-between items-start p-5">
    <button @click="showAnswer">
      <img
        src="../public/images/svg/hero/question-arrow.svg"
        alt="question-arrow"
      />
    </button>
    <div class="w-full">
      <p class="font-bold text-end">
        كيف يمكن ني حجز استشارة طبية عبر منصة شور؟
      </p>
      <p
        class="rt mt-5 bg-light-blue py-5 px-2 w-full text-end hidden"
        ref="Answer"
      >
        يف يمكنني حجز استشارة طبية عبر منصة شور؟يف يمكنني حجز استشارة طبية عبر
        منصة شور؟يف يمكنني
      </p>
    </div>
  </div>
  <hr class="border-t border-gray-300 my-4 w-3/4 mx-auto" />
</template>
<script setup lang="ts">
const Answer = ref<HTMLParagraphElement>();
const showAnswer = () => {
  Answer.value?.classList.toggle("hidden");
};
</script>
