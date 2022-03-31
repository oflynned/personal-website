import {
  Database,
  Framework,
  Language,
  Platform,
  Project,
  ProjectType,
  Protocol,
  Tool,
} from './showcase';

export const projects_2017: Project[] = [
  {
    name: 'Real Time Dublin',
    description: [],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [
      Language.JAVA,
      Platform.ANDROID_APP,
      Framework.ANDROID_SDK,
      Language.XML,
    ],
  },
  {
    name: 'Farrel McDarrel Soundboard',
    description: [
      'This was a soundboard app as part of a joke with some friends.',
    ],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [
      Language.JAVA,
      Platform.ANDROID_APP,
      Framework.ANDROID_SDK,
      Language.XML,
    ],
  },
  {
    name: 'Open Source Snapchat Filters',
    description: [
      'A research paper was written resulting from work done on the topic Orthogonal Procrustes in linear algebra. A webcam feed is processed and applies 3d graphics from 2d pose markers using facial landmarks. Simulated filters included object rasterisation on pose, face swap, and light occlusion.',
    ],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [Language.PYTHON, Framework.OPENCV],
    resumeWorthy: true,
  },
  {
    name: 'H. pylori Diagnosis App',
    description: [
      'This was a contract project for the TAGG group in Tallaght AMNCH hospital in Dublin Ireland.',
      'The objective of this app was to move from a paper printout to a digital way of diagnosing the H. pylori bacterial infection. I gathered requirements from doctors who would act as clients in the project, and they would provide guidance at fortnightly meetings.',
      'Eventually two native apps were released: one on iOS and one on Android.',
    ],
    year: 2017,
    type: ProjectType.CONTRACTOR,
    technologies: [
      Language.JAVA,
      Language.XML,
      Platform.ANDROID_APP,
      Framework.ANDROID_SDK,
      Framework.IOS_SDK,
      Platform.IOS_APP,
      Language.SWIFT,
    ],
  },
  {
    name: 'Thesis Dissertation',
    description: [],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [
      Language.PYTHON,
      Database.MONGODB,
      Database.NEO4J,
      Tool.D3JS,
      Language.HTML,
      Language.CSS,
    ],
  },
  {
    name: 'Trojan horse in a decoy game',
    description: [
      'A proof of concept for trying to execute code on a remote machine. There are three parts to this: the first one is a shell script that snaps pictures of the user and shows notifications. The second part is a decoy snake game that fetches this remote script from a git repo. The third part is a simple REST API with a flag to invoke or not.',
      'The remote shell script executes code to run the script via a crontab, making it difficult to remove without some system knowledge.',
    ],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [
      Platform.OSX,
      Language.SWIFT,
      Language.SHELL,
      Framework.OPENGL,
    ],
  },
  {
    name: 'Loinnir',
    description: [],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [
      Language.PYTHON,
      Framework.FLASK,
      Language.JAVA,
      Database.MONGODB,
      Database.SQLITE,
      Framework.ANDROID_SDK,
      Protocol.REST,
      Framework.JQUERY,
      Platform.API,
      Platform.ANDROID_APP,
      Platform.WEB,
    ],
  },
  {
    name: 'PlusPlant',
    description: [
      'A friend of mine needed a website to showcase his business of offsetting carbon footprints by planting trees in rural Kenya.',
      'I created a static set of pages using the Bulma design system.',
    ],
    year: 2017,
    type: ProjectType.STARTUP,
    technologies: [Language.CSS, Language.HTML, Language.JAVASCRIPT],
  },
  {
    name: 'Plynk - Banking App Redesign',
    description: [],
    year: 2017,
    type: ProjectType.PERSONAL,
    technologies: [
      Platform.ANDROID_APP,
      Framework.ANDROID_SDK,
      Language.JAVA,
      Language.XML,
      Language.PYTHON,
      Framework.FLASK,
      Database.MYSQL,
    ],
  },
];
