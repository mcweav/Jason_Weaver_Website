import Image from "next/image";
import Link from "next/link";
import ScrubVideo from "./ScrubVideo";

const Hero = () => {
  return (
    <section
      id='home'
      className='relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45'
    >
      {/* <!-- Hero Background Video (scrubs with mouse movement) --> */}
      <div className='pointer-events-none absolute inset-0 -z-20'>
        <ScrubVideo />
        <div className='absolute inset-0 bg-gradient-to-b from-canvas/55 via-canvas/70 to-canvas' />
      </div>

      {/* <!-- Hero Content --> */}
      <div className='relative z-1 mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0'>
        <div className='text-center'>
          <div className='ring-gold/50 shadow-[0_0_40px_-8px_var(--color-gold)] relative mx-auto mb-7 h-32 w-32 overflow-hidden rounded-full ring-2 sm:h-40 sm:w-40'>
            <Image
              src='/images/hero/Photo-1.png'
              alt='Jason D. Weaver'
              fill
              priority
              className='object-cover object-top'
            />
          </div>

          <span className='hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium'>
            <Image
              src='/images/hero/icon-title.svg'
              alt='icon'
              width={16}
              height={16}
            />

            <span className='hero-subtitle-text'>
              Full Stack Developer
            </span>
          </span>
          <h1 className='xl:text-heading-1 mb-6 text-3xl font-extrabold text-ink sm:text-5xl'>
            Jason D. Weaver
          </h1>

          <p className='mx-auto mb-9 max-w-[560px] font-medium md:text-lg'>
            Making the hard problems feel effortless. I&apos;ve been
            building full-stack applications for two years, and I bring 8+
            years of operational leadership and risk management experience
            to designing and building clean, dependable digital experiences.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/resume'
              className='hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium duration-300 ease-in'
            >
              View My Resume
            </Link>
            <Link
              href='/contact'
              className='button-border-gradient hover:button-gradient-hover inline-flex rounded-lg px-7 py-3 font-medium duration-300 ease-in'
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
