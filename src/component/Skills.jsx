
const skills = () => {
  return (
    <div className="section mb-[5rem] py-[20px] px-[10px] flex flex-col justify-center items-center text-center" id="skills">
      <h1 className="text-center font-bold text-[30px] pb-4">Skills</h1>

      <div className="w-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 gap-x-14 justify-center items-center text-center">
        <div className="w-[7rem] bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
          <h2>HTML</h2>
        </div>

        <div className="w-[7rem] bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
          <h2>CSS</h2>
        </div>

        <div className="w-[7rem]  bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
          <h2>Javascript</h2>
        </div>

        <div className="w-[7rem]  bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
          <h2>React</h2>
        </div>

        <div className="w-[7rem]  bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
          <h2>Tailwind</h2>
        </div>

        <div className="w-[7rem]  bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
          <h2>Github</h2>
        </div>


        <div className="w-[7rem]  bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
          <h2>Figma</h2>
        </div>

         <div className="w-[7rem]  bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
          <h2>Adobe xd</h2>
        </div>

         <div className="w-[7rem]  bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
          <h2>Coreldraw</h2>
        </div>

         <div className="w-[10rem]  bg-[#2ecc71] text-white font-semibold py-2 px-2 rounded-[10px]">
          <h2>Microsoft office</h2>
        </div>
      </div>
    </div>
  );
};

export default skills;


  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 items-center justify-between text-center ">
    {allskillsDetails.map((skills)=> <SkillName allskillsDetails = {skills}/> )}
</div> 

