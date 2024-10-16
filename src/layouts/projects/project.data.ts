import { SKILLS, Skill } from "../skills/skills.data";

export interface Project {
  date: string;
  title: string;
  content: string;
  technologies: Skill[];
  repositoryLink?: string;
}

export const PROJECTS: Project[] = [
  {
    date: "2021 - 2023 (Inlaze)",
    title: "Landing",
    content:
      "I crafted a straightforward informational page, highlighting the prominence of native Angular animations during my development phase.",
    technologies: [SKILLS[0]],
  },
  // {
  //   title: "2021 - inlaze partner (Inlaze)",
  //   content:
  //     "I founded the core platform with an administration module. I initiated the project, integrating the Ionic framework for mobile compatibility, along with a service worker and PWA support.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2022 - Learn-nest (Personal)",
  //   content:
  //     "I developed this project as a NestJS learning exercise, featuring multiple branches that establish connections to both MongoDB and Postgres databases.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2022 - Inlazepay (Inlaze)",
  //   content:
  //     "The application drew inspiration from the aforementioned Landing project. During my development phase, I focused on providing support and enhancements.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2023 - Angular-Ngrx (Personal)",
  //   content:
  //     "Crafted for learning and implementing the Angular NGRX state management.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2023 - Archetype (Personal)",
  //   content:
  //     "Initiated Angular project structures from the ground up, featuring diverse branches catering to specific requirements.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2023 - Inlabet (Inlaze)",
  //   content:
  //     "I initiated this project from the ground up, introducing the company's first implementation of the NGRX state handler. I remained the sole developer, overseeing the project from its inception to its initial deployment in production.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2023 - Learn-react (Personal)",
  //   content:
  //     "Built upon the 'Docker' documentation, this project serves as a learning tool for understanding React and its dependencies.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2023 - Inlajobs (Inlaze)",
  //   content:
  //     "From absolute inception, I crafted this job posting platform with an integrated, standard Angular responsive form. Throughout the journey from creation to production deployment, I stood as the sole developer behind its realization.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2024 - Sigmaqmo (Innovating solutions)",
  //   content:
  //     "The platform offers a comprehensive solution for payroll management, human resources, inventory, purchases, and a wide range of configurations and permissions, thus facilitating total company management through a single centralized platform.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2024 - Actus elena (Freelance)",
  //   content:
  //     "Website dedicated to providing detailed information about the company's product and facilitating the application process through an online form for interested users.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2024 - Resuelve tu seguro (Freelance)",
  //   content:
  //     "Website dedicated to providing detailed information about the company's product and facilitating the application process through an online form for interested users.",
  //   technologies: [SKILLS[0]],
  // },
  // {
  //   title: "2024 - Nomadas media (Freelance)",
  //   content:
  //     "Website dedicated to providing detailed information about the company's product and facilitating the application process through an online form for interested users.",
  //   technologies: [SKILLS[0]],
  // },
];
