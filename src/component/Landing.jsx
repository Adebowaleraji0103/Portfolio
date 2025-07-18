import { scale } from "framer-motion";

const Landing = () => {
  return (
    <div>
      <header className=" shadow-gray-250 shadow-lg bg-transparent w-full px-[2rem] py-[7px] scroll-smooth mb-5">
        <h2 className="font-bold text-[#2ecc71] bg-[gray] px-5 py-2 w-fit rounded-2xl">
          Debo{" "}
        </h2>
      </header>

      <div className="flex flex-col gap-9 items-center bg-[#f5f5f5de] shadow py-10">
        <div className=" w-[250px] h-[300px] bg-[#4dd44d] rounded-full items-center flex justify-center">

          <div className="h-[95%] w-[95%]  ">
            <img
              className="w-full h-full rounded-full object-cover "
              src="./images/my profile pics.jpeg"
              alt=""
            />
          </div>
        </div>

       <div className="flex flex-col gap-1">
         <h2 className="text-[25px]">Hello I'm <span className="font-bold text-[28px]">Adebowale</span></h2>
         <h3 className="text-[22px] font-semibold">A Frontend Developer</h3>
        

       </div>

        <div className="flex gap-3 ">
          <button className="py-2 px-4 bg-[#4dd44d] text-white font-semibold rounded-[10px] cursor-pointer hover:bg-white border-2 border-[#4dd44d] hover:text-[#4dd44d]">
            View Profile
          </button>
          <button className="py-2 px-4 text-[#4dd44d] bg-white border-[#4dd44d] border-2 font-semibold rounded-[10px] cursor-pointer hover:bg-[#4dd44d] hover:text-white">
            Download Cv
          </button>
        </div>

      </div>
    </div>
  );
};

export default Landing;
