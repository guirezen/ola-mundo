import style from "./style.module.css"
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.png'

export default function Banner() {
    return (
        <section className={style.banner}>
            <div>
                <h1 className={style.titulo}>Olá, mundo!</h1>
                <p className={style.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
            </div>
            <div className={style.imagens}>
                <img 
                    className={style.circuloColorido} 
                    src={circuloColorido}
                />
                <img 
                    className={style.minhaFoto} 
                    src={minhaFoto}
                />
            </div>
        </section>
    )
}