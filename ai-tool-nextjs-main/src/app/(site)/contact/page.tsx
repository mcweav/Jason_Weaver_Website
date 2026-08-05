import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jason D. Weaver",
  description: "Get in touch with Jason D. Weaver.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Contact" />
      <Contact />
    </>
  );
};

export default ContactPage;
