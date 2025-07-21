const Landing = () => {
  return (
    <div className="bg-[#f5f5f5de] w-full h-[100vh]">
      <header className=" shadow-gray-250 shadow-lg bg-transparent w-full px-[2rem] py-[7px] scroll-smooth mb-5">
        <h2 className="font-bold text-[#2ecc71] bg-[gray] px-5 py-2 w-fit rounded-2xl">
          Debo{" "}
        </h2>
      </header>

      <div className="flex flex-col  justify-center gap-9 items-center shadow py-10 md:flex md:flex-row ">
        <div className=" w-[250px] h-[250px] bg-[#2ecc71] rounded-full items-center flex justify-center">
          <div className="h-[95%] w-[95%]  ">
            <img
              className="w-full h-full rounded-full object-cover "
              src="./images/my profile pics.jpeg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-1">
            <h2 className="text-[25px]">
              Hello I'm <span className="font-bold text-[28px]">Adebowale</span>
            </h2>
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
    </div>
  );
};

export default Landing;
