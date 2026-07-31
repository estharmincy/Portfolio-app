import "./Education.css";

function Education() {

  const education = [

    {
      degree: "B.Tech Information Technology",
      college: "University College of Engineering Nagercoil",
      year: "2023 - 2027",
      score: "CGPA: 7.83"
    },

    {
      degree: "Higher Secondary Education (HSC)",
      college: "Government Higher Secondary School, Thittuvilai",
      year: "2021 - 2023",
      score: "506 / 600"
    },

    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      college: "Government Higher Secondary School, Thittuvilai",
      year: "2021",
      score: "Passed"
    }

  ];


  return (

    <section id="education">

      <h1>Education</h1>


      <div className="education-container">


        {
          education.map((item,index)=>(

            <div className="education-card" key={index}>


              <h2>
                {item.degree}
              </h2>


              <p>
                {item.college}
              </p>


              <div className="education-info">

                <span>
                  {item.year}
                </span>

                <span>
                  {item.score}
                </span>

              </div>


            </div>

          ))
        }


      </div>


    </section>

  );

}

export default Education;