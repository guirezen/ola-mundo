import style from './inicio.module.css'

import posts from '../../assets/json/posts.json'
import PostCard from "../../componentes/PostCard";

export default function Inicio() {
   return(
        <ul className={style.posts}>
            {posts.map(post => (
                <PostCard
                    post={post}
                />
            ))}
        </ul> 
   );
}