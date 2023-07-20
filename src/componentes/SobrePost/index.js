
import style from './style.module.css'

export default function SobrePost({children, fotoCapa, titulo}) {
    return(
        <article className={style.postModeloContainer}>
            <div 
                className={style.fotoCapa}
                style={{backgroundImage: `url(${fotoCapa})`}}
            ></div>
            <h1 className={style.titulo}>{titulo}</h1>
            
            <div className={style.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}