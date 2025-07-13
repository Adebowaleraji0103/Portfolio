import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 items-center justify-center text-white font-semibold bg-[#2c3e50] w-full h-[10rem] mt-[20px] pt-[20px] mb-50">
      <h2>© 2025 Adebowale | Web Designer</h2>
      
      <ul className="flex gap-10">
        <a href="https://web.whatsapp.com/"><li><FaWhatsapp /></li></a>
        <a href="https://github.com/Adebowaleraji0103/"><li><FaGithub /></li></a>
        <a href="https://mail.google.com/mail/u/0/#inbox"><li><SiGmail /></li></a>
       <a href=""> <li><FaLinkedin /></li></a>
      </ul>

    </footer>
  );
};

export default Footer;
