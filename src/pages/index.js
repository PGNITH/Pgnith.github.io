import React, { useState } from "react";

import "../styles/Home.scss";
import Header from "../Components/Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { Helmet } from "react-helmet";

function Index() {
	const [dark, setDark] = useState(true);

	const modeHandler = () => {
		setDark(!dark);
	};
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Premashish Ghosh</title>
				{/* <link rel="canonical" href="http://mysite.com/example" /> */}
			</Helmet>
			<div>
				<Header dark={dark} modeHandler={modeHandler} />
			</div>
			<div id="Home">
				<Home dark={dark} modeHandler={modeHandler} />
			</div>
			<div id="About">
				<About />
			</div>
			<div id="Skills">
				<Skills />
			</div>
			<div id="Projects">
				<Projects />
			</div>
			<div id="Footer">
				<Contact />
			</div>
		</div>
	);
}

export default Index;
