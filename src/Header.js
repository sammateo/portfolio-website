import styles from '../styles/Header.module.css'
import Link from 'next/link'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
export default function Header(){
    useEffect(() =>{
        Aos.init({duration: 2000})
      })

      return(
        <div className={styles.navbar} id="navbar">
        <Link href ="#projects">
            <p>Projects</p>
        </Link>
        <Link href ="#about">
        <p>About</p>
        </Link>
       
        <Link href ="#contact">
            <p>Contact</p>
         </Link>
         
      </div>
      )

}