<template>
  <header>
    <NuxtLink
      :style="{ '--delay': `${0}s` }"
      v-tooltip="{ content: 'Get in touch', position: 'bottom' }"
      to="mailto:molinamw+digital@gmail.com"
      target="_blank">
      <GmailIcon />
    </NuxtLink>
    <NuxtLink
      :style="{ '--delay': `${0.25}s` }"
      v-tooltip="{ content: 'Github', position: 'bottom' }"
      to="https://github.com/Josmolmor"
      target="_blank">
      <GithubIcon />
    </NuxtLink>
    <NuxtLink
      :style="{ '--delay': `${2 * 0.25}s` }"
      v-tooltip="{ content: 'Linkedin', position: 'bottom' }"
      to="https://www.linkedin.com/in/josmolmor/"
      target="_blank">
      <LinkedinIcon />
    </NuxtLink>
    <NuxtLink
      :style="{ '--delay': `${3 * 0.25}s` }"
      v-tooltip="{ content: 'Codepen', position: 'bottom' }"
      to="https://codepen.io/jmmolina"
      target="_blank">
      <CodepenIcon />
    </NuxtLink>
    <NuxtLink
      v-for="locale in availableLocales"
      :to="switchLocalePath(locale.code)"
      v-tooltip="{
        content: `${locale.code === 'en' ? 'Cambiar a Inglés' : 'Switch to Spanish'}`,
        position: 'bottom',
      }"
      :style="{ '--delay': `${4 * 0.25}s` }">
      <LanguageIcon />
    </NuxtLink>
    <label
      class="theme-picker"
      for="theme-select"
      v-tooltip="{ content: 'Theme selector', position: 'bottom' }"
      :style="{ '--delay': `${5 * 0.25}s` }">
      <SwatchIcon />
      <select id="theme-select" v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </label>
  </header>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});
</script>

<style scoped>
@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  gap: 14px;
  flex-wrap: wrap;

  @media (width > 480px) {
    gap: 20px;
    justify-content: flex-end;
  }

  > * {
    flex-shrink: 0;
    padding: 4px;
    opacity: 0;
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
    will-change: transform, opacity;
    animation: appear 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: var(--delay, 0s);
  }

  .theme-picker {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  select {
    appearance: none;
    padding: 0.5px 8px;
  }

  svg {
    color: var(--text);
    height: 24px;
    width: 24px;
    flex-shrink: 0;
  }

  select {
    font-size: 14px;
    border: 1px solid var(--text);
    border-radius: 4px;
    background-color: var(--bg);
    color: var(--text);
  }
}
</style>
