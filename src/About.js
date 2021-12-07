import styles from "../styles/About.module.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function project() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	return (
		<div id="about" className={styles.about} data-aos="fade-up">
			<h2>About Mateo</h2>
			<p>
				Second Year Computer Science Student at the University of the West
				Indies - Cave Hill Campus
			</p>

			<ul>
				<p>Languages and Frameworks:</p>
				<li>HTML</li>
				<li>CSS</li>
				<li>Javascript</li>
				<li>ReactJS</li>
				<li>NextJS</li>
				<li>C</li>
				<li>C++</li>
				<li>PHP</li>
				<li>MySQL</li>
			</ul>
		</div>
	);
}
