"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: (
      <Image src={LinkedinIcon} width={35} height={35} alt="Linkedin Icon" />
    ),
    path: "https://www.linkedin.com/in/mukesh-mehta-89b63b198/",
  },
  {
    title: <Image src={GithubIcon} width={35} height={35} alt="Github Icon" />,

    path: "https://github.com/MUKESHMEHTA2254",
  },
  {
    title: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-phone"
      >
        <path d="M23 1l-6 6"></path>
        <path d="M17 1l6 6"></path>
        <path d="M1 8l6-6"></path>
        <path d="M1 12l6-6"></path>
        <path d="M23 16l-6-6"></path>
        <path d="M17 23l6-6"></path>
        <path d="M1 16l6 6"></path>
        <path d="M1 20l6 6"></path>
      </svg>)
    ,

    path: "tel:9877494285",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 md:px-10">
      <div className="flex flex-wrap items-center justify-between py-2 px-2 md:py-3 mx-auto  ">
        <Link
          className=" text-2xl md:text-5xl text-white font-semibold underline decoration-purple-600/50"
          href={"/"}
        >
          Portfolio.
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks?.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};
export default Navbar;
