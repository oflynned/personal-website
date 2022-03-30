export enum ProjectType {
  FREELANCE,
  STARTUP,
  PERSONAL,
}

export enum Technology {
  REACT,
  REACT_NATIVE,
  NODEJS,
  NEXTJS,
  NESTJS,
  TYPESCRIPT,
  JAVASCRIPT,
  JAVA,
  ANDROID,
  WEB,
  IOS,
  GRAPHQL,
  REST,
  PYTHON,
  RUBY,
  KOTLIN,
  SWIFT,
  EXPRESSJS,
}

export type Project = {
  name: string;
  type: ProjectType;
  technologies: Technology[];
  description: string;
};

export const projects: Project[] = [
  {
    name: 'GreenFi',
    description: '',
    type: ProjectType.FREELANCE,
    technologies: [
      Technology.ANDROID,
      Technology.EXPRESSJS,
      Technology.NODEJS,
      Technology.REACT,
    ],
  },
];
