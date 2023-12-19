import "./FormSupport.css";

function FormSupport({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <form className="contactForm" action="" onSubmit={handleSubmit}>
      <div className="formUserName">
        <label htmlFor="name">Enter your name :</label>
        <input type="text" name="name" id="name" placeholder="Your name" />
      </div>
      <div className="formUserEmail">
        <label htmlFor="email">Enter your email :</label>
        <input type="text" name="email" id="email" placeholder="Your email" />
      </div>
      <div className="formUserMessage">
        <label htmlFor="userMessage">Enter your message :</label>
        <textarea
          name="userMessage"
          id="userMessage"
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
      </div>
      <div className="submitButton">
        <input type="submit" value="Submit" id="submit" />
      </div>
    </form>
  );
}

export default FormSupport;
