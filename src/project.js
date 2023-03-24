import style from "../styles/Project.module.css";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function project({ title, description, refr, animation }) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});
	return (
		<div data-aos={animation}>
			<a target="_blank" rel="noopener noreferrer" href={refr}>
				<div className={style.container}>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</a>
		</div>
	);
}
