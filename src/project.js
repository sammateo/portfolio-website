import style from '../styles/Project.module.css'
import Link from 'next/link'
export default function project({title,description,refindex}){
    const projinfo=[
         {ref:"https://covid-19-stat-tracker.netlify.app/"},
         {ref:"https://findaverse.netlify.app/"}
      ]
    return(
        <Link   href={projinfo[refindex].ref}>
            <a target="_blank"><div className={style.container}>
            
                <h3>{title}</h3>
                <p>{description}</p>
            </div></a>
        </Link>
        
    )
}