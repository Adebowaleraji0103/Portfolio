const About = () => {
  return (
    <div
      className="flex flex-col gap-10 bg-white shadow-lg shadow-gray-300  justify-center items-center text-center w-[100%] px-[10px] py-[20px] "
      id="about"
    >
      <h1 className="font-bold text-[30px]  ">About Me</h1>

      <div className="flex flex-col px-8 grid-cols-1 sm:grid-cols-2 gap-5 items-center ">

        <div className="w-full h-[50%] border-7 border-[#2ecc71] object-cover ">
          <img
            className="w-full h-full "
            src="./images/mubarak.jpeg"
            alt="helo"
          />
        </div>

        <p className="w-full ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          vitae deserunt est hic ratione reiciendis blanditiis rem aut harum
          explicabo quisquam iusto, saepe esse repellat. Iusto quaerat molestias
          magnam corrupti!Lorem Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ab est consequatur minus quos perspiciatis soluta
          totam quaerat, quasi neque velit debitis sint animi fuga quis.
          Reprehenderit eius commodi alias quia!
        </p>
      </div>
    </div>
  );
};

export default About;
