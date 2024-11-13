<template>
  <div class="bg-light-blue">
    <div class="con py-10">
      <SectionHeader
        :title="$t('medical-articles.title')"
        :description="$t('medical-articles.description')"
        :primary="true"
      />
      <div
        class="flex overflow-scroll md:overflow-none overflow-hidden-scrollbar sm:overflow-none reviews-parent md:flex-col xl:flex-row lg:flex-nowrap items-start md:justify-center py-12 gap-4"
      >
        <DoctorWrap />
      </div>
    </div>
  </div>
</template>
