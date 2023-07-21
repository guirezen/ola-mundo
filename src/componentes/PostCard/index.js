import { Link, useNavigate, useParams } from 'react-router-dom'
import style from './style.module.css'
import minhaFoto from '../../assets/posts/1/capa.png'
import Botao from 'componentes/Botao'

export default function PostCard({ post }) {
    const parametro = useParams()
    console.log(parametro)
    return (
        <Link to={`/posts/${post.id}`}>
            <li className={style.post} key={post.id}>
                <img
                    className={style.capa}
                    src={minhaFoto}
                    alt='Imagem do post'
                />
                <h2
                    className={style.titulo}
                >
                    {post.titulo}
                </h2>
                <Botao>Ler</Botao>
            </li>
        </Link>
    )
} 