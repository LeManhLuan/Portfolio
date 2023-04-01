import React from 'react';
import "./Contact.css";
import Fade from "react-reveal/Fade";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RiSendPlaneFill } from "react-icons/ri"
const Contact = () => {
    const API = "http://localhost:8080/sendmail";

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [jobtype, setJobtype] = useState();
    const [message, setMessage] = useState();

    const sendEmailInfo = () => {
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                jobtype,
                message,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.error) {
                    toast.error(result.error, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                } else {
                    toast.success("Your email has been sent!", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                setName("");
                setEmail("");
                setJobtype("");
                setMessage("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='container contact-section' id='contactsection'>
            <div className='row'>
                <Fade bottom>
                    <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>

                        <div className="contact-form-iamge">
                            <img src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrghb&w=1260&h=750&dpr=2"
                                alt="contact form image"
                            />
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
                        <div className='contact-form-desgin'>
                            <div className='text-center'>
                                <h5>Contact Me</h5>

                            </div>
                            <form>
                                <div className='contact-form'>
                                    <label className='form-lebel'>Name</label>
                                    <input type="text" className='form-control'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    ></input>
                                </div>
                                <div className='contact-form'>
                                    <label className='form-lebel'>E-mail</label>
                                    <input type="text" className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>
                                <div className='contact-form'>
                                    <label className='form-lebel'>Job Types</label>
                                    <select className='custom-select-tag'
                                        value={jobtype}
                                        onChange={(e) => setJobtype(e.target.value)}>
                                        <option>Full-time</option>
                                        <option>Working Student</option>
                                        <option>Part-time</option>
                                        <option>Contact</option>
                                    </select>
                                </div>
                                <div className='contact-form'>
                                    <label className='form-lebel'>Message</label>
                                    <textarea rows="3" type="text" className='form-control'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)} />
                                </div>

                                <div className='button-submit'>
                                    <p><a href="mailto:lemanhluan733@gmail.com">
                                        <p>send <RiSendPlaneFill size={20} /></p>
                                    </a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade>
            </div>

            <ToastContainer autoClose={3000} />
        </div>
    );
};

export default Contact