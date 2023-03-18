import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo.jpeg';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link style={{color:'#FFFFFF', margin: '0px 0px', textDecoration: 'none', fontSize: "50px", fontWeight: '600'}} to="/"> Top  Movies </Link>
                    </div>
                </div>
                <div className="footer__content__menus" >
                    <div className="footer__content__menu">
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">Home</Link>
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">Contact us</Link>
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">Term of services</Link>
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">Live</Link>
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">FAQ</Link>
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">Premium</Link>
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">Privacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">You must watch</Link>
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">Recent release</Link>
                        <Link style={{color:'#FFFFFF', textDecoration: 'none'}} to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;