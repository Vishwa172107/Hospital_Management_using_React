
const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got any Technical issue? Want to send us feedback about a beta feature? Let us know
        </p>

        <form onSubmit={handleSubmit}>


          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              required
              id="email"
              placeholder="Enter Email"
              className="form__input mt-1" 
            />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Enter Subject"
              className="form__input mt-1" 
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              required
              placeholder="Leave a Comment"
              className="form__input mt-1" 
            />
          </div>

          <button
            type="submit"
            className="btn rounded sm:w-fit"
          >
            Submit
          </button>

        </form>

      </div>
    </section>
  )
};

export default Contact;