const SkillName = ({allskillsDetails}) => {
  return (
    <div>
      <p className="w-fit   bg-[#2ecc71] text-white font-semibold py-2 px-5 rounded-[10px]">
        {allskillsDetails.name}
      </p>
    </div>
  );
};

export default SkillName;
