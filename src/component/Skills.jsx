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

      {allskillsDetails.map((skills)=> <SkillName allskillsDetails = {skills}/> )}
    </div>
  );
};

export default skills;
