"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useChatBot } from "../ChatBot/ChatBotContext";
import DropDown from "./DropDown";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { isOpen: chatOpen, toggle: toggleChat } = useChatBot();

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-1000 w-full ${
          stickyMenu
            ? "border-b border-ink/8 bg-canvas/85 py-4! shadow-sm backdrop-blur-lg transition duration-100 lg:py-0!"
            : "py-7 lg:py-0"
        }`}
      >
        <div className="relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0">
          <div className="flex w-full items-center justify-between lg:w-1/4">
            <Link href="/" className="flex items-center gap-2">
              <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/hero/Photo-2.png"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
              </span>
              <span className="text-lg font-extrabold text-ink">
                Jason D. Weaver
              </span>
            </Link>

            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="block lg:hidden"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-ink delay-0 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-ink delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? "delay-400 w-full!" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-ink delay-200 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-ink delay-300 duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-0" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-ink duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-3/4 ${
              navigationOpen
                ? "visible! relative mt-4 h-auto! max-h-[400px] overflow-y-scroll rounded-md bg-surface p-7.5 shadow-lg"
                : ""
            }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2">
                {menuData.map((menuItem, key) => (
                  <li
                    key={key}
                    className={`nav__menu group relative ${
                      stickyMenu ? "lg:py-4" : "lg:py-7"
                    }`}
                  >
                    {menuItem.submenu ? (
                      <>
                        <DropDown menuItem={menuItem} />
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        className={`hover:nav-gradient relative border border-transparent px-4 py-1.5 text-sm hover:text-ink ${
                          pathUrl === menuItem.path
                            ? "nav-gradient text-ink"
                            : "text-ink-2"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-7 flex items-center gap-6 lg:mt-0">
              <button
                type="button"
                onClick={toggleChat}
                aria-label={
                  chatOpen ? "Close chat" : "Chat with Jason's AI assistant"
                }
                className="button-border-gradient hover:button-gradient-hover relative flex items-center gap-1.5 rounded-lg px-4.5 py-2 text-sm"
              >
                {chatOpen ? "Close Chat" : "Chat with AI"}
                <svg
                  className="mt-0.5"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
