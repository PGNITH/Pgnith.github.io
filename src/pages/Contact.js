import React from 'react'
import '../styles/Contact.scss'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMailchimp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCode } from "@fortawesome/free-regular-svg-icons"

function Contact() {
    return (
        <div className="contact">
            <StaticImage StaticImage src="../images/Logo.svg" placeholder="blurred" />
            <StaticImage className="logow" src="../images/PGLOGODARK.svg" alt="PG" height={205} placeholder="blurred" />
            <h3 id="quote"> Living, Learning, & Leveling up one day at a time.</h3>
            <FontAwesomeIcon icon={faCode} size='2x' />
            <ul className="cont">

                <a href="https://github.com/PGNITH" target="_blank" rel="noopener noreferrer">  <li className="icons"> <FontAwesomeIcon id="gi" icon={faGithub} size='2x' /> </li></a>
                <a href="https://www.linkedin.com/in/premashish-ghosh-aab01b206/" target="_blank" rel="noopener noreferrer"> <li id="li"> <FontAwesomeIcon icon={faLinkedinIn} size='2x' /> </li></a>
                <a target="_blank" href="mailto:premashish2705@gmail.com"> <li className="icons"> <FontAwesomeIcon id="gm" icon={faEnvelope} size='2x' /></li></a>

            </ul>
            <h3 className="developer">Developed by <b>Premashish Ghosh</b> </h3>
            <h2>Made with Gatsby   <br /> <span id="gat"> <StaticImage src="../images/Gatsby.svg" height={30} alt="PG" placeholder="blurred" /></span></h2>
        </div>
    )
}

export default Contact
