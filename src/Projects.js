import styles from "../styles/Projects.module.css";
import Project from "../src/project";

const projinfo = [
	{
		title: "ClearView Lens",
		description: "ClearView Multifocal IOL by Lenstec, Inc.",
		refindex: 0,
		ref: "https://clearview-dev-80941.web.app/",
		animation: "fade-up",
	},
	{
		title: "Lenstec EU",
		description: "Lenstec, Inc.'s EU Patient Information Website",
		refindex: 1,
		ref: "https://eu-lenstec.web.app/",
		animation: "fade-up",
	},
	{
		title: "Covid-19 Tracker",
		description: "Tracks COVID-19 Statistics",
		refindex: 2,
		ref: "https://covid-19-stat-tracker.netlify.app/",
		animation: "flip-left",
	},
	{
		title: "Find-A-Verse",
		description: "Finds Bible verses",
		refindex: 3,
		ref: "https://findaverse.netlify.app/",
		animation: "fade-down",
	},

	{
		title: "Cupid Delights",
		description: "We post Roti skins all over UK & EU.",
		refindex: 4,
		ref: "https://cupid-delights.netlify.app/",
		animation: "flip-right",
	},

	// {
	// 	title: "Lyric Finder",
	// 	description: "Find song lyrics",
	// 	refindex: 3,
	// 	ref: "/lyrics",
	// 	animation: "flip-up",
	// },
];

export default function Projects() {
	return (
		<div className={styles.projects}>
			{projinfo.map((proj) => (
				<div key={proj.refindex}>
					<Project
						title={proj.title}
						description={proj.description}
						refr={proj.ref}
						animation={proj.animation}
					/>
				</div>
			))}
		</div>
	);
}
