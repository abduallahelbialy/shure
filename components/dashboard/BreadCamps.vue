<template>
    <h2 class="text-sm font-bold relative">{{props.text}}</h2>
</template>
<script lang="ts" setup>
const props =defineProps<{
  text:string
}>()

</script>
<style scoped>
h2::before{
  content: "";
  position: absolute;
  width: 3px;
  inset-inline-start: -5px;
  background-color: black;
  height: 17px;
  margin-top: 2px;
  font-size: 700;
  border-radius:50px ;

}


</style>