export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  imgUrl: string;
};

// Placeholder projects — swap in your real work (and screenshots) whenever it's ready.
const projectsData: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "Add a short description of this project here.",
    tags: ["React", "Design"],
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=875&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Add a short description of this project here.",
    tags: ["JavaScript", "UX"],
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=875&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Add a short description of this project here.",
    tags: ["Python", "Security"],
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=875&fit=crop&q=80",
  },
];

export default projectsData;
