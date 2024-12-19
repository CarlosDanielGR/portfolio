import { SKILLS, Skill } from "@shared/skills.data";

export interface Project {
  date: string;
  title: string;
  content: string;
  description: string;
  technologies: Skill[];
  repositoryLink?: string;
}

export const PROJECTS: Project[] = [
  {
    date: "10/2021 - 07/2023 (Inlaze)",
    title: "landing",
    description:
      "Landing page designed with a focus on user experience, whose main objective was to clearly communicate the benefits of registering on the platform.",
    content: `
    <p>
      Landing page designed with a focus on user experience, whose main objective was to clearly communicate the benefits of registering on the platform.
    </p>
    <p>
      The page was optimized to improve loading speed, implementing techniques such as lazy loading. In addition, key SEO elements were configured, such as the creation of sitemap.xml and robots.txt, the inclusion of relevant metadata and correct semantics in the HTML, ensuring greater visibility in search engines and better accessibility for users.
    </p>
    `,
    technologies: [SKILLS.angular, SKILLS.sass, SKILLS.bootstrap],
  },
  {
    date: "12/2021 - 07/2023 (Inlaze)",
    title: "partner",
    description:
      "Main page that allowed users to register with identity verification. Once registered, they could purchase campaign links to promote",
    content: `
    <p>
      Main page that allowed users to register with identity verification. Once registered, they could purchase campaign links to promote and view both daily and general registrations. The page included a main control panel with interactive and intuitive graphics showing the results generated.
    </p>
    <p>
      This project was developed using Ionic, which allowed us to create a hybrid application compatible with web and mobile platforms. 
    </p>
    <p>
      In addition, a postback option was implemented for clients who required additional information about the shared links, improving the experience and interaction with users.
    </p>
    `,
    technologies: [
      SKILLS.angular,
      SKILLS.ionic,
      SKILLS.sass,
      SKILLS.bootstrap,
      SKILLS.tailwind,
    ],
  },
  {
    date: "02/2023 - 03/2023 (Inlaze)",
    title: "inlabet",
    description:
      "Targeted advertising page, designed to highlight the company's main campaigns.",
    content: `
    <p>
      Page focused on advertising objectives, designed to showcase the company's main campaigns.
    </p>
    <p>
      The page made a single call to the backend to obtain all the necessary data, while the application status management was handled through NgRx.
    </p>
    <p>
      Dynamic filters and search functionality were implemented exclusively on the frontend, which optimized user interaction and reduced the load on the server, improving the overall performance of the application.
    </p>
    `,
    technologies: [SKILLS.angular, SKILLS.ngrx, SKILLS.sass, SKILLS.bootstrap],
  },
  {
    date: "05/2023 - 07/2023 (Inlaze)",
    title: "inlajobs",
    description:
      "Page dedicated to the publication of job vacancies available for the company.",
    content: `
    <p>
      Page dedicated to publishing job vacancies available at the company.
    </p>
    <p>
      The application had dynamic filters that allowed users to perform customized searches.
    </p>
    <p>
      In addition, it included reactive forms that adjusted their structure according to the backend responses, ensuring a flexible and adaptive user experience. Data submitted by users was rigorously validated, ensuring that URLs, email addresses and resume PDF files were correct before being processed.
    </p>
    `,
    technologies: [
      SKILLS.angular,
      SKILLS.sass,
      SKILLS.bootstrap,
      SKILLS.tailwind,
    ],
  },
  {
    date: "11/2023 - 06/2024 (Innovating solutions)",
    title: "sigmaqmo",
    description:
      "Robust application designed to manage all key processes of the company.",
    content: `
    <p>
      Robust application designed to manage all key processes of the company, such as human resources, payroll, and inventory control. The main objective was to allow the organization and storage of the warehouse inventory by categories and subcategories, optimizing product management.
    </p>
    <p>
      The application implemented a system of dynamic permissions adapted to the needs of each user. During my participation in the development, I provided technical support, implemented improvements and developed new modules, ensuring an efficient and scalable solution that facilitated resource management and decision making.
    </p>
    `,
    technologies: [SKILLS.angular, SKILLS.material, SKILLS.bootstrap],
  },
  {
    date: "09/2023 - 09/2024 (Innovating solutions)",
    title: "ateneo",
    description:
      "Specialized application for an IPS, designed to automate essential processes such as appointment control, scheduling, client and physician management.",
    content: `
    <p>
      Specialized application for an IPS, designed to automate essential processes such as appointment control, scheduling, client and physician management, medication management, human resources, payroll, expenses, among others.
    </p>
    <p>
      It had a dynamic permissions system that adapted access according to the role of each user. During my participation in the development, I provided technical support, created new modules and made several improvements, such as application componentization and the implementation of a code standard.
    </p>
    <p>
      In addition, I optimized performance using lazy loading, updated the Angular version to the latest one and made other improvements that ensured greater efficiency and scalability.
    </p>
    `,
    technologies: [SKILLS.angular, SKILLS.material, SKILLS.bootstrap],
  },
  {
    date: "03/2024 - 03/2024 (Freelance)",
    title: "actus",
    description:
      "Landing page developed for a company dedicated to improve processes in their affiliated companies.",
    content: `
    <p>
      Landing page developed for a company dedicated to improve processes in their affiliated companies.
    </p>
    <p>
      The layout was designed following UX/UI principles, ensuring an intuitive and attractive user experience.
    </p>
    <p>
      Speed improvements such as lazy loading were implemented to optimize the loading of resources, and an interactive form was included to request personalized advice, facilitating the conversion of visitors into potential customers.
    </p>
    `,
    technologies: [SKILLS.angular, SKILLS.sass, SKILLS.bootstrap],
    repositoryLink: "https://github.com/carlosdanielgr/actus",
  },
  {
    date: "03/2024 - 04/2024 (Freelance)",
    title: "resolve-insurance",
    description: "Landing page designed for an insurance sales company.",
    content: `
    <p>
      Landing page designed for an insurance sales company, with a layout based on a carefully crafted UX/UI design to ensure a smooth and engaging user experience.
    </p>
    <p>
      Image loading was optimized and lazy loading of components was implemented to improve performance. In addition, an interactive form was incorporated to allow users to request a specific insurance, facilitating the conversion and contact process.
    </p>
    `,
    technologies: [SKILLS.angular, SKILLS.sass, SKILLS.bootstrap],
    repositoryLink: "https://github.com/carlosdanielgr/resolve-insurance",
  },
  {
    date: "03/2024 - 04/2024 (Freelance)",
    title: "nomadas-media",
    description:
      "Landing page developed for a company that offers integrated marketing and design services.",
    content: `
    <p>
      Landing page designed for a full service marketing and design company.
    </p>
    <p>
      The page included detailed information about services, a section of allied companies, frequently asked questions, and a dynamic form to capture data from customers interested in specific services.
    </p>
    <p>
      As in other developments, lazy loading techniques were applied to optimize performance and SEO best practices were implemented to improve search engine visibility and ensure a fast and efficient user experience.
    </p>
    `,
    technologies: [SKILLS.angular, SKILLS.sass, SKILLS.bootstrap],
    repositoryLink: "https://github.com/carlosdanielgr/nomadas-media",
  },
  {
    date: "08/2024 - 10/2024 (Freelance)",
    title: "wallprint",
    description:
      "Landing page designed for a startup specialized in custom printing on various elements.",
    content: `
    <p>
      Landing page designed for a startup specialized in custom printing on various elements, such as murals, tables, floors, among others. The page presented examples of prints made, a FAQ section, and an interactive form where users could detail their design idea, specifying the material to be used.
    </p>
    <p>
     Lazy loading techniques were implemented for both images and components, optimizing performance and providing a smooth and efficient user experience.    
    </p>
    `,
    technologies: [SKILLS.angular, SKILLS.sass, SKILLS.bootstrap],
    repositoryLink: "https://github.com/carlosdanielgr/wallprint",
  },
  {
    date: "11/2024 - 11/2024 (Personal)",
    title: "marvel",
    description:
      "Personal project consisting of a consumer test of Marvel's free API. ",
    content: `
  <p>
  Personal project consisting of a consumer test of Marvel's free API. This system allows users to register, login and manage products related to Marvel characters and events.
  </p>
  <p>
  The frontend is developed with Angular, providing an interactive and fluid interface, while the backend is implemented with NestJS, handling user authentication, product management and interaction with the Marvel API.
  </p>
  <p>
  This project demonstrates effective integration between frontend and backend, using good development practices and ensuring optimal performance.
  </p>
  `,
    technologies: [
      SKILLS.angular,
      SKILLS.sass,
      SKILLS.bootstrap,
      SKILLS.nest,
      SKILLS.postgres,
      SKILLS.docker,
    ],
    repositoryLink: "https://github.com/carlosdanielgr/marvel",
  },
  {
    date: "11/2024 - 12/2024 (Freelance)",
    title: "invien",
    description:
      "The project consists of a comprehensive system for the management and publication of real estate properties.",
    content: `
    <p>
    The project consists of a comprehensive system for the management and publication of real estate properties. It includes a multilingual home page designed for end users, showing properties available for rent and sale.
    </p>
    <p>
    This page allows advanced searches through filters, to consult the complete details of each property, to generate impressions of each property, and to complete a form to request additional information.
    </p>
    <p>
    Additionally, there is an administrative page to manage all aspects related to the properties, including their creation, modification or deletion.
    </p>
     <p>
    The backend, developed with NestJS, handles user authentication and the implementation of a CRUD system to manage properties efficiently. This approach ensures a robust and scalable operation, adapted to the needs of both administrators and end users.
    </p>
     `,
    technologies: [
      SKILLS.angular,
      SKILLS.sass,
      SKILLS.bootstrap,
      SKILLS.nest,
      SKILLS.postgres,
      SKILLS.docker,
    ],
    repositoryLink: "https://github.com/carlosdanielgr/invien",
  },
];
