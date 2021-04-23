import styles from "../styles/Landing.module.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
export default function Landing() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const [theme, setTheme] = useState("Dark Theme");
  const [themeHandle, setThemeHandle] = useState(0);

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
      document.getElementById("linkedin").src = "/linkedin.png";
      document.getElementById("github").src = "/github.png";
      document.documentElement.style.setProperty("--background", "black");
      document.documentElement.style.setProperty("--color", "white");
      document.documentElement.style.setProperty("--primary", "white");
      document.documentElement.style.setProperty("--secondary", "#03bafc");
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.ball}></div>
      <div className={styles.ball2}></div>
      <div className={styles.ball3}></div>
      <div className={styles.ball4}></div>
      <div className={styles.ball5}></div>
      <h1 className={styles.title}>
        <span className={styles.firstname}>Mateo</span>{" "}
        <span className={styles.lastname}>Sam</span>
      </h1>
      <p className={styles.description}>Front End Web Development Portfolio</p>
      <button className={styles.themeButton} onClick={changeTheme}>
        {theme}
      </button>
    </div>
  );
}
