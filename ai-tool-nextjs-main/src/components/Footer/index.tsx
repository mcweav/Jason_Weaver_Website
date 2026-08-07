import { CONTACT } from "@/config/contact";
import Link from "next/link";
import { Caveat, DM_Sans } from "next/font/google";
import Watermark from "./Watermark";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Resume", href: "/resume" },
  { title: "Projects", href: "/#projects" },
  { title: "Contact", href: "/contact" },
];

const connectLinks = [
  { title: "Email", href: `mailto:${CONTACT.email}`, external: false },
  { title: "LinkedIn", href: CONTACT.linkedInUrl, external: true },
  { title: "GitHub", href: CONTACT.githubUrl, external: true },
];

const FOOTER_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4";

const socialIcons = [
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    external: false,
    path: "M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z",
    viewBox: "0 0 16 12",
  },
  {
    label: "LinkedIn",
    href: CONTACT.linkedInUrl,
    external: true,
    path: "M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3ZM6.5 7.7A1.7 1.7 0 1 1 8.2 6a1.7 1.7 0 0 1-1.7 1.7ZM19 19h-3v-4.9c0-1.2-.4-2-1.5-2a1.6 1.6 0 0 0-1.5 1.1 2 2 0 0 0-.1.7V19h-3V9h3v1.3A3 3 0 0 1 15.6 9c2 0 3.4 1.3 3.4 4.1Z",
    viewBox: "0 0 24 24",
  },
  {
    label: "GitHub",
    href: CONTACT.githubUrl,
    external: true,
    path: "M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z",
    viewBox: "0 0 24 24",
  },
];

const Footer = () => {
  return (
    <footer
      className={`${dmSans.variable} ${caveat.variable} relative z-10 overflow-hidden bg-canvas pt-17.5 pb-10 font-[family-name:var(--font-dm-sans)]`}
    >
      {/* <!-- Background Video, faded in at the top so it blends with the section above --> */}
      <div className="pointer-events-none absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_12%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%)]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={FOOTER_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      <div className="mx-auto grid max-w-[1150px] grid-cols-1 gap-4 px-4 sm:px-8 min-[860px]:grid-cols-[350px_1fr] xl:px-0">
        {/* Left card: video + logo + tagline + socials */}
        <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[28px] bg-ink p-8 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
          <video
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4"
              type="video/mp4"
            />
          </video>

          <div className="relative z-1 flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-[1.5px] border-white/85 bg-white/15 text-[16px] font-bold tracking-[-0.02em] text-white">
              J
            </span>
            <span className="text-[22px] font-bold tracking-[-0.02em] text-white">
              Jason D. Weaver
            </span>
          </div>

          <div className="relative z-1 mt-auto mb-7">
            <p className="text-[19px] leading-[1.45] text-white">
              Making the hard problems,
              <br />
              <span className="text-white/65">feel effortless.</span>
            </p>
          </div>

          <div className="relative z-1 flex items-center justify-between gap-3">
            <span
              className={`${caveat.variable} font-[family-name:var(--font-caveat)] text-[17px] font-semibold tracking-[0.3px] text-white/90`}
            >
              Stay in touch!
            </span>
            <div className="flex items-center gap-1.75">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-[#0e1014] text-white shadow-[0_6px_18px_rgba(0,0,0,0.35),0_2px_6px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold"
                >
                  <svg
                    className="h-3.75 w-3.75 fill-current"
                    viewBox={social.viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right card: nav columns */}
        <div className="relative flex flex-col justify-between overflow-visible rounded-[28px] p-8 sm:p-10">
          {/* Floating badge */}
          <div className="absolute -top-9 right-6 z-10 flex flex-col items-start gap-1.5 sm:right-10">
            <div
              className="flex h-18 w-18 -rotate-6 items-center justify-center rounded-[22px] sm:h-24 sm:w-24"
              style={{
                background:
                  "linear-gradient(135deg, #7db6f2 0%, #3b7fd6 55%, #1e4f9c 100%)",
                boxShadow:
                  "inset 3px 3px 8px rgba(255,255,255,0.35), inset -3px -3px 12px rgba(0,0,0,0.18), 8px 14px 28px rgba(30,79,156,0.35)",
              }}
            >
              <span
                className="rotate-6 text-[32px] leading-none font-bold tracking-[-0.04em] text-white sm:text-[42px]"
                style={{ textShadow: "0 3px 6px rgba(0,0,0,0.25)" }}
              >
                JW
              </span>
            </div>
            <div className="mt-1 flex -rotate-4 items-center gap-1.5">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-ink-2"
              >
                <path
                  d="M3 20 C 6 14, 10 9, 18 5"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 5 L 12 5"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 5 L 18 11"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={`${caveat.variable} font-[family-name:var(--font-caveat)] whitespace-nowrap text-[20px] font-semibold text-ink-2`}
              >
                Let&apos;s talk!
              </span>
            </div>
          </div>

          {/* Resume / contact CTAs, stacked next to the left card */}
          <div className="relative z-1 flex flex-col items-start gap-3">
            <Link
              href="/resume"
              className="text-sm font-semibold text-ink [text-shadow:0_1px_6px_rgba(0,0,0,0.55)] transition-colors duration-200 hover:text-gold"
            >
              View Resume
            </Link>
            <Link
              href="/contact"
              className="button-border-gradient hover:button-gradient-hover relative flex items-center gap-1.5 rounded-lg px-4.5 py-2 text-sm"
            >
              Get In Touch
              <svg
                className="mt-0.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4002 7.60002L9.2252 2.35002C9.0002 2.12502 8.6502 2.12502 8.4252 2.35002C8.2002 2.57502 8.2002 2.92502 8.4252 3.15002L12.6252 7.42502H2.0002C1.7002 7.42502 1.4502 7.67502 1.4502 7.97502C1.4502 8.27502 1.7002 8.55003 2.0002 8.55003H12.6752L8.4252 12.875C8.2002 13.1 8.2002 13.45 8.4252 13.675C8.5252 13.775 8.6752 13.825 8.8252 13.825C8.9752 13.825 9.1252 13.775 9.2252 13.65L14.4002 8.40002C14.6252 8.17502 14.6252 7.82503 14.4002 7.60002Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          <div className="flex justify-end gap-14 pt-2 pr-6 sm:gap-18 sm:pr-28">
            <div>
              <h4
                className={`${caveat.variable} font-[family-name:var(--font-caveat)] mb-4.5 text-2xl font-semibold text-ink-2 italic [text-shadow:0_1px_6px_rgba(0,0,0,0.55)]`}
              >
                Navigation
              </h4>
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="mb-3.5 block text-sm font-semibold text-ink transition-colors duration-200 [text-shadow:0_1px_6px_rgba(0,0,0,0.55)] hover:text-gold"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div>
              <h4
                className={`${caveat.variable} font-[family-name:var(--font-caveat)] mb-4.5 text-2xl font-semibold text-ink-2 italic [text-shadow:0_1px_6px_rgba(0,0,0,0.55)]`}
              >
                Connect
              </h4>
              {connectLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="mb-3.5 block text-sm font-semibold text-ink transition-colors duration-200 [text-shadow:0_1px_6px_rgba(0,0,0,0.55)] hover:text-gold"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Watermark />

      {/* Copyright, anchored at the very bottom of the footer */}
      <div className="relative z-10 mx-auto mt-6 max-w-[700px] px-4 text-center sm:px-8 xl:px-0">
        <p className="text-sm font-semibold text-ink-2 [text-shadow:0_1px_6px_rgba(0,0,0,0.55)]">
          &copy; {new Date().getFullYear()} Jason D. Weaver. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
