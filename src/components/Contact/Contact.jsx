import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>
            I'm actively seeking internship and entry-level software
            developer opportunities. Feel free to connect with me.
          </p>

          <div className="contact-details">

            <p>
              📧 Email:{" "}
              <a href="mailto:estharmincy@gmail.com">
                estharmincy@gmail.com
              </a>
            </p>

            <p>
              💻 GitHub:{" "}
              <a
                href="https://github.com/estharmincy"
                target="_blank"
                rel="noreferrer"
              >
                github.com/estharmincy
              </a>
            </p>

            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/estharmincyp/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/estharmincyp
              </a>
            </p>

            <p>
              📍 Location: Nagercoil, Tamil Nadu, India
            </p>

          </div>
        </div>

        <form className="contact-form">

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;