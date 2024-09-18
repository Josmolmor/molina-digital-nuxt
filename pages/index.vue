<template>
  <main>
    <div class="entry-text">
      <div class="intro">
        <div class="avatar-container">
          <div class="avatar-bg"></div>
          <img src="~/assets/img/me.jpg" />
        </div>
        <p>
          <span class="name">{{ $t('intro_1') }}</span>
          <span class="role">{{ $t('intro_1_2') }}</span>
        </p>
      </div>
      <p class="about">
        {{ $t('about') }}
      </p>
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
  gap: 48px;
  padding: 64px 0 128px;
}

.entry-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
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

.about {
  white-space: pre-line;
}

.intro {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;

  .avatar-container {
    position: relative;

    &:hover {
      .avatar-bg {
        transform: rotate(720deg);
      }
    }

    .avatar-bg {
      height: 66px;
      width: 66px;
      background-color: #c5b99e;
      background-image: radial-gradient(
          circle farthest-corner at top left,
          rgba(225, 243, 97, 1) 0%,
          rgba(225, 243, 97, 0) 50%
        ),
        radial-gradient(
          circle farthest-side at top right,
          rgba(181, 176, 177, 1) 0%,
          rgba(181, 176, 177, 0) 10%
        ),
        radial-gradient(
          circle farthest-corner at bottom right,
          rgba(204, 104, 119, 1) 0%,
          rgba(204, 104, 119, 0) 33%
        ),
        radial-gradient(
          circle farthest-corner at top right,
          rgba(155, 221, 240, 1) 0%,
          rgba(155, 221, 240, 0) 50%
        ),
        radial-gradient(
          ellipse at bottom center,
          rgba(254, 43, 0, 1) 0%,
          rgba(254, 43, 0, 0) 80%
        );
      border-radius: 50%;
      will-change: transform;
      transition: transform 0.5s ease-in-out;
    }

    img {
      border-radius: 50%;
      height: 64px;
      width: 64px;
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
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
      height: 18px;
      width: 18px;
    }
  }
}
</style>
