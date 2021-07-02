import React from 'react'
import '../styles/Skills.scss'
import { StaticImage } from "gatsby-plugin-image"
function Skills() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <div className="SkillRow" >
                <div className="skill">
                    <img src="https://img.icons8.com/ios/50/000000/source-code.png" />
                    <br />
                    <h2>Front-End Development</h2>
                    <br />


                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                        I like the challenges that I face during development ,the challenges act as a Speed-Booster to my skills .
                    </p> <br />
                    <br />
                    <h3>Skills</h3>
                    <ul className="set">
                        <li >HTML <br /><StaticImage src="../images/HTML.svg" placeholder="blurred"></StaticImage></li>
                        <li>CSS <br /><StaticImage src="../images/css.svg" placeholder="blurred"></StaticImage></li>
                        <li>Javascript <br /><StaticImage src="../images/js.svg" placeholder="blurred"></StaticImage></li>
                        <li>Sass <br /><StaticImage src="../images/SASS.svg" placeholder="blurred"></StaticImage></li>
                        <li>React <br /><StaticImage src="../images/REACT.svg" placeholder="blurred"></StaticImage></li>

                    </ul>

                </div>
                <div className="skill">
                    <img src="https://img.icons8.com/ios-filled/50/000000/goto.png" />
                    <h2>Back-End Development</h2>  <br />
                    {/* A Body without Soul is nothing.The same is the case with Backend and Front-End .*/}
                    <p> I love writing Back-end Code as it helps in bringing ideas to reality come true.</p>
                    <br /><br /><br />
                    <h3>Skills (Still Learning)</h3>
                    <ul className="set">
                        <li >NodeJS <br /><StaticImage src="../images/NODE.svg" placeholder="blurred" height={70} ></StaticImage ></li>
                        <li>MongoDB<br /><StaticImage src="../images/MONGO.svg" placeholder="blurred"></StaticImage></li>
                        <li>Express <br /><StaticImage src="../images/EXPRESS.svg" placeholder="blurred"></StaticImage></li>
                        {/* <li>Sass <br /><StaticImage src="../images/SASS.svg" placeholder="blurred"></StaticImage></li>
                        <li>React <br /><StaticImage src="../images/REACT.svg" placeholder="blurred"></StaticImage></li> */}

                    </ul>



                </div>
                <div className="skill">
                    <img src="https://img.icons8.com/ios/50/000000/computer-chat--v1.png" />
                    <h2>Tools & Programming Languages</h2>  <br />
                    <p> In order to be irreplaceable, one must always be different.</p>
                    <br /><br /><br />
                    <h3>Skills</h3>
                    <ul className="set">
                        <li >C++ <br /><StaticImage src="../images/C++.svg" placeholder="blurred"></StaticImage></li>
                        <li>Python <br /><StaticImage src="../images/PYTHON.svg" placeholder="blurred"></StaticImage></li>
                        <li>C <br /><StaticImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Eo_circle_purple_white_letter-c.svg/2048px-Eo_circle_purple_white_letter-c.svg.png" placeholder="blurred" height={42}></StaticImage></li>
                        {/* <li>Sass <br /><StaticImage src="../images/SASS.svg" placeholder="blurred"></StaticImage></li>
                        <li>React <br /><StaticImage src="../images/REACT.svg" placeholder="blurred"></StaticImage></li> */}

                    </ul>


                </div>
            </div>

        </div >
    )
}

export default Skills
