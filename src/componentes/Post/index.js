import { useParams } from "react-router-dom"
import Posts from '../../assets/json/posts.json'
import SobrePost from "../SobrePost";
import fotoTitulo from '../../assets/posts/1/capa.png'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './style.css'
import NaoEncontrada from "paginas/NaoEcontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post() {
    const parametro = useParams();
    // const postCard = Posts.filter(post => {
    //     if (post.id.toString() === parametro.id) {
    //         console.log(post)
    //         return post
    //     }
    // })
    const post = Posts.find(post => {
        return post.id.toString() === parametro.id
    })

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <PaginaPadrao>
            <SobrePost
                titulo={post.titulo}
                fotoCapa={fotoTitulo}
            >
                <section className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </section>

            </SobrePost>
        </PaginaPadrao>

    )
}