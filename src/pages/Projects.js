import React from 'react'
import '../styles/Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMailchimp } from "@fortawesome/free-brands-svg-icons"
function Projects() {
    return (
        <div className="projects" style={{ marginBottom: "30vh" }}>
            <div className="back">
                <h1> <span>A</span>pps I've Built</h1>

                <p>Here are a few projects upon which I've worked on recently. <br /> Click on any project to go to that Website.Hover to get a brief information about the project. <br /><br /><br /></p>

            </div>
            <div className="container">
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
            </div>
            <p>
                Want to See More Projects? <br /> Checkout My Github Repo. <br /> <a target="_blank" style={{ color: "white" }} href="https://github.com/PGNITH"> <FontAwesomeIcon id="git" icon={faGithub} size='3x' /></a></p>
        </div>
    )
}

export default Projects
