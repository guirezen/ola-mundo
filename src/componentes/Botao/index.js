import style from './style.module.css'

export default function Botao({children, tamanho}) {
    return(
        <button className={`${style.botao} ${style[tamanho]}`}>{children}</button>
    )
}