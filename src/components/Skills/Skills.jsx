import "./Skills.css";

function Skills() {

  const skillData = [

    {
      title: "Frontend Development",
      skills: "HTML | CSS | JavaScript | React.js"
    },

    {
      title: "Backend Development",
      skills: "Node.js | Express.js | REST API"
    },

    {
      title: "Database",
      skills: "MongoDB | Firebase "
    },

    {
      title: "Programming Languages",
      skills: "Java | Python | C"
    },

    {
      title: "Mobile Development",
      skills: "Flutter | Firebase Integration"
    },

    {
      title: "AI & Data Technologies",
      skills: "Artificial Intelligence Basics | Machine Learning Concepts | Data Analysis"
    },

    {
      title: "Tools & Platforms",
      skills: "Git | GitHub | VS Code | Postman"
    },

    {
      title: "UI/UX Design",
      skills: "Figma | Responsive Design | User Interface Design"
    }

  ];


  return (

    <section id="skills">

      <h1>Technical Skills</h1>


      <div className="skills-container">


        {
          skillData.map((item,index)=>(

            <div className="skill-card" key={index}>

              <h2>
                {item.title}
              </h2>


              <p>
                {item.skills}
              </p>


            </div>

          ))
        }


      </div>


    </section>

  );

}

export default Skills;