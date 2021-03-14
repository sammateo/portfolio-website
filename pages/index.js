import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Project from '../src/project'
import Link from 'next/link'
import {useRef} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import SimpleCard from '../src/card.js'
const projinfo=[
  {title:"Covid-19 Tracker", description:"Tracks covid 19 statistics", refindex:0},
  {title:"Find-A-Verse", description:"Finds Bible verses", refindex:1}
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mateosam</title>
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

      <div className={styles.arrowcontainer} style={{ color: "white", width:"50px",height:"50px",alignItems:'center',justifyContent:"center"}}>    
        <Link href="#projects">
          <a > <ExpandMoreIcon className={styles.arrow} style={{ color: "white", width:"75px",height:"75px"}}>Arrow</ExpandMoreIcon></a>
        </Link>
      </div>


      {/* <div style={{ color: "white", width:"50px",height:"500px",alignItems:'center',justifyContent:"center",border:"3px solid white"}}>Hello</div> */}
      <div id="projects" className={styles.projects}>
        {/* <Link href="https://covid-19-stat-tracker.netlify.app/"> */}
          <Project title={projinfo[0].title} description={projinfo[0].description} refindex={projinfo[0].refindex}/>
        {/* </Link> */}
        
        {/* <Link href="https://covid-19-stat-tracker.netlify.app/"> */}
          <Project title={projinfo[1].title} description={projinfo[1].description} refindex={projinfo[1].refindex}/>
        {/* // </Link> */}

        {/* <SimpleCard title = "Covid-19" description="Tracks"/> */}
        
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
