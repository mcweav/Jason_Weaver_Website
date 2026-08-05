import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-[1170px] px-4 py-20 sm:px-8 lg:py-25 xl:px-0">
        <div className="about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full"></div>

        <div className="flex flex-wrap justify-between gap-11 xl:flex-nowrap">
          <div className="wow fadeInLeft w-full max-w-[570px]">
            <span className="hero-subtitle-text mb-5 block font-semibold">
              About Me
            </span>

            <h2 className="mb-5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
              From Leading Security Operations to Designing Digital Experiences
            </h2>
            <p className="mb-9 font-medium">
              I&apos;m a security operations leader turned UX &amp; front-end
              designer. Over 8+ years in the U.S. Army, I led investigations,
              risk mitigation, and force protection efforts, and held an
              active DoD Secret Security Clearance while directing programs
              that protected 185,000+ personnel and government assets. Now
              I&apos;m channeling that same discipline, attention to detail,
              and calm-under-pressure mindset into building clean, usable
              interfaces &mdash; working in Python, JavaScript, HTML5, CSS3,
              and React while completing my Bachelor of Science in Information
              Technology.
            </p>

            <a
              href="/resume"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              View My Resume
            </a>
          </div>

          <div className="wow fadeInRight relative hidden aspect-556/401 w-full xl:block">
            <Image src="/images/about/about.svg" alt="about" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
