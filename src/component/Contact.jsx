const Contact = () => {
  return (
    <div className="flex flex-col gap-10 bg-white shadow-lg shadow-gray-300  justify-center items-center text-center w-[100%] px-[10px] py-[20px] " id="contact">
      <h1>Get In Touch</h1>

      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
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
