

const Contact = () => {
  return (
    <div
      className="flex flex-col m-auto gap-10 w-[98%] pt-[20px] mt-[20px] shadow-2xl shadow-gray-400 lg:shadow px-[10px] md:w-[50%]  "
      id="contact"
    >
      <h1 className="text-center font-bold text-[30px]">Get In Touch</h1>

      <form action="" className="w-full flex flex-col gap-8 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="nameInput">Name</label>
          <input id="nameInput" type= "text" className="border border-gray-300 py-2 w-[100%]" />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>

        <div>
          <textarea name="" id=""></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
