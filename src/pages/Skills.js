import React from 'react'
import '../styles/Skills.scss'
import { StaticImage } from "gatsby-plugin-image"
function Skills() {
    const style = {

        overflowX: "visible"
    };
    return (
        <div style={{ minHeight: "100vh", marginTop: "-40vh", marginBottom: "30vh", overflowX: "visible" }}>

            <div className="SkillRow" style={style}  >
                <h1 id="mobile">Skills</h1>
                <div className="skill">
                    <img src="https://img.icons8.com/ios/50/000000/source-code.png" />
                    <br />
                    <h2>Frontend Development</h2>
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
                        <li>Bootstrap <br /><StaticImage src="../images/Bootstrap.svg" placeholder="blurred"></StaticImage></li>

                    </ul>

                </div>
                <div className="skill">
                    <img src="https://img.icons8.com/ios-filled/50/000000/goto.png" />
                    <h2>Backend Development</h2>  <br />
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
                    <p> I Believe that In order to be irreplaceable, one must always be different. Generally, the craft of programming is the factoring of a set of requirements into a a set of functions and data structures.</p>
                    <br /><br /><br />
                    <h3>Skills</h3>
                    <h2 style={{ fontSize: "1.2rem", fontWeight: "lighter", color: "#3a3a3a" }}>Programming:</h2>
                    <ul className="set">

                        <li >C++ <br /><StaticImage src="../images/C++.svg" placeholder="blurred"></StaticImage></li>
                        <li>Python <br /><StaticImage src="../images/PYTHON.svg" placeholder="blurred"></StaticImage></li>
                        <li>C <br /><StaticImage src="../images/c.png" placeholder="blurred" height={42}></StaticImage></li>
                        <li>Data Structures<br /><StaticImage src="../images/ds.svg" placeholder="blurred" height={42}></StaticImage></li>
                        {/* <li>Sass <br /><StaticImage src="../images/SASS.svg" placeholder="blurred"></StaticImage></li>
                        <li>React <br /><StaticImage src="../images/REACT.svg" placeholder="blurred"></StaticImage></li> */}

                    </ul>
                    <h2 style={{ fontSize: "1.2rem", fontWeight: "lighter", color: "#3a3a3a" }}>Tools and Technologies :</h2>
                    <ul className="set">

                        <li>Markdown <br /><StaticImage src="../images/MD.png" placeholder="blurred" height={42}></StaticImage></li>
                        <li>Sphinx <br /><StaticImage src="../images/PYTHON.svg" placeholder="blurred"></StaticImage></li>
                        <li>Restructured <br /> Text <br /><StaticImage src="../images/RST.SVG" placeholder="blurred" height={42}></StaticImage></li>
                        <li>MkDocs<br /><StaticImage src="../images/MKDOCS.svg" placeholder="blurred" height={42}></StaticImage></li>
                        <li>Figma <br /><StaticImage src="../images/FIGMA.SVG" placeholder="blurred" height={42}></StaticImage></li>
                        <li>Git <br /><StaticImage src="../images/git.svg" placeholder="blurred" height={42}></StaticImage></li>
                        <li>Manjaro <br /><StaticImage src="../images/Manjaro.svg" placeholder="blurred" height={42}></StaticImage></li>
                        <li>LaTeX <br /><StaticImage src="../images/Latex.svg" placeholder="blurred" height={42}></StaticImage></li>
                        {/* <li>Sass <br /><StaticImage src="../images/SASS.svg" placeholder="blurred"></StaticImage></li>
<li>React <br /><StaticImage src="../images/REACT.svg" placeholder="blurred"></StaticImage></li> */}

                    </ul>

                </div>
            </div>

        </div >
    )
}

export default Skills
