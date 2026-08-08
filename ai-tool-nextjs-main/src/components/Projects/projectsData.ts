export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  imgUrl: string;
  /** Local static build of the project — opened instead of `link` when present. */
  demoUrl?: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "The Beans Place",
    description:
      "A farm-to-cup e-commerce site for a specialty coffee roaster, featuring single-origin beans and a warm, bold brand look.",
    tags: ["E-Commerce", "UI/UX Design"],
    link: "https://github.com/mcweav/The-Beans-Place-2026",
    imgUrl: "/images/projects/beans-place.png",
    demoUrl: "/projects/beans-place/index.html",
  },
  {
    id: 2,
    title: "Barbershop Website",
    description:
      "A vintage-styled site for a local barbershop, with a services showcase and online appointment booking.",
    tags: ["Web Design", "Booking Site"],
    link: "https://github.com/mcweav/class_06",
    imgUrl: "/images/projects/barbershop.png",
    demoUrl: "/projects/barbershop/index.html",
  },
  {
    id: 3,
    title: "Furniture Website",
    description:
      "A services showcase for an outdoor living & furniture brand, covering shrubs and plants, walking pads, backyard coverings, and ambience lighting.",
    tags: ["Web Design", "E-Commerce"],
    link: "https://github.com/mcweav/furniture-website",
    imgUrl: "/images/projects/furniture-website.png",
    demoUrl: "/projects/furniture/index.html",
  },
  {
    id: 4,
    title: "Streamer Website",
    description:
      "A skeleton landing page template for streamers, with live-status hero, subscribe/donate/merch links, and a stream schedule section.",
    tags: ["Web Design", "Template"],
    link: "https://github.com/mcweav/streamer-website",
    imgUrl: "/images/projects/streamer-website.png",
    demoUrl: "/projects/streamer/index.html",
  },
  {
    id: 5,
    title: "Flight Master",
    description:
      "A one-stop shop for flights — real-time flight tracking, airport commute planning, and ticket booking in one dashboard.",
    tags: ["Web Design", "Dashboard"],
    link: "https://github.com/mcweav/Flight-Master",
    imgUrl: "/images/projects/flight-master.png",
  },
];

export default projectsData;
