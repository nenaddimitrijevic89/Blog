import React from 'react';
import { Container, Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    return (
        <Container className={style.header}>
            <Navbar
                className={style.background}
                alignLinks="right"
                brand={<Link to="/">BIT BLOG</Link>}
                centerChildren
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}

                options={{
                    draggable: true,
                    edge: 'right',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <div className={style.nav}>
                    <Link to='/'> <NavItem className={style.textColor}>
                        Home
                </NavItem> </Link>
                    <Link to='/posts'> <NavItem className={style.textColor}>
                        Posts
                </NavItem> </Link>
                    <Link to='/authors'> <NavItem className={style.textColor}>
                        Authors
                </NavItem> </Link>
                    <Link to='/about'> <NavItem className={style.textColor}>
                        About
                </NavItem> </Link>
                </div>
            </Navbar>
        </Container>
    );
}

export { Header };