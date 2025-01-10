export interface Skill {
  alt: string;
  src: string;
  name: string;
  level: number;
}

export type SkillName =
  | "angular"
  | "nest"
  | "javascript"
  | "typeScript"
  | "react"
  | "ionic"
  | "html"
  | "css"
  | "material"
  | "mysql"
  | "postgres"
  | "docker"
  | "sass"
  | "php"
  | "laravel"
  | "java"
  | "rxjs"
  | "ngrx"
  | "tailwind"
  | "bootstrap"
  | "mongo";

const URL_ASSETS = "./logos/";

export const SKILLS: Record<SkillName, Skill> = {
  angular: {
    alt: "angular",
    src: `${URL_ASSETS}angular.svg`,
    name: "Angular",
    level: 9,
  },
  nest: {
    alt: "nest",
    src: `${URL_ASSETS}nest.svg`,
    name: "NestJS",
    level: 7,
  },
  javascript: {
    alt: "javascript",
    src: `${URL_ASSETS}javascript.svg`,
    name: "JavaScript",
    level: 8,
  },
  typeScript: {
    alt: "TypeScript",
    src: `${URL_ASSETS}typescript.svg`,
    name: "TypeScript",
    level: 9,
  },
  react: {
    alt: "react",
    src: `${URL_ASSETS}react.svg`,
    name: "ReactJS",
    level: 6,
  },
  ionic: {
    alt: "ionic",
    src: `${URL_ASSETS}ionic.svg`,
    name: "Ionic",
    level: 6,
  },
  html: {
    alt: "html",
    src: `${URL_ASSETS}html.svg`,
    name: "HTML",
    level: 9,
  },
  css: {
    alt: "css",
    src: `${URL_ASSETS}css.svg`,
    name: "CSS",
    level: 9,
  },
  material: {
    alt: "Angular Material",
    src: `${URL_ASSETS}material.svg`,
    name: "Angular Material",
    level: 8,
  },
  mysql: {
    alt: "mysql",
    src: `${URL_ASSETS}mysql.svg`,
    name: "MySQL",
    level: 8,
  },
  postgres: {
    alt: "postgres",
    src: `${URL_ASSETS}postgres.svg`,
    name: "Postgres",
    level: 7,
  },
  mongo: {
    alt: "mongo",
    src: `${URL_ASSETS}mongodb.svg`,
    name: "MongoDB",
    level: 6,
  },
  docker: {
    alt: "docker",
    src: `${URL_ASSETS}docker.svg`,
    name: "Docker",
    level: 5,
  },
  sass: {
    alt: "sass",
    src: `${URL_ASSETS}sass.svg`,
    name: "SASS",
    level: 7,
  },
  php: {
    alt: "php",
    src: `${URL_ASSETS}php.svg`,
    name: "php",
    level: 4,
  },
  laravel: {
    alt: "laravel",
    src: `${URL_ASSETS}laravel.svg`,
    name: "Laravel",
    level: 4,
  },
  java: {
    alt: "Java",
    src: `${URL_ASSETS}java.svg`,
    name: "Java",
    level: 3,
  },
  rxjs: {
    alt: "rxjs",
    src: `${URL_ASSETS}rxjs.svg`,
    name: "RxJS",
    level: 7,
  },
  ngrx: {
    alt: "ngrx",
    src: `${URL_ASSETS}ngrx.svg`,
    name: "NgRx",
    level: 8,
  },
  tailwind: {
    alt: "tailwind",
    src: `${URL_ASSETS}tailwind.svg`,
    name: "Tailwind",
    level: 7,
  },
  bootstrap: {
    alt: "bootstrap",
    src: `${URL_ASSETS}bootstrap.svg`,
    name: "Bootstrap",
    level: 9,
  },
};
