<template>
  <header>
    <NuxtLink
      :style="{ '--delay': `${0}s` }"
      v-tooltip="{ content: t('send_email'), position: 'top' }"
      to="mailto:molinamw+digital@gmail.com"
      target="_blank">
      <GmailIcon />
    </NuxtLink>
    <NuxtLink
      :style="{ '--delay': `${0.25}s` }"
      v-tooltip="{ content: 'Github', position: 'top' }"
      to="https://github.com/Josmolmor"
      target="_blank">
      <GithubIcon />
    </NuxtLink>
    <NuxtLink
      :style="{ '--delay': `${2 * 0.25}s` }"
      v-tooltip="{ content: 'Linkedin', position: 'top' }"
      to="https://www.linkedin.com/in/josmolmor/"
      target="_blank">
      <LinkedinIcon />
    </NuxtLink>
    <NuxtLink
      :style="{ '--delay': `${3 * 0.25}s` }"
      v-tooltip="{ content: 'Codepen', position: 'top' }"
      to="https://codepen.io/jmmolina"
      target="_blank">
      <CodepenIcon />
    </NuxtLink>
    <NuxtLink
      v-for="locale in availableLocales"
      :to="switchLocalePath(locale.code)"
      v-tooltip="{
        content: t('locale_switch'),
        position: 'top',
      }"
      :style="{ '--delay': `${4 * 0.25}s` }">
      <LanguageIcon />
    </NuxtLink>
    <button
      class="theme-picker"
      v-tooltip="{
        content: t('switch_theme', {
          theme: t(`${nextColorMode}` ?? defaultThemeValue),
        }),
        position: 'top',
      }"
      :style="{ '--delay': `${5 * 0.25}s` }"
      @click="toggleTheme">
      <SwatchIcon />
    </button>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});

const nextColorMode = computed(() => {
  switch (colorMode.value) {
    case 'light':
      return 'dark';
    case 'dark':
      return 'sepia';
    case 'sepia':
      return 'light';
  }
});

const defaultThemeValue = 'light';

const toggleTheme = () => {
  const nextColor = nextColorMode.value ?? defaultThemeValue;
  colorMode.value = nextColor;
  colorMode.preference = nextColor;
};
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
  gap: 6px;
  flex-wrap: wrap;
  box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow);
  position: fixed;
  bottom: 32px;
  background: var(--bg);
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  border-radius: 16px;
  padding: 8px;
  width: 100%;
  max-width: 288px;

  > a,
  button {
    flex-shrink: 0;
    padding: 8px;
    opacity: 0;
    transition:
      background-color 0.2s ease,
      opacity 0.5s ease,
      transform 0.5s ease;
    will-change: transform, opacity, background-color;
    animation: appear 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: var(--delay, 0s);
    border-radius: 8px;

    &:hover {
      background-color: var(--hover);
    }
  }

  .theme-picker {
    appearance: none;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 8px;
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
