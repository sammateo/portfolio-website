import styles from "../styles/Projects.module.css";
import Project from "../src/project";

const projinfo = [
  {
    title: "Covid-19 Tracker",
    description: "Tracks covid 19 statistics",
    refindex: 0,
    ref: "https://covid-19-stat-tracker.netlify.app/",
    animation: "flip-left",
  },
  {
    title: "Find-A-Verse",
    description: "Finds Bible verses",
    refindex: 1,
    ref: "https://findaverse.netlify.app/",
    animation: "fade-down",
  },

  {
    title: "Cupid Delights",
    description: "We post Roti skins all over UK & EU.",
    refindex: 2,
    ref: "https://cupid-delights.netlify.app/",
    animation: "flip-right",
  },
];

export default function Projects() {
  return (
    <div id="projects" className={styles.projects}>
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
