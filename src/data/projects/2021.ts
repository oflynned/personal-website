import {
  Framework,
  Language,
  Platform,
  Project,
  ProjectType,
  Protocol,
  Tool,
} from './showcase';

export const projects_2021: Project[] = [
  {
    name: 'Github Action - Android Version Bump',
    year: 2021,
    description: [
      'An automated way to bump semantic versioning using Github on a native Android repository. The version is generated using TypeScript when the action is kicked off on a specific workflow. Using semantic commit messages, the CI run can determine the appropriate version bump to assign to the new release. When the job completes, it creates a tag and exports parameters to create a release later in the workflow.',
    ],
    type: ProjectType.PERSONAL,
    technologies: [
      Language.TYPESCRIPT,
      Tool.JEST,
      Platform.ANDROID_APP,
      Framework.ANDROID_SDK,
      Language.GROOVY,
      Language.SHELL,
    ],
  },
  {
    name: 'Kotlin MVVM starter app',
    year: 2021,
    description: [],
    type: ProjectType.PERSONAL,
    technologies: [
      Language.KOTLIN,
      Framework.ANDROID_SDK,
      Platform.ANDROID_APP,
      Language.XML,
      Tool.HILT,
      Protocol.GRAPHQL,
      Language.GROOVY,
    ],
  },
];
