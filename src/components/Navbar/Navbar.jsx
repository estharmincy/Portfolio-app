import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <nav className="navbar">


      <a href="#home" className="logo">
        &lt;EM /&gt;
      </a>



      <div 
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >

        {open ? <FaTimes /> : <FaBars />}

      </div>



      <ul className={open ? "nav-links active" : "nav-links"}>


        <li>
          <a href="#home">Home</a>
        </li>


        <li>
          <a href="#about">About</a>
        </li>


        <li>
          <a href="#education">Education</a>
        </li>


        <li>
          <a href="#skills">Skills</a>
        </li>


        <li>
          <a href="#projects">Projects</a>
        </li>


        <li>
          <a href="#contact">Contact</a>
        </li>


      </ul>


    </nav>

  );
}


export default Navbar;