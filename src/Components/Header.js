import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMailchimp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCode } from "@fortawesome/free-regular-svg-icons"
import '../styles/Header.scss'
import { Link } from "gatsby"
function Header() {
    const [mode, setMode] = useState(false);
    function handleMode() {
        if (mode == true) {
            document.body.style.backgroundColor = "#20182d";
            document.body.style.transition = "body 2s";
            setMode(false)
        }

        else {

            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#20182d";
            document.body.style.transition = "all 2s";
            setMode(true)

        }
    }

    return (
        <div >
            <header className="head">
                {/* <img src="https://img.icons8.com/material-outlined/24/000000/logo--v2.png"/> */}
                <div className="logo">

                    <StaticImage
                        className="log"
                        src="../images/PGLOGOPURPLE1.svg"
                        alt="Night/Light"
                        placeholder="blurred"
                        layout="fixed"
                        width={40}
                    // height={40}
                    />

                </div>
                <div className="links">
                    <ul className={`linksHead  ${mode ? "Light" : " Dark"}`}>
                        <Link to="/#Home"><li>Home</li></Link>
                        <a href="/#About"> <li>About</li></a>
                        <a href="/#Skills"><li>Skills</li></a>
                        <a href="/#Projects"><li>Projects</li></a>
                        <a href="/#Footer"><li>Contact Me</li></a>
                    </ul>
                    {/* className={`collapse navbar-collapse ${isOpen ? " " : "hide"}` */}
                    <div className={`mode ${mode ? " " : " Light"}`}>
                        <button onClick={handleMode} style={{ backgroundColor: "#20182d", border: "none" }}>
                            <StaticImage
                                src="../images/moon.svg"
                                alt="Night/Light"
                                placeholder="blurred"
                                layout="fixed"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>
                </div>


                <ul className="social">

                    <a href="https://github.com/PGNITH" target="_blank" rel="noopener noreferrer">  <li className="icons"> <FontAwesomeIcon icon={faGithub} size='2x' /> </li></a>
                    <a href="https://www.linkedin.com/in/premashish-ghosh-aab01b206/" target="_blank" rel="noopener noreferrer"> <li className="icons"> <FontAwesomeIcon icon={faLinkedinIn} size='2x' /> </li></a>
                    <a target="_blank" href="mailto:premashish2705@gmail.com"> <li className="icons"> <FontAwesomeIcon icon={faEnvelope} size='2x' /></li></a>

                </ul>

            </header>
        </div >
    )
}

export default Header
