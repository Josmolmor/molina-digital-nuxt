<template>
  <main>
    <div class="entry-text">
      <div class="intro">
        <div class="avatar-container">
          <div class="avatar-bg"></div>
          <img src="~/assets/img/me.jpg" />
        </div>
        <div class="personal">
          <span class="name">{{ $t('intro_1') }}</span>
          <span class="role">{{ $t('intro_1_2') }}</span>
        </div>
      </div>
      <p class="about">
        {{ $t('about') }}
      </p>
    </div>
    <SideProjects />
    <Timeline :items="timelineItems" />
  </main>
</template>

<script setup lang="ts">
import Timeline from '@/components/Timeline.vue';
import timelineItems from '~/data/timeline';
</script>

<style scoped>
h1,
h2,
span,
p,
svg {
  will-change: color, background-color;
  transition:
    0.3s background-color ease,
    0.3s color ease;
}

main {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 64px 0 128px;
}

.entry-text {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      opacity 0.5s ease,
      transform 0.5s ease,
      filter 0.5s ease;
    will-change: transform, opacity, filter;
    animation: appear 1s ease forwards;
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

  .personal {
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
