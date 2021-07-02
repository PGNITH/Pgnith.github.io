import React from 'react'
import '../styles/Home.scss'
import { StaticImage } from "gatsby-plugin-image"
function Home() {
    return (
        <div>
            <h1 className="heroText" style={{ minHeight: "100vh" }}>
                <b> Front-End Developer and Open Source Enthusiast</b>
                <div className="avatar">
                    <StaticImage src="../images/avatar.svg" alt="PG" height={205} placeholder="blurred" />
                </div>
                <h2 className="subText">
                    Hi,I am <span> Premashish Ghosh</span>.I am a Developer
                </h2>
            </h1>
        </div>
    )
}

export default Home
