import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import logo from "../public/logo.webp";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="hidden items-center md:flex"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="h-9 w-9 text-hkbdarkmodetext" />
        </button>
      );
    } else {
      return (
        <button
          className="hidden items-center md:flex"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="h-9 w-9 " />
        </button>
      );
    }
  };

  const renderThemeChangerMobile = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="w-full flex items-center md:hidden"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="h-6 w-6 text-hkbdarkmodetext" />
        </button>
      );
    } else {
      return (
        <button
          className="w-full flex items-center md:hidden"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="h-6 w-6" />
        </button>
      );
    }
  };

  return (
    <header className="bg-hkbbg dark:bg-hkbdarkmodebg sticky top-0 z-50 flex items-center justify-between px-5">
      <div className="relative h-14 w-14 flex-shrink-0 cursor-pointer lg:h-16">
        <Link href="/">
          <Image objectFit="contain" src={logo} priority="true" layout="fill" />
        </Link>
      </div>

      <nav>
        <ul className="hidden space-x-6 text-lg md:flex">
          <Link href="/">
            <li className="link-underline link-underline-black cursor-pointer">
              <h2>Hem</h2>
            </li>
          </Link>
          <Link href="#about">
            <li className="link-underline link-underline-black cursor-pointer">
              <h2>Om HKB</h2>
            </li>
          </Link>
          <Link href="#service">
            <li className="link-underline link-underline-black cursor-pointer">
              <h2>Tjänster</h2>
            </li>
          </Link>
          <Link href="#contact">
            <li className="link-underline link-underline-black cursor-pointer">
              <h2>Kontakt</h2>
            </li>
          </Link>
        </ul>
      </nav>
      <button className="flex items-center md:hidden" onClick={toggle}>
        {isOpen ? (
          <MenuIcon className="h-6 w-6" />
        ) : (
          <XIcon className="h-6 w-6" />
        )}
      </button>
      <div className="h-9 w-9 hidden items-center md:flex">
        {renderThemeChanger()}
      </div>

      <div
        className={
          isOpen
            ? "hidden"
            : "shadow-md mx-5 absolute left-0 right-0 top-14  bg-hkbbg dark:bg-hkbdarkmodebg md:hidden"
        }
      >
        <div>
          <ul className="cursor-pointer">
            <Link href="/">
              <li
                className="py-2 hover:bg-hkbred hover:text-hkbdarkmodetext "
                onClick={toggle}
              >
                <h2 className="px-3">Hem</h2>
              </li>
            </Link>
            <Link href="#about">
              <li
                className="py-2 hover:bg-hkbred hover:text-hkbdarkmodetext "
                onClick={toggle}
              >
                <h2 className="px-3">Om HKB</h2>
              </li>
            </Link>
            <Link href="#service">
              <li
                className="py-2 hover:bg-hkbred hover:text-hkbdarkmodetext "
                onClick={toggle}
              >
                <h2 className="px-3">Tjänster</h2>
              </li>
            </Link>
            <Link href="#contact">
              <li
                className=" py-2 hover:bg-hkbred hover:text-hkbdarkmodetext "
                onClick={toggle}
              >
                <h2 className="px-3">Kontakt</h2>
              </li>
            </Link>
            <li
              className="py-2 px-3 hover:bg-hkbred hover:text-hkbdarkmodetext "
              onClick={toggle}
            >
              {renderThemeChangerMobile()}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
