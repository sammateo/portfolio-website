import styles from "../styles/Footer.module.css";
import Aos from "aos";
import { useEffect } from "react";
import Link from "next/link";
import "aos/dist/aos.css";
export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const icons = [
    {
      id: "ig",
      source: "/ig.png",
      link: "https://www.instagram.com/sammateo4/?hl=en",
      alt: "ig",
    },
    {
      id: "linkedin",
      source: "/linkedin.png",
      link: "https://www.linkedin.com/in/mateo-sam-464ab81b2/",
      alt: "linkedin",
    },
    {
      id: "github",
      source: "/github.png",
      link: "https://github.com/sammateo",
      alt: "github",
    },
  ];

  return (
    <div className={styles.footer} data-aos="flip-up">
      <h2 className={styles.contact}>Contact</h2>
      <div className={styles.footericons} id="contact">
        {icons.map((icon) => (
          <div key={icon.id}>
            <Link href={icon.link}>
              <a target="_blank">
                <img
                  id={icon.id}
                  src={icon.source}
                  alt={icon.alt}
                  width={20}
                  height={20}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
