<template>
  <footer>
    <NuxtLink
      v-tooltip="{ content: 'Email me', position: 'left' }"
      to="mailto:molinamw+digital@gmail.com"
      target="_blank">
      <GmailIcon />
    </NuxtLink>
    <NuxtLink
      v-tooltip="{ content: 'Check my Github page', position: 'left' }"
      to="https://github.com/Josmolmor"
      target="_blank">
      <GithubIcon />
    </NuxtLink>
    <NuxtLink
      v-tooltip="{ content: 'Check my Linkedin page', position: 'left' }"
      to="https://www.linkedin.com/in/josmolmor/"
      target="_blank">
      <LinkedinIcon />
    </NuxtLink>
  </footer>
</template>

<script setup lang="ts">
import GithubIcon from '~/components/icons/GithubIcon.vue';
import GmailIcon from '~/components/icons/GmailIcon.vue';
import LinkedinIcon from '~/components/icons/LinkedinIcon.vue';
</script>

<style scoped>
@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

footer {
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 32px;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  will-change: transform, opacity;
  animation: appear 0.5s ease-in forwards;
  padding: 64px 0 48px;
}

svg {
  color: var(--text);
  height: 40px;
  width: 40px;
}
</style>
