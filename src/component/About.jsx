import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="flex flex-col gap-10 bg-white shadow-lg shadow-gray-300  justify-center items-center text-center w-[100%] px-[10px] py-[20px] "
      id="about"
    >
      <motion.h1 className="font-bold text-[30px]"   
      initial={{x:40}}
      animate= {{x:0,}}
      transition={{duration:5, scaleX:4, scale:3 }}

      >About Me</motion.h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 items-center px-[20px]">
        <div className="w-full  border-7 border-[#2ecc71] bor object-cover ">
          <img
            className="w-full h-full"
            src="./images/mubarak.jpeg"
            alt="helo"
          />
        </div>

        <p className="w-full ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          vitae deserunt est hic ratione reiciendis blanditiis rem aut harum
          explicabo quisquam iusto, saepe esse repellat. Iusto quaerat molestias
          magnam corrupti!Lorem Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. 
        </p>
      </div>
    </div>
  );
};

export default About;
