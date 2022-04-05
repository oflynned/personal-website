import { usualApiStack } from './api.stack';
import { Framework, Language, Project, ProjectType, Tool } from './showcase';

export const projects_2022: Project[] = [
  {
    name: 'Neurobranch v2',
    year: 2022,
    description: [
      'Revisiting the 2016 idea and reimplementing the idea correctly using modern technology and strong API typing. Instead of creating multiple clients natively, the goal is to create just a web client that can be used as a PWA to have the benefit of offline caching.',
    ],
    type: ProjectType.PERSONAL,

    technologies: [...usualApiStack],
  },
  {
    name: 'NestJS starter template',
    year: 2022,
    type: ProjectType.PERSONAL,

    description: [
      'A sample open source repo for others to use to get started quickly with common technologies via NestJS. The main goal is to cut down on repetitive tasks that I was copying over from other repos instead of just centralising it somewhere that I can keep it up to date.',
    ],
    technologies: [...usualApiStack],
  },
  {
    name: 'DiabetesPlus v2',
    year: 2022,
    type: ProjectType.PERSONAL,

    description: [
      'A refactor project revisiting the T1Exercise app to rewrite using a modern technology stack with strong typing.',
    ],
    technologies: [...usualApiStack, Framework.REACT_NATIVE],
  },
  {
    name: 'Personal Website (here!)',
    year: 2022,
    type: ProjectType.PERSONAL,

    description: [
      'An evolving website to showcase work and host projects for $5 per month under a single domain.',
    ],
    technologies: [
      Language.TYPESCRIPT,
      Language.JAVASCRIPT,
      Language.HTML,
      Language.CSS,
      Framework.NEXTJS,
      Tool.WEBPACK,
    ],
  },
];
