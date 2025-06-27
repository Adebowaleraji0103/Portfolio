const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[2rem] py-[7px] shadow-gray-250 shadow-lg sticky top-0 scroll-smooth">
      <h2 className="font-bold text-[#2ecc71] bg-[#f5f5f5] px-5 py-2 w-fit rounded-2xl">
        {" "}
        Debo
      </h2>

      <div className="flex flex-col gap-[3px] lg:hidden">
        <span className="w-[25px] h-[3px] inline-block bg-[#2ecc71]"></span>
        <span className="w-[25px] h-[3px] inline-block bg-[#2ecc71]"></span>
        <span className="w-[25px] h-[3px] inline-block bg-[#2ecc71]"></span>
      </div>

      <ul className=" gap-[25px] font-semibold text-[#2ecc71] hidden lg:flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Certification">Certification</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
<div>
  <h1>Hello World</h1>
</div>;
