import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="cta-box-gradient relative z-999 overflow-hidden rounded-[30px] bg-white px-4 py-20 shadow-sm lg:py-25">
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
