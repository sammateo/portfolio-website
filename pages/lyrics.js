import Head from "next/head";
import styles from "../styles/Lyrics/Lyrics.module.css";
import Footer from "../src/Footer";
import { useState, useEffect } from "react";
export default function Home() {
	const [lyric, setLyric] = useState();
	const [artist, setArtist] = useState();
	const [song, setSong] = useState();

	const [theme, setTheme] = useState("Dark Theme");
	const [themeHandle, setThemeHandle] = useState(0);

	useEffect(() => {
		checkTheme();
	});
	function checkTheme() {
		if (
			window
				.getComputedStyle(document.documentElement)
				.getPropertyValue("--color") == "black"
		) {
			setThemeHandle(1);
			document.getElementById("ig").src = "/ig2.png";
			document.getElementById("themeicon").style.transform = "rotate(180deg)";
			document.getElementById("linkedin").src = "/linkedin2.png";
			document.getElementById("github").src = "/github2.png";
			document.documentElement.style.setProperty("--background", "white");
			document.documentElement.style.setProperty("--color", "black");
			document.documentElement.style.setProperty("--primary", "#03bafc");
			document.documentElement.style.setProperty("--secondary", "black");
			setTheme("Light Theme");
		} else {
			setTheme("Dark Theme");
			document.getElementById("ig").src = "/ig.png";
			document.getElementById("themeicon").style.transform = "rotate(0deg)";
			document.getElementById("linkedin").src = "/linkedin.png";
			document.getElementById("github").src = "/github.png";
			document.documentElement.style.setProperty("--background", "black");
			document.documentElement.style.setProperty("--color", "white");
			document.documentElement.style.setProperty("--primary", "white");
			document.documentElement.style.setProperty("--secondary", "#03bafc");
		}
	}
	function changeTheme() {
		console.log(document.getElementById("ig").src);
		if (
			window
				.getComputedStyle(document.documentElement)
				.getPropertyValue("--color") == "white" ||
			themeHandle == 0
		) {
			setThemeHandle(1);
			document.getElementById("ig").src = "/ig2.png";
			document.getElementById("themeicon").style.transform = "rotate(180deg)";
			document.getElementById("linkedin").src = "/linkedin2.png";
			document.getElementById("github").src = "/github2.png";
			document.documentElement.style.setProperty("--background", "white");
			document.documentElement.style.setProperty("--color", "black");
			document.documentElement.style.setProperty("--primary", "#03bafc");
			document.documentElement.style.setProperty("--secondary", "black");

			setTheme("Light Theme");
		} else {
			setTheme("Dark Theme");
			document.getElementById("ig").src = "/ig.png";
			document.getElementById("themeicon").style.transform = "rotate(0deg)";
			document.getElementById("linkedin").src = "/linkedin.png";
			document.getElementById("github").src = "/github.png";
			document.documentElement.style.setProperty("--background", "black");
			document.documentElement.style.setProperty("--color", "white");
			document.documentElement.style.setProperty("--primary", "white");
			document.documentElement.style.setProperty("--secondary", "#03bafc");
		}
	}
	async function getLyrics() {
		let song = document.getElementById("songin").value;
		let artiste = document.getElementById("artistin").value;
		const request = await fetch(
			"https://api.lyrics.ovh/v1/" + artiste + "/" + song
		);
		const data = await request.json();
		// console.log(data.lyrics);
		setLyric(data.lyrics);
		setArtist(artiste);
		setSong(song);
	}
	return (
		<div className={styles.container}>
			<Head>
				<title>mateosam</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Web development portfolio" />
			</Head>
			<div className={styles.header}>
				<img
					id="themeicon"
					src="/sun.png"
					onClick={changeTheme}
					className={styles.theme}
				></img>
				<h1>Lyric Finder</h1>
				<label htmlFor="artist">Artist Name</label>
				<input className={styles.input} name="artist" id="artistin"></input>
				<label htmlFor="song">Song Name</label>

				<input className={styles.input} name="song" id="songin"></input>
				<button className={styles.button} onClick={getLyrics}>
					Search Song
				</button>
			</div>
			<div>
				<div className={styles.lyriccontainer}>
					{lyric == null ? (
						<p>Lyrics Go Here</p>
					) : (
						<p>
							{artist} ~ {song}
						</p>
					)}

					<pre>{lyric}</pre>
				</div>
			</div>

			<Footer></Footer>
		</div>
	);
}
