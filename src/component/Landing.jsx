const Landing = () => {
  return (
    <div>
      <header className="fixed shadow-gray-250 shadow-lg bg-white w-full px-[2rem] py-[7px] scroll-smooth">
          <h2 className="font-bold text-[#2ecc71] bg-[gray] px-5 py-2 w-fit rounded-2xl">Debo </h2>
      </header>

      <div className="flex flex-col gap-9 items-center bg-[#4dd44d] h-[100vh]">
        <div className=" w-[350px] h-[350px] bg-amber-50 rounded-full "> </div>

        <h2>Hello I'm Adebowale</h2>

        <div className="flex gap-3">
          <button className="py-2 px-4 bg-amber-50 text-black font-semibold rounded-[10px]">
            View Profile
          </button>
          <button className="py-2 px-4 bg-amber-50 text-black font-semibold rounded-[10px]">
            Download Cv
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
