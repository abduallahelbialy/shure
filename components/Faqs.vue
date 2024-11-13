<template>
  <div class="con">
    <div class="text-center flex justify-center py-10">
      <div class="wrap relative text-primary w-fit">
        <SectionHeader
          class="highlited"
          :description="$t('Fqas.description')"
          :title="$t('Fqas.title')"
          :primary="false"
        />
      </div>
    </div>
    <Question />
  </div>
</template>
<script setup lang="ts"></script>
