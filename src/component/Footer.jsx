const Footer = () => {
    return ( 
        <div className="bg-[#2c3e50] w-full h-[14rem] mt-[20px] pt-[20px]">
            <h1>Footer</h1>



            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <p className="text-sm mb-4 md:mb-0">© 2025 Mubarak | Web Designer</p>
    <ul className="flex space-x-6 text-sm">
      <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
      <li><a href="#about" className="hover:text-blue-400">About</a></li>
      <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
    </ul>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </div>
        </div>
     );
}
 
export default Footer;