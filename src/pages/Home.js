import React from 'react'
import '../styles/Home.scss'
import { StaticImage } from "gatsby-plugin-image"
import ReactTypingEffect from 'react-typing-effect'
import { Helmet } from "react-helmet"
function Home() {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Premashish Ghosh</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="heroText" style={{ minHeight: "100vh" }}>
                <b id="htxt"> Front-End Developer and Open Source Enthusiast</b>
                <div className="avatar">
                    <StaticImage src="../images/avatar.svg" alt="PG" height={205} placeholder="blurred" />
                </div>
                <h2 className="subText">
                    Hi , I am &nbsp; <span> <b><ReactTypingEffect text={["Premashish Ghosh", " A Developer", "A Programmer", "An UI/UX Designer"]} /></b></span>
                </h2>
            </h1>
        </div>
    )
}

export default Home
