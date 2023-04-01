import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";


const Home = ({ theme, changeTheme }) => {
  return (
    <div className='container-fluid home ' id='home'>
      <div className='theme-change' onClick={changeTheme}>
        {theme === "light" ? (<p><BsFillMoonStarsFill size={30} /></p>) : (<p className='sun-them-icon'><BsFillSunFill size={30} /></p>)}
      </div>
      <div className='container home-content'>
        <Fade right>
          <h1>Hi I'm Manh Luan</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Software Developer",
                  "Web Developer",
                  "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
        </Fade>
        <Fade bottom>
          <div className="button-for-action">
              <Link to="contactsection"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}>
            <div className="hire-me-button" >
                Hire me
            </div>
                </Link>

            <div className='get-resume-button'>
              <a href='https://github.com/LeManhLuan' target="_blank" rel="noopener noreferrer">
                Get Resume
              </a>
            </div>
          </div>
        </Fade>

      </div>
    </div>
  )
}

export default Home