import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const projects = [
	{
		id: 1,
		title: "Portfolio Website",
		tagline:
			"A Simple Portfolio website made with React JS, SASS and Gatsby JS",
		github: "https://github.com/PGNITH/Pgnith.github.io",
		link: "https://pgnith.github.io/",
		image: <StaticImage src="../images/portfolio.png" width={400} />,
		tags: ["FrontEnd", "BackEnd"],
	},
	{
		id: 2,
		title: "Meta Morph Website",
		tagline:
			"Made the Official Website for Team Meta Morph ,During our college Annual Tech Fest - NIMBUS2K19",
		github: "https://github.com/metamorphnimbus/METAMORPH-OFFICIAL",
		link: "https://metamorphnith.tech/",
		image: <StaticImage src="../images/metamorph.png" width={400} />,
		tags: ["FrontEnd"],
	},
	{
		id: 3,
		title: "Dizgitize",
		tagline:
			"A Dynamic QR Code Generator Website through which you can generate QR Code of any Size, Colour or Type.Made with Gatsby JS,React JS and SCSS",
		github: "",
		link: "",
		image: <StaticImage src="../images/mockup2.png" width={400} />,
		tags: ["FrontEnd", "React"],
	},

	{
		id: 4,
		title: "Bulletin Board",
		tagline:
			"A Website which Lists all the announcements in the NITH Website with the help of Webscraping. Through NODE jS,Puppeter,React JS and Express",
		github: "https://github.com/PGNITH/BulletinBoard",
		link: "",
		image: <StaticImage src="../images/mockup2.png" width={400} />,
		tags: ["Node", "Pupeteer", "Backend"],
	},
	{
		id: 5,
		title: "CUT OFF",
		tagline:
			"A Simple Google Chrome Extension that switches off your camera and mic whenever you Join a Video Call on Google Meet.Made using HTML,CSS,JS.",
		github: "",
		link: "",
		image: <StaticImage src="../images/cutoff.png" width={400} />,
		tags: ["Javascript", "BackEnd"],
	},
	{
		id: 6,
		title: "Impersonator",
		tagline:
			"A Bot Made using Python which automatically joins all your class and marks attendance whenever 3 or more people write present on the Chat Box.",
		github: "https://github.com/PGNITH/Impersonator",
		link: "",
		image: <StaticImage src="../images/mockup2.png" width={400} />,
		tags: ["Python"],
	},
	{
		id: 7,
		title: "Gate-MT",
		tagline:
			"A CRUD Based Dynamic FullStack PWA with Real-time Authentication with the ability to create Quizzes .",
		github: "https://github.com/PGNITH/GATE-MT",
		link: "https://gate-mt.me",
		image: <StaticImage src="../images/mockup2.png" width={400} />,
		tags: ["FrontEnd", "BackEnd"],
	},
	{
		id: 8,
		title: "MetaArchieve",
		tagline:
			"A CRUD Based Dynamic FullStack PWA with Real-time Authentication with the ability to create Quizzes .",
		github: "https://github.com/PGNITH/GATE-MT",
		link: "https://gate-mt.me",
		image: <StaticImage src="../images/mockup2.png" width={400} />,
		tags: ["FrontEnd", "BackEnd", "REST API"],
	},
];
