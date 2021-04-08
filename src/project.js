import style from '../styles/Project.module.css'
import Link from 'next/link'
export default function project({title,description,refindex}){
    const projinfo=[
         {ref:"https://covid-19-stat-tracker.netlify.app/"},
         {ref:"https://findaverse.netlify.app/"},
         {ref:"https://cupid-delights.netlify.app/"}
      ]

    //   function removeElement(event)
    //   {
    //         var clicked = event.target;
    //         clicked.parentElement.remove()
    //   }
    return(
        <Link   href={projinfo[refindex].ref}>
            <a target="_blank"><div className={style.container}>
            
                <h3>{title}</h3>
                <p>{description}</p>
                {/* <button onClick={removeElement}>Click</button> */}
            </div></a>
        </Link>
        
    )
}