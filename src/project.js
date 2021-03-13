import style from '../styles/Project.module.css'

export default function project({title,description}){

    return(
        <div className={style.container}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}