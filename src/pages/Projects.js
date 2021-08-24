import React from 'react'
import '../styles/Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/fontawesome-free-solid'
import { faGithub, faLinkedinIn, faMailchimp } from "@fortawesome/free-brands-svg-icons"
import { StaticImage } from 'gatsby-plugin-image'
function Projects() {
    return (
        <div className="projects" style={{ marginBottom: "30vh" }}>
            <div className="back">
                <h1> <span>A</span>pps I've Built</h1>

                <p>Here are a few projects upon which I've worked on recently. <br /> Click on any project to go to that Website.Hover to get a brief information about the project. <br /><br /><br /></p>

            </div>
            <div className="container">
                <div id="prj" className="project" style={{ maxWidth: "200px", backgroundPosition: "center", backdropFilter: "blur(20px)" }} >
                    <StaticImage src="../images/mockup1.png" width={400} />
                    {/* <img src=".." alt="Otter dancing with a fish" width={400} /> */}
                    <div className="overlay">
                        <h1 style={{ fontFamily: "Montserrat" }}>Portfolio Website</h1><hr style={{ marginLeft: "35%" }} /> <br />
                        <p>A Simple Portfolio website made with React JS, SASS and Gatsby JS</p> <br />
                        <p>
                            <FontAwesomeIcon icon={faGithub} size={'2x'} style={{ margin: "5px 15px" }} />
                            <FontAwesomeIcon icon={faLink} size={'2x'} style={{ margin: "5px 15px" }} />
                        </p>
                    </div>

                </div>
                <div id="prj" className="project" style={{ maxWidth: "200px", backgroundPosition: "center", backdropFilter: "blur(20px)" }} >
                    <StaticImage src="../images/mockp2.png" width={400} alt="mockup-image" />
                    <div className="overlay">
                        <h1 style={{ fontFamily: "Montserrat" }}>Meta Morph Website</h1><hr style={{ marginLeft: "35%" }} /> <br />
                        <p>Made the Official Website for Team Meta Morph ,During our college Annual Tech Fest - NIMBUS2K19</p> <br />
                        <p>
                            <FontAwesomeIcon icon={faGithub} size={'2x'} style={{ margin: "5px 15px" }} />
                            <FontAwesomeIcon icon={faLink} size={'2x'} style={{ margin: "5px 15px" }} />
                        </p>
                    </div>

                </div>
                <div id="prj" className="project" style={{ maxWidth: "200px", backgroundPosition: "center", backdropFilter: "blur(20px)" }} >
                    <StaticImage src="../images/mock1.png" width={400} alt="mockup-image" />
                    <div className="overlay">
                        <h1 style={{ fontFamily: "Montserrat" }}>Dizgitize</h1><hr style={{ marginLeft: "35%" }} /> <br />
                        <p>A Dynamic QR Code Generator Website through which you can generate QR Code of any Size, Colour or Type.Made with Gatsby JS,React JS and SCSS</p> <br />
                        <p>
                            <FontAwesomeIcon icon={faGithub} size={'2x'} style={{ margin: "5px 15px" }} />
                            <FontAwesomeIcon icon={faLink} size={'2x'} style={{ margin: "5px 15px" }} />
                        </p>
                    </div>

                </div>
                <div id="prj" className="project" style={{ maxWidth: "200px", backgroundPosition: "center", backdropFilter: "blur(20px)" }} >
                    <StaticImage src="../images/mock1.png" width={400} alt="mockup-image" />
                    <div className="overlay">
                        <h1 style={{ fontFamily: "Montserrat" }}>Bulletin Board</h1><hr style={{ marginLeft: "35%" }} /> <br />
                        <p>A Website which Lists all the announcements in the NITH Website with the help of Webscraping. Through NODE jS,Puppeter,React JS and Express </p> <br />
                        <p>
                            <FontAwesomeIcon icon={faGithub} size={'2x'} style={{ margin: "5px 15px" }} />
                            <FontAwesomeIcon icon={faLink} size={'2x'} style={{ margin: "5px 15px" }} />
                        </p>
                    </div>

                </div>
                <div id="prj" className="project" style={{ maxWidth: "200px", backgroundPosition: "center", backdropFilter: "blur(20px)" }} >
                    <StaticImage src="../images/mockup3.png" width={400} alt="mockup-image" />
                    <div className="overlay">
                        <h1 style={{ fontFamily: "Montserrat" }}>CUT OFF</h1><hr style={{ marginLeft: "35%" }} /> <br />
                        <p>A Simple Google Chrome Extension that switches off your camera and mic whenever you Join a Video Call on Google Meet.Made using HTML,CSS,JS.</p> <br />
                        <p>
                            <FontAwesomeIcon icon={faGithub} size={'2x'} style={{ margin: "5px 15px" }} />
                            <FontAwesomeIcon icon={faLink} size={'2x'} style={{ margin: "5px 15px" }} />
                        </p>
                    </div>

                </div>
                <div id="prj" className="project" style={{ maxWidth: "200px", backgroundPosition: "center", backdropFilter: "blur(20px)" }} >
                    <StaticImage src="../images/mock1.png" width={400} alt="mockup-image" />
                    <div className="overlay">
                        <h1 style={{ fontFamily: "Montserrat" }}>Meet Buddy</h1><hr style={{ marginLeft: "35%" }} /> <br />
                        <p>A Bot Made using Python which automatically joins all your class and marks attendance whenever 3 or more people write present on the Chat Box. </p> <br />
                        <p>
                            <FontAwesomeIcon icon={faGithub} size={'2x'} style={{ margin: "5px 15px" }} />
                            <FontAwesomeIcon icon={faLink} size={'2x'} style={{ margin: "5px 15px" }} />
                        </p>
                    </div>

                </div>


            </div>
            <p>
                Want to See More Projects? <br /> Checkout My Github Repo. <br /> <br /> <a target="_blank" style={{ color: "white" }} href="https://github.com/PGNITH"> <FontAwesomeIcon id="git" icon={faGithub} size='3x' /></a></p>
        </div>
    )
}

export default Projects
