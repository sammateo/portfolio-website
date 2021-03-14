import style from '../styles/Project.module.css'
import Link from 'next/link'
export default function project({title,description,refindex}){
    const projinfo=[
        {title:"Covid-19 Tracker", description:"Tracks covid 19 statistics", ref:"https://covid-19-stat-tracker.netlify.app/"},
        {title:"Find-A-Verse", description:"Finds Bible verses", ref:"https://findaverse.netlify.app/"}
      ]
    return(
        <Link href={projinfo[refindex].ref}>
            <a><div className={style.container}>
            
                <h3>{title}</h3>
                <p>{description}</p>
            </div></a>
        </Link>
        
    )
}