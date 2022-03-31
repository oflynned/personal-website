import {
  Database,
  Framework,
  Language,
  Platform,
  Project,
  ProjectType,
  Protocol,
} from './showcase';

export const projects_2016: Project[] = [
  {
    name: 'Meat Timer',
    description: [
      'An Android app that mathematically deduces how long to cook meat depending on the parameters given.',
    ],
    year: 2016,
    type: ProjectType.PERSONAL,

    technologies: [
      Language.JAVA,
      Language.XML,
      Framework.ANDROID_SDK,
      Platform.ANDROID_APP,
    ],
  },
  {
    name: 'Neurobranch',
    description: [
      'Neurobranch was a clinical trials platform for researchers to run customisable clinical trials and collate the information for processing. Participants can opt in and join trials depending on preconditions, and then report information without researcher intervention.',
    ],
    year: 2016,
    type: ProjectType.STARTUP,

    technologies: [
      Language.JAVASCRIPT,
      Language.HTML,
      Language.CSS,
      Framework.JQUERY,
      Framework.NODEJS,
      Framework.EXPRESSJS,
      Database.MONGODB,
      Database.SQLITE,
      Database.REDIS,
      Protocol.REST,
      Language.JAVA,
      Framework.ANDROID_SDK,
      Language.XML,
    ],
  },
  {
    name: 'Webcam Face Greeter',
    description: [
      'This was an internal project as part of my time in the Accenture Innovation Labs.',
    ],
    year: 2016,
    type: ProjectType.EMPLOYEE,

    technologies: [
      Language.JAVA,
      Framework.SPRING,
      Platform.API,
      Protocol.REST,
      Framework.ALEXA_SDK,
      Database.MYSQL,
      Language.JAVASCRIPT,
    ],
  },
  {
    name: 'Zoomba',
    description: [],
    year: 2016,
    technologies: [
      Language.JAVA,
      Platform.ANDROID_APP,
      Framework.ANDROID_SDK,
      Language.XML,
      Framework.OPENGL,
    ],
    type: ProjectType.STARTUP,
  },
  {
    name: 'Irish Dictionary App',
    description: [
      'The online dictionary, tearma.ie, did not have an app and their website was slow and unfriendly to use. I decided to create an Android app that acts as a parser for their website.',
      'The app interacts with a man-in-the-middle server to parse and cache requests, and return them to the client.',
    ],
    year: 2016,
    type: ProjectType.PERSONAL,

    technologies: [
      Language.JAVASCRIPT,
      Framework.EXPRESSJS,
      Framework.NODEJS,
      Language.JAVA,
      Framework.ANDROID_SDK,
      Platform.ANDROID_APP,
    ],
  },
  {
    name: 'Ah Heyor!',
    description: [
      '"Ah Heyor!" was a game made as part of a game project in OpenGL. The objective was to collect cans of beer before the timer ran out.',
    ],
    technologies: [Language.CPP, Framework.OPENGL, Platform.WINDOWS],
    year: 2016,
    type: ProjectType.PERSONAL,
  },
];
