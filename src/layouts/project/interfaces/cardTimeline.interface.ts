export interface Project {
  redirects: Partial<ProjectUrl>[];
  title: string;
  content: string;
}

export interface ProjectUrl {
  url: string;
  icon: "git" | "web";
}
