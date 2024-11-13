<template>
  <div class="py-10 con">
    <SectionHeader
      :description="$t('services.description')"
      :title="$t('services.title')"
      :primary="true"
    />
    <div
      class="flex overflow-scroll md:overflow-none overflow-hidden-scrollbar sm:overflow-none reviews-parent md:flex-col xl:flex-row lg:flex-nowrap items-start md:justify-center py-12 gap-4"
    >
      <ServicesCard :def="false" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
