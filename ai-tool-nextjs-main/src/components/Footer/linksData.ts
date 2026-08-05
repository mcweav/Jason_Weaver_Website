import { FooterLink } from "@/types/footerLink";
import { CONTACT } from "@/config/contact";

export const quickLinks: FooterLink[] = [
  {
    id: 1,
    title: "About",
    href: "/about",
    newTab: false,
  },
  {
    id: 2,
    title: "Resume",
    href: "/resume",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    href: "/#projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
    newTab: false,
  },
];

export const connectLinks: FooterLink[] = [
  {
    id: 11,
    title: "Email",
    href: `mailto:${CONTACT.email}`,
    newTab: false,
  },
  {
    id: 12,
    title: "LinkedIn",
    href: CONTACT.linkedInUrl,
    newTab: true,
  },
  {
    id: 13,
    title: "GitHub",
    href: CONTACT.githubUrl,
    newTab: true,
  },
];
