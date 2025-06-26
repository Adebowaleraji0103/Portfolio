const SkillName = ({allskillsDetails}) => {
  return (
    <div>
      <p className="w-fit bg-[#2ecc71] text-white font-semibold py-3 px-7 rounded-[10px]">
        {allskillsDetails.name}
      </p>
    </div>
  );
};

export default SkillName;
