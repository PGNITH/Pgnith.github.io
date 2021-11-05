import React, { useState } from "react";
import "../styles/Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/fontawesome-free-solid";
import {
	faGithub,
	faLinkedinIn,
	faMailchimp,
} from "@fortawesome/free-brands-svg-icons";

import { projects } from "../data/project";
function Projects() {
	const [sort, setSort] = useState(projects);

	const handleSort = (e) => {
		console.log(e.target.value);
		let selected = projects.filter((sorted) =>
			sorted.tags.includes(e.target.value)
		);
		setSort(selected);
		console.log(sort);
	};

	const apps = sort.map(({ id, title, tagline, github, link, image }) => {
		return (
			<div
				id="prj"
				className="project"
				style={{
					maxWidth: "200px",
					backgroundPosition: "center",
					backdropFilter: "blur(20px)",
				}}
			>
				{image}
				<div className="overlay">
					<h1 style={{ fontFamily: "Montserrat" }}>{title}</h1>
					<hr style={{ marginLeft: "35%" }} /> <br />
					<p>{tagline}</p> <br />
					<p>
						<a href={github} target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon
								icon={faGithub}
								size={"2x"}
								style={{ margin: "5px 15px" }}
							/>
						</a>
						<a href={link} target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon
								icon={faLink}
								size={"2x"}
								style={{ margin: "5px 15px" }}
							/>
						</a>
					</p>
				</div>
			</div>
		);
	});
	return (
		<div className="projects" style={{ marginBottom: "30vh" }}>
			<div className="back">
				<h1>
					{" "}
					<span>A</span>pps I've Built
				</h1>

				<p>
					Here are a few projects upon which I've worked on recently. <br />{" "}
					Click on any project to go to that Website.Hover to get a brief
					information about the project. <br />
					<br />
					<br />
				</p>

				<div className="sort">
					<button onClick={() => setSort(projects)}>All</button>
					{/* <button value="FrontEnd" onClick={(e)=>handleSort(e)}>FrontEnd</button> */}
					<button value="FrontEnd" onClick={(e) => handleSort(e)}>
						BackEnd
					</button>
					<button value="React" onClick={(e) => handleSort(e)}>
						React
					</button>
					<button value="Javascript" onClick={(e) => handleSort(e)}>
						Javascript
					</button>
					<button value="Node" onClick={(e) => handleSort(e)}>
						Node
					</button>
					<button value="React Native" onClick={(e) => handleSort(e)}>
						React Native
					</button>
					<button value="C/C++" onClick={(e) => handleSort(e)}>
						C/C++
					</button>
					<button value="Python" onClick={(e) => handleSort(e)}>
						Python
					</button>
					<button value="REST API" onClick={(e) => handleSort(e)}>
						REST API
					</button>
				</div>
			</div>

			<div className="container">{apps}</div>
			<p>
				Want to See More Projects? <br /> Checkout My Github Repo. <br /> <br />{" "}
				<a
					target="_blank"
					style={{ color: "white" }}
					href="https://github.com/PGNITH"
				>
					{" "}
					<FontAwesomeIcon id="git" icon={faGithub} size="3x" />
				</a>
			</p>
		</div>
	);
}

export default Projects;
