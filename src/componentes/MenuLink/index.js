import { Link, NavLink, useLocation } from 'react-router-dom'
import style from './style.module.css'

export default function MenuLink(props) {
    return (
        <NavLink 
            className={
                ({isActive}) => `${style.link} ${isActive && style.linkAcessado}`
            }
            to={props.to}
        >
            {props.children}
        </NavLink>
    )
}