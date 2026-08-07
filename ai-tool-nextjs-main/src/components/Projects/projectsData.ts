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
    title: "The Beans Place",
    description:
      "A farm-to-cup e-commerce site for a specialty coffee roaster, featuring single-origin beans and a warm, bold brand look.",
    tags: ["E-Commerce", "UI/UX Design"],
    link: "https://github.com/mcweav/The-Beans-Place-2026",
    imgUrl: "/images/projects/beans-place.png",
  },
  {
    id: 2,
    title: "Barbershop Website",
    description:
      "A vintage-styled site for a local barbershop, with a services showcase and online appointment booking.",
    tags: ["Web Design", "Booking Site"],
    link: "https://github.com/mcweav/class_06",
    imgUrl: "/images/projects/barbershop.png",
  },
  {
    id: 3,
    title: "Furniture Website",
    description:
      "A services showcase for an outdoor living & furniture brand, covering shrubs and plants, walking pads, backyard coverings, and ambience lighting.",
    tags: ["Web Design", "E-Commerce"],
    link: "https://github.com/mcweav/furniture-website",
    imgUrl: "/images/projects/furniture-website.png",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Add a short description of this project here.",
    tags: ["HTML5", "CSS3"],
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=875&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Add a short description of this project here.",
    tags: ["JavaScript", "Automation"],
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=500&h=875&fit=crop&q=80",
  },
];

export default projectsData;
