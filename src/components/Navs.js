import React from 'react'
import { useLocation } from 'react-router-dom';
import { UlStyle, NavStyle } from './NavbarStyle.styled';

const LINKS = [
    {to:"/",text:"Home"},
    {to:"/starred",text:"Starred"},
];

const Navs = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <UlStyle>
                {
                    LINKS.map(link => <li key={link.to}><NavStyle className={link.to === location.pathname ? 'active':''} to={link.to}>{link.text}</NavStyle></li>)
                }
            </UlStyle>
        </div>
    )
}

export default Navs
