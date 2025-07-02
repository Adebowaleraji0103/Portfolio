import { useState } from "react";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  function toggleNavbar() {
    setOpenNavbar((previousValue) => !previousValue);
  }
  return (
    <header className="fixed flex flex-col md:flex-row md:justify-between md:items-center top-0 right-0 left-0 shadow-gray-250 shadow-lg bg-white">
      <div className="flex justify-between items-center px-[2rem] py-[7px] scroll-smooth">
        <h2 className="font-bold text-[#2ecc71] bg-[gray] px-5 py-2 w-fit rounded-2xl">
          Debo
        </h2>

        <button
          onClick={toggleNavbar}
          className="flex flex-col gap-[3px] md:hidden"
        >
          <span className="w-[25px] h-[3px] inline-block bg-[#2ecc71]"></span>
          <span className="w-[25px] h-[3px] inline-block bg-[#2ecc71]"></span>
          <span className="w-[25px] h-[3px] inline-block bg-[#2ecc71]"></span>
        </button>
      </div>

      <nav
        className={`${
          openNavbar ? "max-h-[500px] " : "max-h-0"
        } transition-all duration-1000 ease-in overflow-hidden md:block md:max-h-full`}
      >
        <ul
          className={`flex flex-col md:flex-row px-10 gap-[25px] font-semibold text-[#2ecc71]`}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#certification">Certification</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;