import {
  Framework,
  Language,
  Project,
  ProjectType,
  Protocol,
  Tool,
} from './showcase';

export const projects_2022: Project[] = [
  {
    name: 'Neurobranch v2',
    year: 2022,
    description: [
      'Revisiting the 2016 idea and reimplementing the idea correctly using modern technology',
    ],
    type: ProjectType.PERSONAL,
    resumeWorthy: false,
    technologies: [Language.TYPESCRIPT, Tool.JEST, Framework.SUPERTEST],
  },
  {
    name: 'DiabetesPlus',
    year: 2022,
    type: ProjectType.PERSONAL,
    resumeWorthy: false,
    description: [''],
    technologies: [
      Language.TYPESCRIPT,
      Tool.JEST,
      Framework.SUPERTEST,
      Protocol.GRAPHQL,
      Framework.NESTJS,
      Framework.NODEJS,
    ],
  },
  {
    name: 'Syzible.com',
    year: 2022,
    type: ProjectType.PERSONAL,
    resumeWorthy: false,
    description: [''],
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
