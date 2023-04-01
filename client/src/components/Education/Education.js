import React from 'react'
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaGraduationCap } from "react-icons/fa"
const Education = () => {
    const data = [
        {
            name: "Ho Chi Minh City College of Information Technology",
            degree: "Ho Chi Minh City",
            year: "2021-2023",
            des: "It is a long established fact that reader will be distracted by readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter",

        },
        {
            name: "Don Duong High School",
            degree: "M.sc in Software Engineering",
            year: "2018-2021",
            des: "It is a long established fact that reader will be distracted by readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter",

        },
    ];
    const colors = [
        "#001CCE",
        "#f4a700",
    ];
    return (
        <div className='container education-section' id='education'>

            <div className='section-title'>
                <h5>Education</h5>
                <span className='line'></span>
            </div>

            <div className='timeline-section'>
                <VerticalTimeline lineColor="#FF1042">

                    {data.map((item, index) => (

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: colors[index], color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={item.year}
                            dateClassName="date-class"
                            iconStyle={{ background: colors[index], color: '#fff' }}
                            icon={<FaGraduationCap />}>

                            <h4 className="vertical-timeline-element-title">
                                {item.name}
                            </h4>
                            <h6 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                                {item.degree}
                            </h6>
                            <p>
                                {item.des}
                            </p>

                        </VerticalTimelineElement>

                    ))}

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Education