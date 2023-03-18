import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';


import './header.scss';

import logo from '../../assets/my-logo.png';

import App from "../../App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-bc6t2vcqpvwz5r3k.us.auth0.com";
const clientID = "1Akk9JsiQGsciiR003u8ZwJwNX93rULx";


const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    },

    {
        display: 'Tabs',
        path: '/tabs'
    },

    {
        display: 'profile',
        path: '/profile'
    },    

 
];

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">Movie Center</Link>
                </div>
                
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <Auth0Provider
                domain={domain}
                clientId={clientID}
                redirectUri={window.location.origin}
              >
                <App />
              </Auth0Provider>
            </div>
        </div>

        
    );
}

export default Header;