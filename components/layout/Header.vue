<template>
  <div class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg shadow"
  :class="{ 'lg:border-b': config.header.border}">
    <div class="flex h-18 items-center justify-between px-4 lg:px-8"
    :class="{ 'border-b lg:border-none': config.header.border, 'container max-w-screen-2xl': config.main.padded }">
      <LayoutHeaderLogo />
      <LayoutHeaderNav class="hidden lg:flex flex-1"/>
      <div class="flex justify-end gap-2">
        <div class="flex">
          <DarkModeToggle v-if="config.header.darkModeToogle" />
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const config = useAppConfig()
</script>

<style lang="scss" scoped>
  
</style>