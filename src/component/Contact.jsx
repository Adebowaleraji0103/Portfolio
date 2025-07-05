import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center m-auto gap-10 w-[90%] pt-[20px] mt-[20px] shadow-2xl shadow-gray-400 lg:shadow px-[10px]  mb-5  "
      id="contact"
    >
      <motion.h1
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:2,duration:7}}
      
      >Get In Touch</motion.h1>

      <form action="w-full">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" className="border w-[90%]" />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>

        <div>
          <textarea name="" id=""></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
