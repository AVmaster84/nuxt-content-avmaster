<template>
  <div
    class="px-4 py-6 md:px-8 container max-w-screen-2xl">
  
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>Home not found</div>
    
  </div>
</template>





<script setup lang="ts">
const { data: page } = await useAsyncData(() => queryCollection('docs').path('/').first())
const config = useAppConfig()
useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

