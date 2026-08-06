import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative mb-16 sm:mb-24">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="cta-box-gradient ring-gold/15 relative z-999 overflow-hidden rounded-[30px] bg-surface/60 px-4 py-20 shadow-[0_0_90px_-25px_var(--color-gold)] ring-1 backdrop-blur-xl lg:py-25">
          {/* Decorative badge, echoes the footer's mark */}
          <div
            className="absolute top-6 right-6 flex h-18 w-18 -rotate-6 items-center justify-center rounded-[22px] sm:top-8 sm:right-10 sm:h-20 sm:w-20"
            style={{
              background:
                "linear-gradient(135deg, #d9bb78 0%, #b08d3e 55%, #8a6d1f 100%)",
              boxShadow:
                "inset 3px 3px 8px rgba(255,255,255,0.35), inset -3px -3px 12px rgba(0,0,0,0.18), 8px 14px 28px rgba(138,109,31,0.35)",
            }}
          >
            <span
              className="rotate-6 text-[28px] leading-none font-bold tracking-[-0.04em] text-white sm:text-[34px]"
              style={{ textShadow: "0 3px 6px rgba(0,0,0,0.25)" }}
            >
              JW
            </span>
          </div>

          <div className="wow fadeInUp text-center">
            <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
              <Image
                src="/images/hero/icon-title.svg"
                alt="icon"
                width={17}
                height={16}
              />

              <span className="hero-subtitle-text">Let&apos;s connect</span>
            </span>
            <h2 className="mb-4.5 text-2xl font-extrabold text-ink sm:text-4xl xl:text-heading-2">
              Have a project in mind?
            </h2>
            <p className="mx-auto mb-9 max-w-[714px] font-medium">
              I&apos;m always open to talking through new opportunities,
              collaborations, or just a good problem to solve.
            </p>

            <Link
              href="/contact"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium duration-300 ease-in"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
