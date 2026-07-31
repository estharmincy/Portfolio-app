import "./Projects.css";

function Projects() {

  const projects = [

    {
      title: "ElectroMart",

      description:
        "A full-stack e-commerce web application developed for online product browsing, cart management and order handling.",

      tech:
        "React.js | Node.js | Express.js | MongoDB",

      features:
        "Product Management | Shopping Cart | User Authentication | Order Management",

      github:
        "https://github.com/estharmincy/ElectroMart-app",

      
    },


    {
      title: "Daily Quotes App",

      description:
        "A mobile application UI designed to display daily motivational quotes with a clean and user-friendly interface.",

      tech:
        "Figma | UI/UX Design",

      features:
        "Mobile UI Design | User-friendly Layout | Creative Interface"
    }

  ];


  return (

    <section id="projects">


      <h1>
        Projects
      </h1>


      <div className="projects-container">


        {
          projects.map((project,index)=>(


            <div className="project-card" key={index}>


              <h2>
                {project.title}
              </h2>



              <p>
                {project.description}
              </p>



              <h3>
                Technologies
              </h3>


              <span>
                {project.tech}
              </span>



              <h3>
                Features
              </h3>



              <p>
                {project.features}
              </p>



              {
                (project.github || project.demo) && (

                  <div className="project-buttons">


                    {
                      project.github && (

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>

                      )
                    }



                    {
                      project.demo && (

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>

                      )
                    }


                  </div>

                )
              }


            </div>


          ))
        }


      </div>


    </section>

  );

}

export default Projects;