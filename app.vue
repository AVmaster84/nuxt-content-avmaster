<template>
<header
    class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg container max-w-screen-xl"
    :class="{ 'lg:border-b': config.header.border }"
  >
    <div
      class="flex h-14 items-center justify-between gap-2 px-4 md:px-8 max-w-xl xl:px-12"
    >
      <LayoutHeaderLogo class="hidden flex-1 md:flex" />
      <LayoutMobileNav />
      <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
      <LayoutHeaderNav class="hidden flex-1 lg:flex" />
      <div class="flex flex-1 justify-end gap-2">
        <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'input'" />
        <div class="flex">
          <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'button'" />
          <ThemePopover v-if="config.theme.customizable" />
          <DarkModeToggle v-if="config.header.darkModeToggle" />
          
        </div>
      </div>
    </div>
    <div v-if="config.toc.enable && config.toc.enableInMobile" class="lg:hidden">
      <LayoutToc is-small />
    </div>
  </header>
</template>


<script setup lang="ts">
const  config = useAppConfig().avmasterDocs
const { seo } = useAppConfig().avmasterDocs;
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
});
useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
});
</script>