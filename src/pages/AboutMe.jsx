import Header from "../components/Header";
import portfolioImage from '../assets/images/Anthony_Iacano_temporary_headshot.png';


// <!--Start of the About Page-->
export default function AboutMe() {
    return (
      <>
      <div className = "about" id="about">
        <div id="about-content">
          <h2>ABOUT ME</h2>
          <img id="headshot" src={portfolioImage} alt="a closeup picture of Anthony Iacano" />
          <p>
            Hello! My name is Anthony Iacano, and I am a web developer based out of Northeast Ohio! I am currently enrolled in a Full-Stack Web Development program through Case Western Reserve University
            to continue honing my skills so that I can be the best developer I can be. In the future, I intend to have a career that lets me collaboratively and creatively work with others to create some 
            incredible software and experiences!<br /><br />I hope that I might get the chance to work with you too!
          </p>
        </div>
      </div>
      </>
    );
  }
  
