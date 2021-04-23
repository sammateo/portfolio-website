import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../src/Header";
import Landing from "../src/landing";
import Projects from "../src/Projects";
import About from "../src/about";
import Footer from "../src/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mateosam</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Web development portfolio" />
      </Head>
      <Header></Header>
      <Landing></Landing>
      <Projects></Projects>
      <About></About>
      <Footer></Footer>
    </div>
  );
}
