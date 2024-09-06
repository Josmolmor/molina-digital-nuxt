<template>
  <main>
    <div class="entry-text">
      <h1>{{ $t('salute') }}</h1>
      <p>
        {{ $t('intro_1') }}
      </p>
      <p>
        {{ $t('intro_2') }}
        <strong>{{ new Date().getFullYear() - 2016 }} {{ $t('years') }}</strong>
        {{ $t('intro_3') }}
      </p>
      <p>
        {{ $t('intro_4') }}
      </p>
      <p>
        {{ $t('intro_5') }}
      </p>
      <br />
      <p class="side-project">
        {{ $t('side_project') }}
        <NuxtLink to="https://quizling.vercel.app/" target="_blank">
          Quizling
          <component :is="ArrowTopRightOnSquareIcon" />
        </NuxtLink>
      </p>
    </div>
    <Timeline :items="timelineItems" />
  </main>
</template>

<script setup lang="ts">
import Timeline from '@/components/Timeline.vue';
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/16/solid';
import timelineItems from '~/data/timeline';
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-bottom: 96px;
}

.entry-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

h1 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 48px;

  @media (width > 768px) {
    font-size: 64px;
  }
}

.side-project {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;

  a {
    color: var(--accent-color);
    display: flex;
    align-items: center;
    gap: 4px;

    > svg {
      flex-shrink: 0;
      height: 16px;
      width: 16px;
    }
  }
}
</style>
