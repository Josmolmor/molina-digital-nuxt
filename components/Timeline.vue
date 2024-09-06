<template>
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
      <div class="timeline-content" :style="{ '--delay': `${index * 0.25}s` }">
        <div class="timeline-header">
          <div class="timeline-header-title">
            <h3 class="timeline-title">
              {{ $t(item.title) }}
            </h3>
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
            :aria-label="stack"
            v-for="stack in item.stack"
            :key="stack">
            <component v-if="stack" :is="`${stack}Icon`" />
          </span>
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
    default:
      return stack.charAt(0).toUpperCase() + stack.slice(1);
  }
};
</script>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  from {
    bottom: 100%;
  }
  to {
    bottom: -20px;
  }
}

.timeline-line {
  width: 0; /* Change width to 0 */
  border-left: 1px dashed var(--separator-color); /* Add this line */
  position: absolute;
  top: 44px;
  left: 50%;
  transform: translateX(-50%);
  will-change: bottom;
  animation: draw-line 1s cubic-bezier(0.2, 0.4, 0.8, 1) forwards;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
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

  &.active {
    will-change: transform;
    animation: pulse 1.5s infinite;
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
  gap: 16px;
  flex: 1;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    filter 0.5s ease;
  opacity: 0;
  filter: blur(2px);
  transform: translateY(16px);
  will-change: transform, opacity, filter;
  animation: appear 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: var(--delay, 0s);
}

.timeline-header {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2px;
}

.timeline-header-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.timeline-title-link {
  padding: 4px;

  > svg {
    color: var(--text);
    flex-shrink: 0;
    height: 16px;
    width: 16px;
  }
}

.timeline-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.timeline-description {
  font-size: 14px;
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

.timeline-date {
  font-size: 12px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    height: 14px;
    width: 14px;
  }
}

.timeline-location {
  font-size: 12px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    height: 14px;
    width: 14px;
  }
}
</style>
