import React from 'react';
import { Navbar } from 'react-materialize';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <Navbar
            className={`${style.footer} justify-content-center`}
            menuIcon={<div className={style.display}></div>}
            brand={<span className={style.name}>&copy; 2020, by Nenad</span>}>
        </Navbar>
    )
}

export { Footer };