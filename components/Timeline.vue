<template>
  <div>
    <h1>Experience</h1>
    <p class="intro">
      Over 8 years of experience as a software engineer, specializing in
      front-end development with technologies like React, Next.js, Vue and
      TypeScript. Led and contributed to global, asynchronous teams, delivering
      high-quality UIs and scalable solutions for companies such as iCIMS and
      Z1. Adept at Agile practices, managing teams, and mentoring junior
      developers.
    </p>
    <div class="timeline-container">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="timeline-item-container">
        <div class="timeline-line-container">
          <div v-if="item.icon" class="timeline-icon">
            <component :is="item.icon" />
          </div>
          <div v-else class="timeline-dot"></div>
          <div v-if="index < items.length - 1" class="timeline-line"></div>
        </div>
        <div
          class="timeline-content"
          :style="{ '--delay': `${index * 0.25}s` }">
          <div class="timeline-header">
            <div class="timeline-header-title">
              <h2 class="timeline-title">
                {{ $t(item.title) }}
              </h2>
              <NuxtLink
                class="timeline-title-link"
                v-if="item.url"
                :to="item.url"
                target="_blank">
                <component :is="ArrowTopRightOnSquareIcon" />
              </NuxtLink>
            </div>
            <span class="timeline-date">
              <component :is="CalendarDaysIcon" />
              {{ $t(item.date) }}
            </span>
            <span v-if="item.location" class="timeline-location">
              <component :is="MapPinIcon" />
              {{ $t(item.location) }}
            </span>
          </div>
          <p class="timeline-description" v-html="$t(item.description)"></p>
          <div class="stack-list" v-if="item.stack?.length">
            <span
              v-tooltip="{ content: parseStack(stack), position: 'bottom' }"
              v-for="stack in item.stack"
              :key="stack">
              <component v-if="stack" :is="`${stack}Icon`" />
            </span>
          </div>
          <div class="recommendation-link" v-if="item.recommendationLink">
            <NuxtLink
              class="recommendation-letter-link"
              :to="item.recommendationLink"
              target="_blank">
              <span>{{ $t('recommendation_letters') }}</span>
              <component :is="ArrowTopRightOnSquareIcon" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import {
  MapPinIcon,
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/16/solid';
import type { TimelineItem } from '~/data/timeline';

defineProps({
  items: {
    type: Array as PropType<TimelineItem[]>,
    required: true,
  },
});

const { t } = useI18n();

const parseStack = (stack: string): string => {
  switch (stack) {
    case 'extension':
      return t('Browser extensions');
    case 'circle':
      return 'CircleCI';
    case 'nextjs':
      return 'NextJS';
    case 'graphql':
      return 'GraphQL';
    case 'styledcomponents':
      return 'Styled components';
    case 'mdx':
      return 'MDX';
    case 'sharp':
      return 'C#';
    case 'dotnet':
      return '.Net';
    case 'php':
      return 'PHP';
    case 'sql':
      return 'SQL';
    case 'language':
      return 'Internationalization/Localization';
    default:
      return stack.charAt(0).toUpperCase() + stack.slice(1);
  }
};
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

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  & + p {
    margin-bottom: 2rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      opacity 0.5s ease,
      transform 0.5s ease,
      filter 0.5s ease;
    opacity: 0;
    filter: blur(2px);
    transform: translateY(-16px);
    will-change: transform, opacity, filter;
    animation: appear 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: var(--delay, 0s);
  }
}

.intro {
  @media (prefers-reduced-motion: no-preference) {
    transition:
      opacity 0.5s ease,
      transform 0.5s ease,
      filter 0.5s ease;
    opacity: 0;
    filter: blur(2px);
    transform: translateY(-16px);
    will-change: transform, opacity, filter;
    animation: appear 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: var(--delay, 0s);
  }
}

.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 64px;
  color: var(--text);
}

.timeline-item-container {
  display: flex;
  gap: 16px;
}

.timeline-line-container {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 40px;
}

@keyframes draw-line {
  to {
    bottom: -48px;
  }
}

.timeline-line {
  width: 0; /* Change width to 0 */
  border-left: 1px dashed var(--separator-color); /* Add this line */
  position: absolute;
  top: 44px;
  left: 50%;
  bottom: 0;

  @media (prefers-reduced-motion: no-preference) {
    bottom: 100%;
    transform: translateX(-50%);
    will-change: bottom;
    animation: draw-line 1.25s cubic-bezier(0.2, 0.4, 0.8, 1) forwards;
  }
}

.timeline-icon,
.timeline-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
  font-size: 12px;
  z-index: 1;

  > svg {
    height: 14px;
    width: 14px;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      opacity 0.5s ease,
      transform 0.5s ease,
      filter 0.5s ease;
    opacity: 0;
    filter: blur(2px);
    transform: translateY(-16px);
    will-change: transform, opacity, filter;
    animation: appear 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: var(--delay, 0s);
  }
}

.timeline-header {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
}

.timeline-header-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 0 0 8px;
}

.timeline-title-link {
  padding: 4px;

  > svg {
    color: var(--text);
    flex-shrink: 0;
    height: 20px;
    width: 20px;
  }
}

.timeline-title {
  font-size: var(--title-font-size);
  line-height: 1.2;
  font-weight: 600;
  margin: 0;
}

.timeline-description {
  color: var(--text);
  margin: 0;
  white-space: pre-line;
}

.stack-list {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;

  svg {
    height: 22px;
    width: 22px;
  }
}

.recommendation-letter-link {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;

  svg {
    height: 18px;
    width: 18px;
  }
}

.timeline-date,
.timeline-location {
  font-size: var(--sub-font-size);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    height: 16px;
    width: 16px;
  }
}
</style>
