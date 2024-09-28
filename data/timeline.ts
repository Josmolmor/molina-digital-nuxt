import {
  AcademicCapIcon,
  CodeBracketIcon,
  GlobeAmericasIcon,
  PaintBrushIcon,
} from '@heroicons/vue/16/solid';

export type StackItem =
  | 'react'
  | 'preact'
  | 'typescript'
  | 'vue'
  | 'angular'
  | 'webpack'
  | 'vite'
  | 'extension'
  | 'sass'
  | 'jest'
  | 'cypress'
  | 'circle'
  | 'nextjs'
  | 'graphql'
  | 'apollo'
  | 'strapi'
  | 'styledcomponents'
  | 'mdx'
  | 'sharepoint'
  | 'sharp'
  | 'dotnet'
  | 'php'
  | 'sql'
  | 'language';

export type TimelineItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  url?: string;
  location?: string;
  icon?: object; // Vue component
  stack?: StackItem[];
  recommendationLink?: string;
};

const timelineItems: TimelineItem[] = [
  {
    id: '1',
    icon: GlobeAmericasIcon,
    title: 'iCIMS',
    url: 'https://www.icims.com/products/talent-cloud-platform/video-studio/',
    date: 'Feb 2022 - Oct 2024',
    location: 'Remote (Holmdel, New Jersey, United States)',
    description: 'icims_desc',
    stack: [
      'react',
      'preact',
      'typescript',
      'vue',
      'angular',
      'webpack',
      'vite',
      'extension',
      'sass',
      'jest',
      'cypress',
      'circle',
      'language'
    ],
    recommendationLink:
      'https://github.com/Josmolmor/recommendation-letters/tree/main/icims',
  },
  {
    id: '2',
    icon: PaintBrushIcon,
    title: 'Z1 Digital Studio',
    url: 'https://z1.digital/',
    date: 'Jan 2019 - Feb 2022',
    location: 'Hybrid (Seville)',
    description: 'z1_desc',
    stack: [
      'react',
      'nextjs',
      'typescript',
      'graphql',
      'apollo',
      'strapi',
      'vue',
      'angular',
      'sass',
      'styledcomponents',
      'jest',
      'cypress',
      'mdx',
    ],
  },
  {
    id: '3',
    icon: CodeBracketIcon,
    title: 'Babel',
    url: 'https://babelgroup.com/en/',
    date: 'Aug 2016 - Jan 2019',
    location: 'Seville',
    description: 'babel_desc',
    stack: ['sharepoint', 'sharp', 'dotnet', 'php', 'sql'],
  },
  {
    id: '4',
    icon: AcademicCapIcon,
    title: 'Babel (Internship)',
    url: 'https://babelgroup.com/en/',
    date: 'Mar 2016 - Aug 2019',
    location: 'Seville',
    description: 'internship_desc',
    stack: ['sharepoint', 'sharp', 'dotnet', 'php', 'sql'],
  },
];

export default timelineItems;
