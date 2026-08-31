import Image from "next/image";

const stats = [
  { label: "8+ Years", detail: "Security & Risk Leadership" },
  { label: "185K+", detail: "Personnel & Assets Protected" },
  { label: "React / Python", detail: "Full-Stack Development" },
];

const AboutSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-[1170px] px-4 py-20 sm:px-8 lg:py-25 xl:px-0">
        <div className="about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full"></div>

        <div className="wow fadeInLeft grid grid-cols-1 items-center gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* Portrait card */}
          <div className="relative mx-auto aspect-4/5 w-full max-w-[320px] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-ink/10 lg:mx-0 lg:max-w-none">
            <Image
              src="/images/hero/Photo-2.png"
              alt="Jason D. Weaver"
              fill
              className="scale-[1.15] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute right-5 bottom-5 left-5">
              <span className="hero-subtitle-gradient inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium text-white">
                Active DoD Secret Clearance
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="text-center lg:text-left">
            <span className="hero-subtitle-text mb-5 block font-semibold">
              About Me
            </span>

            <h2 className="mb-5 text-2xl font-extrabold text-ink sm:text-4xl xl:text-heading-2">
              From Leading Security Operations to Building Full-Stack
              Applications
            </h2>
            <p className="mb-8 font-medium">
              I&apos;m a security operations leader turned full stack
              developer. Over 8+ years in the U.S. Army, I led investigations,
              risk mitigation, and force protection efforts, and held an
              active DoD Secret Security Clearance while directing programs
              that protected 185,000+ personnel and government assets. Now
              I&apos;m channeling that same discipline, attention to detail,
              and calm-under-pressure mindset into building clean, usable
              interfaces &mdash; working in Python, JavaScript, HTML5, CSS3,
              and React while completing my Bachelor of Science in
              Information Technology.
            </p>

            <div className="mb-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-ink/10 bg-surface px-4 py-2.5 text-left"
                >
                  <p className="text-sm font-bold text-ink">{stat.label}</p>
                  <p className="text-xs text-ink-2">{stat.detail}</p>
                </div>
              ))}
            </div>

            <a
              href="/resume"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium duration-300 ease-in"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
