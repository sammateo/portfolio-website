import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Project from '../src/project'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DriveEtaOutlined } from '@material-ui/icons'
import { useState,useEffect} from 'react'
// import SimpleCard from '../src/card.js'
const projinfo=[
  {title:"Covid-19 Tracker", description:"Tracks covid 19 statistics", refindex:0},
  {title:"Find-A-Verse", description:"Finds Bible verses", refindex:1},
  {title:"Cupid Delights", description:"We post Roti skins all over UK & EU.", refindex:2}
]

export default function Home() {
  const [theme,setTheme] = useState('Dark Theme')
  // console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--background'));
  // console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--color'));
  function changeTheme(){
    console.log(document.getElementById('ig').src)
    if(window.getComputedStyle(document.documentElement).getPropertyValue('--color') == 'white')
    {
      document.getElementById('ig').src = '/ig2.png'
      document.getElementById('linkedin').src = '/linkedin2.png'
      document.getElementById('github').src = '/github2.png'
      document.documentElement.style.setProperty('--background','white')
      document.documentElement.style.setProperty('--color','black')
      setTheme('Light Theme')
    }
    else{
      setTheme('Dark Theme')
      document.getElementById('ig').src = '/ig.png'
      document.getElementById('linkedin').src = '/linkedin.png'
      document.getElementById('github').src = '/github.png'
      document.documentElement.style.setProperty('--background','black')
    document.documentElement.style.setProperty('--color','white')
    }
    
  }
  

  useEffect(() =>{
    Aos.init({duration: 2000})
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>mateosam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navbar} id="navbar">
        <Link href ="#projects">
            <p>Projects</p>
        </Link>
        <Link href ="#contact">
            <p>Contact</p>
         </Link>
         
      </div>

      <div className={styles.main}>
        <div className={styles.ball}></div>
        <div className={styles.ball2}></div>
        <div className={styles.ball3}></div>
        <div className={styles.ball4}></div>
        <div className={styles.ball5}></div>
        <h1 className={styles.title} >
          Mateo <span style={{color:"#03bafc"}}>Sam</span>
        </h1>

        <p className={styles.description}>
          Front End Web Development Portfolio
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
        <button className={styles.themeButton} onClick={changeTheme}>{theme}</button>
      </div>


      {/* <Link href ="#projects">
      <button className={styles.chevronDown}>&#x25BC;</button>

      </Link> */}
      <div id="projects" className={styles.projects}>
      {projinfo.map((proj)=>(
        <div key={proj.refindex}>
        

          {/* <p>Hi</p> */}
          <Project title={proj.title} description={proj.description} refindex={proj.refindex}/>
          {/* <div className={styles.projectball}></div> */}
        </div>
      ))}
      </div>

        

      
      <div className={styles.footer}  data-aos="flip-up">
        
            <h2 className={styles.contact}>Contact</h2>
            <div className={styles.footericons} id="contact">
              <div>
                <Link href ="https://www.instagram.com/sammateo4/?hl=en">
                <a target ="_blank">
                  <img id="ig"
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
                <a target ="_blank">
                <img id="linkedin"
                src="/linkedin.png"
                alt="linkedin"
                width={20}
                height={20}
                />
                </a>
                </Link>

              </div>
              
              
              <div>
                <Link href="https://github.com/sammateo">
                <a target ="_blank">
                <img id = "github"
                src="/github.png"
                alt="github"
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
