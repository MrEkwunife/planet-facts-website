"use client";

import { useState } from "react";
import NavLinks from "./NavLinks";
import { FaBars, FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <NavLinks className="hidden sm:flex sm:flex-wrap text-base sm:justify-center md:justify-between lg:items-center gap-8 md:gap-6 font-[leagueSpartan]" />
      <button onClick={handleNavToggle} className="cursor-pointer sm:hidden">
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>
      {isOpen && (
        <NavLinks
          className={`${
            isOpen ? "absolute left-0 right-0 top-20" : ""
          } text-base sm:hidden`}
        />
      )}
    </nav>
  );
};

export default Nav;
