import "./Contact.css";

function Contact() {

  return (

    <section id="contact">

      <h1>Contact Me</h1>


      <div className="contact-container">


        <div className="contact-info">

          <h2>Let's Connect</h2>

          <p>
            I'm open to internship opportunities,
            collaborations and exciting projects.
          </p>


          <div className="contact-details">

            <p>
              📧 Email: estharmincy@gmail.com
            </p>

            <p>
              📍 Location: Nagercoil, Tamil Nadu
            </p>

            <p>
              💻 GitHub: github.com/estharmincy
            </p>

          </div>


        </div>



        <form className="contact-form">


          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
          />


          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
          />


          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
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