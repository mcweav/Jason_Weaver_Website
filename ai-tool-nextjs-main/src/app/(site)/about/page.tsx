import AboutSection from "@/components/About/AboutSection";
import CodeSkills from "@/components/About/CodeSkills";
import Skills from "@/components/About/Skills";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jason D. Weaver",
  description:
    "Security operations leader turned UX & front-end designer, currently completing a B.S. in Information Technology.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="About Me" />
      <AboutSection />
      <Skills />
      <CodeSkills />
      <CallToAction />
    </>
  );
};

export default AboutPage;
