import React from 'react'
import './About.css'
import ProfilePic from '../../Image/abc.jpg';
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";


const About = () => {
    return (
        <div className='container about-section' id='about'>

            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-sm-12'>
                    <Fade left>
                        <div className='about-image'>
                            <img src={ProfilePic} alt="Profile Photo" />
                        </div>
                    </Fade>
                </div>
                <div className='col-xl-6 col-lg-6 col-sm-12'>
                    <div className='about-details'>
                        <Flip left>
                            <div className='about-title'>
                                <h5>Career objective</h5>
                                <span className='line'></span>
                            </div>
                        </Flip>
                        <Fade right>
                            <p>As a recent graduate with prior experience, my goal is to secure a challenging role that allows me to utilize and expand my skills. I aim to work for a renowned company that values growth and development and contributes to its objectives while seeking personal and professional advancement. I am dedicated to continuous learning and improvement in my field for long-term success and enthusiastic about potential opportunities to make a meaningful contribution to any organization.</p>
                        </Fade>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About