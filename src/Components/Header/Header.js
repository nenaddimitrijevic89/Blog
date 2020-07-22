import React from 'react';
import { Container, Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Container className="header">
            <Navbar
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
                <Link to='/'> <NavItem>
                    Home
                </NavItem> </Link>
                <Link to='/Posts'> <NavItem>
                    Posts
                </NavItem> </Link>
                <Link to='/Authors'> <NavItem>
                    Authors
                </NavItem> </Link>
                <Link to='/About'> <NavItem>
                    About
                </NavItem> </Link>
            </Navbar>
        </Container>
    );
}

export { Header };