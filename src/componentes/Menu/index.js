import { Link, useLocation } from "react-router-dom";
import style from './style.module.css'
import MenuLink from "../MenuLink";

export default function Menu() {
    return (
        <nav className={style.navegacao}>
            <MenuLink
                to={'/'}
            >
                Inicio
            </MenuLink>
            <MenuLink
                to={'/sobremim'}
            >
                Sobre mim
            </MenuLink>
        </nav>
    )
}