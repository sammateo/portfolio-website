import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Project from '../src/project'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use  for styles
// ..AOS.init();

const proj=[
  {title:"Covid-19 Tracker", description:"Tracks covid 19 statistics"},
  {title:"Find-A-Verse", description:"Finds Bible verses"}
]


export default function Home({proj}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Mateo <span style={{color:"#03bafc"}}>Sam</span>
        </h1>

        <p className={styles.description}>
          Web Development Portfolio
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
      </main>

      <div style={{alignItems:'center',width:'75px',height:'75px'}}>
        
        <Link href="#projects">
          <a> <KeyboardArrowDownIcon className={styles.arrow} style={{ color: "white", width:"50px",height:"50px"}}>Arrow</KeyboardArrowDownIcon></a>
        </Link>
      </div>
      
      <div id="projects" className={styles.projects}>
        <Link href="https://covid-19-stat-tracker.netlify.app/">
          <a><Project title="Covid -19 Tracker" description="Tracks covid 19 stats"/></a>
        </Link>

        <Link href="https://covid-19-stat-tracker.netlify.app/">
          <a><Project title="Covid -19 Tracker" description="Tracks covid 19 stats"/></a>
        </Link>

        
      </div>

      <div className={styles.footer}>
            <h2>Contact</h2>
      </div>

      {/* <footer className={styles.footer}>

        <p>This is my footer</p>
      </footer> */}
      <script src="https://unpkg.com/aos@next/dist/aos.js">
          AOS.init();
      </script>
    </div>
  )
}
