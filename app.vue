<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'JM Molina | Sr. Software Engineer',
  ogTitle: 'Get to know me',
  description: 'Get to know me.',
  ogDescription: 'Get to know me.',
  ogImage: 'https://example.com/image1.png',
  twitterCard: 'summary_large_image',
});

const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});
</script>
