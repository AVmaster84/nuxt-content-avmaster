<template>
  <div class="sticky top-5 z-40 bg-background/60 backdrop-blur-lg lg:border-b-foreground/80 lg:border-2 round-lg">
    <div class="flex h-18 items-center justify-between px-4 lg:px-8 border-b lg:border-non container maz-w-screen-2xl">
      <LayoutHeaderLogo />
      <LayoutHeaderNavMenu class="hidden lg:flex flex-1"/>
      <div class="flex justify-end gap-2">
        <div class="flex">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const config = useAppConfig().avmasterDocs;
</script>

<style lang="scss" scoped>
  
</style>