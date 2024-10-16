export interface Skill {
  alt: string;
  src: string;
  name: string;
  level: number;
}

const URL_ASSETS = "./logos/";

export const SKILLS: Skill[] = [
  {
    alt: "angular",
    src: `${URL_ASSETS}angular.svg`,
    name: "Angular",
    level: 8,
  },
  {
    alt: "nest",
    src: `${URL_ASSETS}nest.svg`,
    name: "Nestjs",
    level: 5,
  },
  {
    alt: "javascript",
    src: `${URL_ASSETS}javascript.svg`,
    name: "JavaScript",
    level: 8,
  },
  {
    alt: "TypeScript",
    src: `${URL_ASSETS}typescript.svg`,
    name: "TypeScript",
    level: 8,
  },
  {
    alt: "react",
    src: `${URL_ASSETS}react.svg`,
    name: "Reactjs",
    level: 4,
  },
  {
    alt: "ionic",
    src: `${URL_ASSETS}ionic.svg`,
    name: "Ionic",
    level: 5,
  },
  {
    alt: "html",
    src: `${URL_ASSETS}html.svg`,
    name: "HTML",
    level: 8,
  },
  {
    alt: "css",
    src: `${URL_ASSETS}css.svg`,
    name: "CSS",
    level: 8,
  },
  {
    alt: "Angular Material",
    src: `${URL_ASSETS}material.svg`,
    name: "Angular Material",
    level: 7,
  },
  {
    alt: "mysql",
    src: `${URL_ASSETS}mysql.svg`,
    name: "MySQL",
    level: 5,
  },
  {
    alt: "postgres",
    src: `${URL_ASSETS}postgres.svg`,
    name: "Postgres",
    level: 5,
  },
  {
    alt: "docker",
    src: `${URL_ASSETS}docker.svg`,
    name: "Docker",
    level: 3,
  },
  {
    alt: "sass",
    src: `${URL_ASSETS}sass.svg`,
    name: "Sass",
    level: 7,
  },
  {
    alt: "php",
    src: `${URL_ASSETS}php.svg`,
    name: "php",
    level: 4,
  },
  {
    alt: "laravel",
    src: `${URL_ASSETS}laravel.svg`,
    name: "Laravel",
    level: 4,
  },
  {
    alt: "Java",
    src: `${URL_ASSETS}java.svg`,
    name: "Java",
    level: 2,
  },
  {
    alt: "rxjs",
    src: `${URL_ASSETS}rxjs.svg`,
    name: "Rxjs",
    level: 7,
  },
  {
    alt: "ngrx",
    src: `${URL_ASSETS}ngrx.svg`,
    name: "Ngrx",
    level: 7,
  },
  {
    alt: "tailwind",
    src: `${URL_ASSETS}tailwind.svg`,
    name: "Tailwind",
    level: 6,
  },
  {
    alt: "bootstrap",
    src: `${URL_ASSETS}bootstrap.svg`,
    name: "Bootstrap",
    level: 8,
  },
];
