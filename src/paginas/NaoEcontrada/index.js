import Banner from 'componentes/Banner'
import style from './style.module.css'
import fotoError from '../../assets/erro_404.png'
import { Link, useNavigate } from 'react-router-dom'
import Botao from 'componentes/Botao'

export default function NaoEncontrada() {
    const navegar = useNavigate()

    return (
        <main>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}>404</span>
                <h1 className={style.titulo}>Ops! Página não encontrada.</h1>
                <p className={style.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={style.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                <div>
                    <div onClick={() =>navegar(-1)} className={style.botaoContainer}>
                        <Botao
                            tamanho='lg'
                        >
                            Voltar
                        </Botao>
                    </div>
                    <img className={style.imagemCachorro} src={fotoError} />
                </div>
            </div>
            <div className={style.espacoEmBranco}></div>
        </main>
    )
}