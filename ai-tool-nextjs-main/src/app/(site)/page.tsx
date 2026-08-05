import AboutSection from "@/components/About/AboutSection";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jason D. Weaver | UX & Front-End Designer",
  description:
    "Portfolio of Jason D. Weaver — UX & Front-End Designer and security operations leader.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Projects />
      <CallToAction />
    </>
  );
}
