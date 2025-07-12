import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] w-full h-[14rem] mt-[20px] pt-[20px] mb-50">
      <h2>© 2025 Adebowale | Web Designer</h2>
      
      <ul>
        <li><FaWhatsapp /></li>
        <li><FaGithub /></li>
        <li><SiGmail /></li>
        <li><FaLinkedin /></li>
      </ul>

    </footer>
  );
};

export default Footer;
