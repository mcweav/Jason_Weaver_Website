import Link from "next/link";
import { CONTACT } from "@/config/contact";
import FooterLinkList from "./FooterLinkList";
import { connectLinks, quickLinks } from "./linksData";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        {/* <!-- bg shapes --> */}
        <div className="absolute bottom-0 left-0 -z-1 flex w-full flex-col gap-3 opacity-50">
          <div className="footer-bg-gradient h-[1.24px] w-full"></div>
          <div className="footer-bg-gradient h-[2.47px] w-full"></div>
          <div className="footer-bg-gradient h-[3.71px] w-full"></div>
          <div className="footer-bg-gradient h-[4.99px] w-full"></div>
          <div className="footer-bg-gradient h-[6.19px] w-full"></div>
          <div className="footer-bg-gradient h-[7.42px] w-full"></div>
          <div className="footer-bg-gradient h-[8.66px] w-full"></div>
          <div className="footer-bg-gradient h-[9.90px] w-full"></div>
          <div className="footer-bg-gradient h-[13px] w-full"></div>
        </div>

        <div className="relative mx-auto max-w-[1170px] px-4 pt-17.5 sm:px-8 xl:px-0">
          <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

          <div className="flex flex-wrap justify-between">
            <div className="mb-10 w-full max-w-[520px]">
              <Link
                href="/"
                className="mb-8.5 inline-block text-xl font-extrabold text-white"
              >
                Jason D. Weaver
              </Link>

              <p className="mb-12 xl:w-4/5">
                UX &amp; Front-End Designer making the hard problems feel
                effortless.
              </p>

              <div className="flex items-center gap-5">
                <a
                  href={`mailto:${CONTACT.email}`}
                  aria-label="email"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z"
                      fill=""
                    />
                  </svg>
                </a>

                <a
                  href={CONTACT.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3ZM6.5 7.7A1.7 1.7 0 1 1 8.2 6a1.7 1.7 0 0 1-1.7 1.7ZM19 19h-3v-4.9c0-1.2-.4-2-1.5-2a1.6 1.6 0 0 0-1.5 1.1 2 2 0 0 0-.1.7V19h-3V9h3v1.3A3 3 0 0 1 15.6 9c2 0 3.4 1.3 3.4 4.1Z"
                      fill=""
                    />
                  </svg>
                </a>

                <a
                  href={CONTACT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_368_11839)">
                      <path
                        d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_368_11839">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>

              <p className="mt-5.5 font-medium">
                &copy; {new Date().getFullYear()} Jason D. Weaver. All rights
                reserved.
              </p>
            </div>

            <div className="w-full max-w-[400px]">
              <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
                <FooterLinkList title="Quick Links" links={quickLinks} />

                <FooterLinkList title="Connect" links={connectLinks} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
