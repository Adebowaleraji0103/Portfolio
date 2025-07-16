import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[#f5f5f5de] h-[80%] flex flex-col gap-4 items-center justify-center py-[3rem] mt-4 rounded-[10px]">
      <div className="h-[10rem] w-[9.5rem]  ">
        <img
          className="w-full h-full rounded-full object-cover border-[#2ecc71] border-4"
          src="./images/my profile pics.jpeg"
          alt=""
        />
      </div>

      <div className="font-bold text-[30px] text-center items-center">
        <p>
          Hi, I'm{" "}
          <motion.span
            className="text-[#2ecc71]"
            initial={{ opacity: 0, }}
            animate={{ opacity: 2,  }}
            transition={{ delay:1, duration: 3 }}
          >
            Adebowale
          </motion.span>
        </p>
        <h2 className="font-normal text-[16px]">
          A Frontend Developer and UI/UX Designer
        </h2>
      </div>

      <button className="py-3 px-10 rounded-[10px] bg-[#2ecc71] text-white font-semibold  hover:bg-[green] duration-1000 mt-4 cursor-pointer">
        Get In Touch
      </button>
    </div>
  );
};

export default Hero;
