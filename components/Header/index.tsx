"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkMobile = () => {
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-99999 w-full py-7 ${stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
          }`}
      >
        <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
          <div className="flex w-full items-center justify-between xl:w-1/4">
            <button
              aria-label="hamburger Toggler"
              className="block xl:hidden"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="absolute right-0 block h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"
                      }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                      }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"
                      }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                      }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                      }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>
          <div
            className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
              "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
              }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                {menuData.map((menuItem, key) => (
                  <li key={key} className={menuItem.submenu && "group relative"}>
                    {menuItem.submenu ? (
                      <>
                        <ul
                          className={`dropdown ${dropdownToggler ? "flex" : ""
                            }`}
                        >
                          {menuItem.submenu.map((item, key) => (
                            <li key={key} className="hover:text-primary">
                              <Link href={item.path || "#"}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        className={
                          pathUrl === menuItem.path
                            ? "text-purple-500 font-semibold"
                            : "hover:text-purple-500 transition-colors duration-300"
                        }
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Render "Sign In" and "Get Started" buttons only on desktop */}
            {!isMobile && (
              <div className="mt-7 flex items-center gap-6 xl:mt-0">
                {/* Sign In Button */}
                <Link
                  href="/auth/signin"
                  className="flex items-center justify-center rounded-full border border-purple-500 bg-white px-7.5 py-2.5 text-regular text-purple-500 shadow-md duration-300 ease-in-out hover:bg-purple-100 hover:text-purple-700"
                >
                  Iniciar sesión
                </Link>

                {/* Get Started Button */}
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center justify-center rounded-full bg-purple-500 px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-purple-700"
                >
                  ¡Da el Primer Paso!
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Floating Buttons for Mobile */}
      {isMobile && (
        <>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/1234567890?text=Hi%2C%20I%E2%80%99d%20like%20to%20get%20started%21%20Here%E2%80%99s%20my%20information%3A%0AFull%20Name%3A%0AEmail%20Address%3A%0APhone%20Number%3A%0ASubject%3A%0AMessage%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-4 right-6 z-99999 flex items-center justify-center rounded-full bg-purple-500 px-4 py-2 text-sm font-medium text-white shadow-lg duration-300 ease-in-out hover:bg-purple-700"
          >
            WhatsApp
          </a>

          {/* Sign In Button */}
          <a
            href="/auth/signin"
            className="fixed top-4 right-36 z-99999 flex items-center justify-center rounded-full border border-purple-500 bg-white px-4 py-2 text-sm font-medium text-purple-500 shadow-lg duration-300 ease-in-out hover:bg-purple-100 hover:text-purple-700"
          >
            Iniciar sesión
          </a>
        </>
      )}
    </>
  );
};

export default Header;
