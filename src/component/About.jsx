const About = () => {
  return (
    <div className="section flex flex-col gap-5 justify-center items-center text-center w-[100%] px-[10px] py-[20px]">
      <h1 className="font-bold text-[20px] ">About Me</h1>

        <div className="w-full  border-4 border-[#2ecc71] object-cover ">
          <img className="w-full h-full" src="./images/Learn JavaScript skills from scratch for only $30.jpg" alt="" />
        </div>

        <p className="w-full ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          vitae deserunt est hic ratione reiciendis blanditiis rem aut harum
          explicabo quisquam iusto, saepe esse repellat. Iusto quaerat molestias
          magnam corrupti!
        </p>
      </div>
  );
};

export default About;
