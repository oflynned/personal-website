export enum ProjectType {
  CONTRACTOR = 'Contractor',
  EMPLOYEE = 'Employee',
  STARTUP = 'Startup',
  PERSONAL = 'Personal',
}

export enum Language {
  TYPESCRIPT = 'TypeScript',
  JAVASCRIPT = 'JavaScript',
  JAVA = 'Java',
  HTML = 'HTML',
  CSS = 'CSS',
  PYTHON = 'Python',
  GROOVY = 'Groovy',
  RUBY = 'Ruby',
  KOTLIN = 'Kotlin',
  SWIFT = 'Swift',
  SHELL = 'Shell',
  SCALA = 'Scala',
  XML = 'XML',
  CPP = 'C++',
}

export enum Framework {
  NODEJS = 'Node.js',
  REACT = 'React.js',
  REACT_NATIVE = 'React Native',
  ANDROID_SDK = 'Android SDK',
  IOS_SDK = 'iOS SDK',
  NEXTJS = 'Next.js',
  GATSBYJS = 'Gatsby.js',
  NESTJS = 'Nest.js',
  KOAJS = 'Koa.js',
  EXPRESSJS = 'Express.js',
  FLASK = 'Flask',
  RAILS = 'Ruby on Rails',
  JQUERY = 'jQuery',
  ALEXA_SDK = 'Alexa SDK',
  TENSORFLOW = 'Tensorflow',
  ALLEGRO = 'Allegro',
  JSOUP = 'jSoup',
  SPRING = 'Spring',
  OPENGL = 'OpenGL',
  OPENCV = 'OpenCV',
  BULLJS = 'Bull.js',
  SUPERTEST = 'Supertest',
}

export enum Platform {
  WINDOWS = 'Windows',
  OSX = 'OSX',
  ANDROID_APP = 'Android app',
  IOS_APP = 'iOS app',
  WEB = 'Web',
  API = 'API',
}

export enum Tool {
  NX = 'nrwl/nx',
  DOCKER = 'Docker',
  DOCKER_COMPOSE = 'Docker Compose',
  JEST = 'Jest',
  MOCHA = 'Mocha',
  XCODE = 'XCode',
  FIREBASE = 'Firebase',
  WEBPACK = 'Webpack',
  HILT = 'Hilt',
  PANDAS = 'Pandas',
  D3JS = 'D3.js',
}

export enum Protocol {
  GRAPHQL = 'GraphQL',
  REST = 'REST',
  RPC = 'RPC',
}

export enum Database {
  MYSQL = 'MySQL',
  SQLITE = 'SQLite',
  POSTGRESQL = 'PostgreSQL',
  MONGODB = 'MongoDB',
  NEO4J = 'Neo4j',
  REDIS = 'Redis',
}

export type Technology =
  | Language
  | Framework
  | Platform
  | Tool
  | Protocol
  | Database;

export type Project = {
  name: string;
  year: number;
  type: ProjectType;
  technologies: Technology[];
  description: string[];
  resumeWorthy?: boolean;
  notable?: boolean;
};
