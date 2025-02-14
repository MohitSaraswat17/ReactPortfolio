import logo from "../projectstuff/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import React from "react";
const NavBar = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/MohitSaraswat17", "_blank", "noopener,noreferrer");
  };
  return (
    <nav className=" mb-20  flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="logo"
          className="object-contain md:object-scale-down h-12  mx-2 w-10"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="cursor-pointer" />

        <FaGithub className="cursor-pointer" onClick={handleGitHubClick}/>

        <FaSquareXTwitter className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
