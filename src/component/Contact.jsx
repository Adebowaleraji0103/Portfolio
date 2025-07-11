

const Contact = () => {
  return (
    <div
      className="flex flex-col gap-10 w-[98%] pt-[20px] mt-[20px] shadow-2xl shadow-gray-400 lg:shadow px-[10px]  "
      id="contact"
    >
      <h1 className="text-center ">Get In Touch</h1>

      <form action="w-full">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" className="border w-[100%] p-0" />
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
