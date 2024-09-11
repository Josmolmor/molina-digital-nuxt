<template>
  <main>
    <div class="entry-text">
      <div class="intro">
        <img src="~/assets/img/me.jpg" />
        <p>
          <span class="name">{{ $t('intro_1') }}</span>
          <span class="role">{{ $t('intro_1_2') }}</span>
        </p>
      </div>
      <p>
        {{ $t('intro_2') }}
        <span class="strong">
          {{ new Date().getFullYear() - 2016 }} {{ $t('years') }}
        </span>
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
import { ArrowTopRightOnSquareIcon, MapPinIcon } from '@heroicons/vue/16/solid';
import timelineItems from '~/data/timeline';
</script>

<style scoped>
@keyframes appear {
  0% {
    opacity: 0;
    filter: blur(1px);
    transform: translateY(-8px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

main {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 64px 0 128px;
}

.entry-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    filter 0.5s ease;
  will-change: transform, opacity, filter;
  animation: appear 1s ease forwards;

  .strong {
    font-weight: 600;
  }
}

.intro {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;

  img {
    border-radius: 50%;
    height: 64px;
    width: 64px;
  }

  p {
    display: flex;
    flex-direction: column;
    line-height: 1.25;
    gap: 4px;

    .name {
      font-weight: 500;
    }

    .role {
      color: var(--text-secondary);
    }
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
