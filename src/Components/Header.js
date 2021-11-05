import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedinIn,
	faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCode } from "@fortawesome/free-regular-svg-icons";
import "../styles/Header.scss";
import { Link } from "gatsby";
function Header(props) {
	console.log(props);
	const [mode, setMode] = useState(true);
	function handleMode() {
		if (mode == false) {
			document.body.style.backgroundColor = "#20182d";
			document.body.style.transition = "body 2s";
			setMode(true);
		} else {
			document.body.style.backgroundColor = "#ffffff";
			// document.body.style.color = "#20182d";
			document.body.style.transition = "all 2s";
			setMode(false);
		}
	}
	const sunMoon = !props.dark ? (
		<StaticImage
			src="../images/moon.svg"
			alt="Night/Light"
			placeholder="blurred"
			layout="fixed"
			width={40}
			height={40}
			onClick={handleMode}
			style={{ transition: "ease-out 2s" }}
		/>
	) : (
		<StaticImage
			src="../images/sun.svg"
			alt="Night/Light"
			placeholder="blurred"
			layout="fixed"
			width={40}
			height={40}
			onClick={handleMode}
			style={{ transition: "ease-in 2s" }}
		/>
	);
	return (
		<div>
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
					<ul className="linksHead">
						<Link to="/#Home">
							<li style={{ color: props.dark ? "#ffffff" : "rgb(32,24,45)" }}>
								Home
							</li>
						</Link>
						<a href="/#About">
							{" "}
							<li style={{ color: props.dark ? "#ffffff" : "rgb(32,24,45)" }}>
								About
							</li>
						</a>
						<a href="/#Skills">
							<li style={{ color: props.dark ? "#ffffff" : "rgb(32,24,45)" }}>
								Skills
							</li>
						</a>
						<a href="/#Projects">
							<li style={{ color: props.dark ? "#ffffff" : "rgb(32,24,45)" }}>
								Projects
							</li>
						</a>
						<a href="/#Footer">
							<li style={{ color: props.dark ? "#ffffff" : "rgb(32,24,45)" }}>
								Contact Me
							</li>
						</a>
					</ul>
					{/* className={`collapse navbar-collapse ${isOpen ? " " : "hide"}` */}
					<div className={`mode ${mode ? " " : " Light"}`}>
						<button
							onClick={props.modeHandler}
							style={{
								backgroundColor: "#20182d",
								border: "none",
								borderRadius: "100px",
							}}
						>
							{/* <StaticImage
								onClick=alt="Night/Light"
								placeholder="blurred"
								layout="fixed"
								width={40}
								height={40}{handleMode}
								src={sunMoon}
								
							/> */}
							{sunMoon}
						</button>
					</div>
				</div>

				<ul className="social" style={{ zIndex: "500" }}>
					<a
						href="https://github.com/PGNITH"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						<li className="icons">
							{" "}
							{props.dark ? (
								<FontAwesomeIcon icon={faGithub} size="2x" />
							) : (
								<FontAwesomeIcon color="#20182d" icon={faGithub} size="2x" />
							)}{" "}
						</li>
					</a>
					<a
						href="https://www.linkedin.com/in/premashish-ghosh-aab01b206/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						<li className="icons">
							{" "}
							{props.dark ? (
								<FontAwesomeIcon icon={faLinkedinIn} size="2x" />
							) : (
								<FontAwesomeIcon
									color="#20182d"
									icon={faLinkedinIn}
									size="2x"
								/>
							)}{" "}
						</li>
					</a>
					<a target="_blank" href="mailto:premashish2705@gmail.com">
						{" "}
						<li className="icons">
							{" "}
							{props.dark ? (
								<FontAwesomeIcon icon={faEnvelope} size="2x" />
							) : (
								<FontAwesomeIcon color="#20182d" icon={faEnvelope} size="2x" />
							)}
						</li>
					</a>
				</ul>
			</header>
		</div>
	);
}

export default Header;
