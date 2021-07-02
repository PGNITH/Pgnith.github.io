import React from 'react'
import '../styles/About.scss'
import { StaticImage } from "gatsby-plugin-image"
function About() {
    return (
        <div className="AboutMe" style={{ height: "100vh" }}>
            <div className="heroImage">
                <StaticImage src="../images/hero.svg" alt="PC" />
            </div>
            <div className="Text">
                <h1>Hi, I’m Premashish. Nice to meet you.</h1><br /><br />
                <p>I am <b><span>Premashish Ghosh</span></b> .I am currently a student pursuing B.Tech from National Institute of Technology, Hamirpur, India. I am a Programmer Fairly Experienced in C++, Frontend Development with HTML, CSS, Javascript, and React. Currently, I am Learning Back-End Development with Mongo-DB, Express, React Js and Node.js (MERN Stack).
                </p>
            </div>
        </div>
    )
}

export default About
