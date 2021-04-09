import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Project from '../src/project'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DriveEtaOutlined } from '@material-ui/icons'
import { useEffect } from 'react'
// import SimpleCard from '../src/card.js'
const projinfo=[
  {title:"Covid-19 Tracker", description:"Tracks covid 19 statistics", refindex:0},
  {title:"Find-A-Verse", description:"Finds Bible verses", refindex:1},
  {title:"Cupid Delights", description:"We post Roti skins all over UK & EU.", refindex:2}
]

export default function Home() {



  useEffect(() =>{
    Aos.init({duration: 2000})
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>mateosam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>

        <h1 className={styles.title} >
          Mateo <span style={{color:"#03bafc"}}>Sam</span>
        </h1>

        <p className={styles.description}>
          Frontend Web Development Portfolio
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
      </div>


      {/* <Link href ="#projects">
      <button className={styles.chevronDown}>&#x25BC;</button>

      </Link> */}
      <div id="projects" className={styles.projects}>
      {projinfo.map((proj)=>(
        <div key={proj.refindex} data-aos="flip-left">
          {/* <p>Hi</p> */}
          <Project title={proj.title} description={proj.description} refindex={proj.refindex}/>
        </div>
      ))}
      </div>

        

      
      <div className={styles.footer} data-aos="flip-up">
            <h2 className={styles.contact}>Contact</h2>
            <div className={styles.footericons}>
              <div>
                <Link href ="https://www.instagram.com/sammateo4/?hl=en">
                <a>
                  <img
                  src="/ig.png"
                  alt="ig"
                  width={20}
                  height={20}
                  />
                </a>
                </Link>

              </div>
              
              <div>
                <Link href="https://www.linkedin.com/in/mateo-sam-464ab81b2/">
                <a>
                <img
                src="/linkedin.png"
                alt="ig"
                width={20}
                height={20}
                />
                </a>
                </Link>

              </div>

              
               
            </div>
            
            
      </div>

      {/* <footer className={styles.footer}>

        <p>This is my footer</p>
      </footer> */}
      {/* <script src="https://unpkg.com/aos@next/dist/aos.js">
          AOS.init();
      </script> */}
    </div>
  )
}
