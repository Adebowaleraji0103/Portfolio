const Landing = () => {
  return (
    <div>
      <header className=" shadow-gray-250 shadow-lg bg-transparent w-full px-[2rem] py-[7px] scroll-smooth mb-5">
        <h2 className="font-bold text-[#2ecc71] bg-[gray] px-5 py-2 w-fit rounded-2xl">
          Debo{" "}
        </h2>
      </header>

      <div className="flex flex-col gap-9 items-center  h-[100vh] ">
        <div className=" w-[350px] h-[350px] bg-[#4dd44d] rounded-full overflow-hidden">
          <div className="p-5 rounded-full">
            <img src="./images/my profile pics.jpeg" alt="" className="w-full h-full rounded-full"/>
          </div>
        </div>

        <h2>Hello I'm Adebowale</h2>

        <div className="flex gap-3">
          <button className="py-2 px-4 bg-[#4dd44d] text-white font-semibold rounded-[10px]">
            View Profile
          </button>
          <button className="py-2 px-4 bg-[#4dd44d] text-white font-semibold rounded-[10px]">
            Download Cv
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
