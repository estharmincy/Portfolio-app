import "./Home.css";
import resume from "../../assets/ESTHAR MINCY P.pdf";
import profile from "../../assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

function Home() {

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Web Developer",
    "IT Student"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);


  useEffect(() => {

    let i = 0;

    const typing = setInterval(() => {

      setText(roles[index].slice(0, i));

      i++;

      if (i > roles[index].length) {

        clearInterval(typing);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1200);

      }

    }, 100);


    return () => clearInterval(typing);

  }, [index]);


  return (
    <section id="home">

      <div className="home-container">


        <div className="home-content">


          <h1>
            Hi, I'm <span>Esthar Mincy</span>
          </h1>


          <h2>
            {text}
            <span className="cursor">|</span>
          </h2>


          <p>
            I am a Final Year Information Technology student passionate about
            building modern web and mobile applications. I enjoy creating
            clean UI designs and solving real-world problems using technology.
          </p>
<div className="home-buttons">

  <a href="#projects">
    <button>
      View Projects
    </button>
  </a>


  <a href="#contact">
    <button className="contact-btn">
      Contact Me
    </button>
  </a>


  <a href={resume} download>
    <button className="resume-btn">
      Download Resume
    </button>
  </a>

</div>


          <div className="social-icons">


            <a 
              href="https://github.com/estharmincy"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>



            <a 
              href="https://www.linkedin.com/in/estharmincyp/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>



            <a 
              href="mailto:estharmincy@gmail.com"
            >
              <FaEnvelope />
            </a>


          </div>


        </div>



        <div className="home-image">

          <div className="profile-circle">

  <img 
    src={profile}
    alt="Esthar Mincy"
  />

</div>
        </div>



      </div>


    </section>
  );
}


export default Home;