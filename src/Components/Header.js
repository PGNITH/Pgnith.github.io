import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import '../styles/Header.scss'
function Header() {
    // function handleMode(){
    //     do
    // }
    return (
        <div >
            <header className="head">
                {/* <img src="https://img.icons8.com/material-outlined/24/000000/logo--v2.png"/> */}
                <div className="logo">
                    <StaticImage
                        src="https://mohamedmohamud-portfolio.netlify.app/img/mo-avatar.png"
                        alt="Night/Light"
                        placeholder="blurred"
                        layout="fixed"
                        width={40}
                    // height={40}
                    />
                </div>
                <div className="links">
                    <ul className="linksHead">
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact Me</li>
                    </ul>
                    <div className="mode">
                        <StaticImage
                            src="../images/moon.svg"
                            alt="Night/Light"
                            placeholder="blurred"
                            layout="fixed"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <ul className="social">

                    <li><a><StaticImage src="../images/Linkedin.svg" alt="social1" width={30} /></a></li>
                    <li><StaticImage src="../images/Github.svg" alt="social2" width={30} /></li>
                    <li><StaticImage src="../images/Email.svg" alt="social3" width={30} /></li>

                </ul>

            </header>
        </div>
    )
}

export default Header
