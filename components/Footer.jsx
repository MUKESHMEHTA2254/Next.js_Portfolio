import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: (
        <Image src={LinkedinIcon} width={35} height={35} alt="Linkedin Icon" />
      ),
      path: "https://www.linkedin.com/in/mukesh-mehta-89b63b198",
    },
    {
      title: (
        <Image src={GithubIcon} width={35} height={35} alt="Github Icon" />
      ),

      path: "https://github.com/MUKESHMEHTA2254",
    },
    {
      title: (
        <Image
          src="/images/projects/phone.png"
          width={30}
          height={30}
          alt="Linkedin Icon"
        />
      ),
      path: "tel:9877494285",
    },
    {
      title: (
        <Image
          src="/images/projects/mail.png"
          width={30}
          height={30}
          alt="Linkedin Icon"
        />
      ),
      path: "mailto:mehtasagar437@gmail.com",
    },
  ];
  return (
    <footer className="container p-12 grid grid-cols-8 footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className=" flex justify-between sm:justify-evenly">
        <span>PORTFOLIO.</span>
      </div>
      <div className="col-span-6 sm:col-span-6">
        <ul className="flex justify-center gap-14   ">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <NavLink title={link.title} href={link.path} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
