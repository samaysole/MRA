import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav `
  background: #000;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
//   padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
//   position fixed;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1;
  


`

export const NavLink = styled(Link) `

color: #fff;
display: flex;
align-items: center; 
text-decoration: none;
padding: 0 1rem;
height: 100%;
curson: pointer;
font-size: 25px;

&.active {
    color: #FFFF;
}

&:hover {
    transtion: all 0.2s ease-in-out;
    // background: #000000;
    color: #00FFFF;
    text-decoration: underline !important; 

    
}

`

export const Bars = styled(FaBars)`

display: none;
color: #fff;


@media screen and (max-width: 768px) {
    display: block;
    postion: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: pointer;
    cursor: pointer;
}
`

export const NavMenu = styled.div `

display: flex;
align-items: center;
margin-right: -24px;
word-spacing: 50px;


@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtn = styled.nav` 
display: flex;
align-items: center;
margin-right: 24px;


@media screen and (max-width: 760px) {
    display: none;
}

`

export const NavBtnlink = styled(Link) `

border-radius: 4px;
background: #FFFF00;
padding: 10px 22px;
color: #000;
font-weight: bold;
border: none;
outline: none;
cursor: pointer;
transtion: all 0.2s ease-in-out;
text-decoration:  none;

&:hover {
    transtion: all 0.2s ease-in-out;
    color: #FF0000;
  


`