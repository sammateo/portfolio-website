import style from '../styles/Project.module.css'
import Link from 'next/link'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
export default function project({title,description,refindex}){
    useEffect(() =>{
        Aos.init({duration: 2000})
      })
    const projinfo=[
         {ref:"https://covid-19-stat-tracker.netlify.app/"},
         {ref:"https://findaverse.netlify.app/"},
         {ref:"https://cupid-delights.netlify.app/"}
      ]

      const animations =[
        "flip-left", "fade-down", "flip-right"
      ]

    //   function removeElement(event)
    //   {
    //         var clicked = event.target;
    //         clicked.parentElement.remove()
    //   }
    return(
        <div data-aos={animations[refindex]}>
        <Link   href={projinfo[refindex].ref}>
            <a target="_blank"><div className={style.container}>
            
                <h3>{title}</h3>
                <p>{description}</p>
                {/* <button onClick={removeElement}>Click</button> */}
            </div></a>
        </Link>
        </div>
        
    )
}