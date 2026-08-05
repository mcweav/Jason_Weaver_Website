export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

// Placeholder projects — swap in your real work whenever it's ready.
const projectsData: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "Add a short description of this project here.",
    tags: ["React", "Design"],
    link: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Add a short description of this project here.",
    tags: ["JavaScript", "UX"],
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Add a short description of this project here.",
    tags: ["Python", "Security"],
    link: "#",
  },
];

export default projectsData;
