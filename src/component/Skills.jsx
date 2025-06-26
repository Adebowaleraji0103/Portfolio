import SkillName from "./SkillsName";


const allskillsDetails = [
  {
    name: "HTML"
  },
   {
    name: "CSS"
  },
   {
    name: "JAVASCRIPT"
  },
   {
    name: "REACT"
  },
   {
    name: "TAILWIND"
  },
    {
    name: "FIGMA"
  },
    {
    name: "ADOBE XD"
  },
    {
    name: "CORELDRAW"
  },
    {
    name: "MICROSOFT WORD"
  },
]

const skills = () => {
  return (
    <div className="section mb-[5rem] py-[20px] px-[10px]">
      <h1 className="text-center font-bold text-[30px] pb-4">Skills</h1>

     <div className="grid grid-cols-2 gap-5 items-center  ">
         {allskillsDetails.map((skills)=> <SkillName allskillsDetails = {skills}/> )}
     </div>
    </div>
  );
};

export default skills;
