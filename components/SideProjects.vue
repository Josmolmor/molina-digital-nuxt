<template>
  <div class="container blur-appear">
    <h1>{{ $t('side_projects_title') }}</h1>
    <p>
      {{ $t('intro_side_projects') }}
    </p>
    <div class="content">
      <div v-for="(project, index) in projects" :key="project.name">
        <NuxtLink class="card" :to="project.to" target="_blank">
          <div class="image-container">
            <NuxtImg class="project-image" :src="project.image" />
          </div>
          <span>{{ project.name }}</span>
          <p className="desc">{{ project.description }}</p>
        </NuxtLink>
        <NuxtLink
          class="github-link"
          :to="`https://github.com/Josmolmor/${project.name}`"
          target="_blank">
          <GithubIcon />
          <span>{{ $t('check_out_the_code') }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const projects = [
  // Added the projects array
  {
    name: 'quizling',
    image: '/quizling-meta-img.jpg',
    description: t('quizling_desc'),
    to: 'http://quizling.vercel.app/',
  },
  {
    name: 'cooba',
    image: '/cooba-meta-img.jpg',
    description: t('cooba_desc'),
    to: 'https://cooba-six.vercel.app/',
  },
];
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
}

.content {
  display: grid;
  align-items: flex-start;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  @media (width > 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.25rem;

  span {
    color: var(--text);
  }

  p {
    color: var(--text-secondary);
  }
}

.desc {
  font-size: 0.875rem;
}

.content > * {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s;

  &:hover {
    .project-image {
      transform: scale(1.05); /* Zoom effect on hover */
    }

    p {
      text-decoration: underline;
    }
  }
}

.image-container {
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 0.25rem;

  .project-image {
    user-select: none;
    pointer-events: none;
    object-fit: cover;
    height: 100%;
    width: auto;
    will-change: transform;
    transition: transform 0.3s;
    filter: var(--filter);
  }
}

svg {
  color: var(--text);
}

.github-link {
  display: flex;
  align-items: center;
  color: var(--text);
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  width: fit-content;
  font-size: 14px;

  &:hover {
    background-color: var(--text);
    color: var(--bg);

    svg {
      color: var(--bg);
    }
  }
}
</style>
