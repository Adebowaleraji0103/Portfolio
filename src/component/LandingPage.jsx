import { MdLightMode } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10">
      <header className="flex justify-between items-center shadow-gray-250 shadow-lg bg-transparent w-full px-[2rem] py-[7px] scroll-smooth">
        <h2 className="font-bold text-[#2ecc71] bg-[gray] px-5 py-2 w-fit rounded-2xl">
          Debo{" "}
        </h2>
        <MdLightMode className="size-[25px] cursor-pointer" />
      </header>
      {/* .............header............................. */}

      <div className="flex flex-col justify-center gap-9 items-center py-5 md:my-auto md:flex md:flex-row ">
          <div className="w-[250px] h-[250px] border-[7px] border-[#2ecc71] rounded-full  ">
            <img className="w-full h-full rounded-full object-cover "src="./images/my profile pics.jpeg"alt=""/>
          </div>

         <div className="flex flex-col gap-4 ">
          <div>
            <h2 className="text-[25px] md:text-[4rem]"> Hello I'm <span className="font-semibold text-[28px] md:text-[3rem]">Adebowale</span> </h2>
            <h3 className="text-[22px] font-semibold">A Frontend Developer</h3>
          </div>

          <div className="flex gap-3 ">
            <button className="py-2 px-4 bg-[#2ecc71] text-white font-semibold rounded-[10px] cursor-pointer hover:bg-white border-2 border-[#4dd44d] hover:text-[#4dd44d]">
              View Profile
            </button>
            <button className="py-2 px-4 text-[#2ecc71] bg-white border-[#2ecc71] border-2 font-semibold rounded-[10px] cursor-pointer hover:bg-[#4dd44d] hover:text-white">
              Download Cv
            </button>
          </div>
        </div>
      </div> 
    {/* ...........foooter..........             */}
           <footer className="flex flex-col gap-4 text-center items-center font-semibold bg-[#2c3e50] py-10 text-white">
           <h2>© 2025 Adebowale | Web Designer</h2>
                 <ul className="flex gap-5">
                   {/* <a href="https://web.whatsapp.com/"><li><FaWhatsapp /></li></a> */}
                   <a href="https://wa.me/<+2349156522875>" target="blank"><FaWhatsapp /></a>
                   <li><a href="https://github.com/Adebowaleraji0103/"><FaGithub /> </a></li>
                   <a href="https://mailto:mubarakadebowale1@gmail.com"><li><SiGmail /></li></a>
                  <a href="https://linkedin.com/in/raji-mubarak-04a93726a"> <li><FaLinkedin /></li></a>
                 </ul>
                
           
           </footer>
    </div>
  );
};

export default Landing;
