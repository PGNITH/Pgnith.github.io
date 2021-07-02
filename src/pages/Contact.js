import React from 'react'
import '../styles/Contact.scss'
import { StaticImage } from "gatsby-plugin-image"
function Contact() {
    return (
        <div className="contact">
            <StaticImage StaticImage src="../images/Logo.svg" placeholder="blurred" />
            <h3> Living, learning, & leveling up one day at a time.</h3>
        </div>
    )
}

export default Contact
