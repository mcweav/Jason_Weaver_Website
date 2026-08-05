"use client";

import Loader from "@/components/Common/Loader";
import { CONTACT } from "@/config/contact";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import z from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(1, "Please enter a message."),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = ContactSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("/api/contact", formData);
      toast.success(res.data);
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast.error(
        error?.response?.data || "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-17.5 pt-17.5 lg:pb-22.5 xl:pb-27.5">
      <div className="mx-auto max-w-[770px] px-4 sm:px-8 xl:px-0">
        <div className="wow fadeInUp rounded-3xl bg-white/[0.05] p-8 sm:p-12">
          <p className="mb-8 text-center font-medium">
            Prefer email? Reach me directly at{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="hero-subtitle-text hover:text-white"
            >
              {CONTACT.email}
            </a>{" "}
            or connect on{" "}
            <a
              href={CONTACT.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-subtitle-text hover:text-white"
            >
              LinkedIn
            </a>
            .
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/[0.12] bg-transparent px-6 py-3.5 font-medium text-white outline-hidden focus:border-purple focus-visible:shadow-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/[0.12] bg-transparent px-6 py-3.5 font-medium text-white outline-hidden focus:border-purple focus-visible:shadow-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/[0.12] bg-transparent px-6 py-3.5 font-medium text-white outline-hidden focus:border-purple focus-visible:shadow-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="hero-button-gradient flex items-center justify-center rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Send Message {loading && <Loader />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
