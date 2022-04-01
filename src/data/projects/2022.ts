import { usualApiStack } from './api.stack';
import { Framework, Language, Project, ProjectType, Tool } from './showcase';

export const projects_2022: Project[] = [
  {
    name: 'Neurobranch v2',
    year: 2022,
    description: [
      'Revisiting the 2016 idea and reimplementing the idea correctly using modern technology',
    ],
    type: ProjectType.PERSONAL,

    technologies: [...usualApiStack],
  },
  {
    name: 'NestJS starter template',
    year: 2022,
    type: ProjectType.PERSONAL,

    description: [],
    technologies: [...usualApiStack],
  },
  {
    name: 'DiabetesPlus v2',
    year: 2022,
    type: ProjectType.PERSONAL,

    description: [],
    technologies: [...usualApiStack, Framework.REACT_NATIVE],
  },
  {
    name: 'Personal Website (here!)',
    year: 2022,
    type: ProjectType.PERSONAL,

    description: [],
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
