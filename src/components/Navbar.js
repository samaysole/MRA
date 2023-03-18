import React from "react";
import App from "../App";
import logo from "../img/logo.svg";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "../Profile";
import {HouseDoorFill} from "react-bootstrap-icons";
import {InfoLg} from "react-bootstrap-icons"
import {PersonLinesFill} from "react-bootstrap-icons"
import {PersonFill} from "react-bootstrap-icons"
import {List} from "react-bootstrap-icons"
import {GearFill} from "react-bootstrap-icons"

import { Nav, NavLink, Bars, NavBtn, NavMenu } from "./NavbarElement";
import { Link } from "react-router-dom";
import Tabs from "../Tabs";

const domain = "dev-bc6t2vcqpvwz5r3k.us.auth0.com";
const clientID = "1Akk9JsiQGsciiR003u8ZwJwNX93rULx";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} />
        </NavLink>

        <Bars />

        <NavMenu>
          <NavLink to="/">   Home</NavLink> {/* <HouseDoorFill /> */}

          <NavLink to="/about"> About</NavLink> {/* <<InfoLg /> /> */}

          <NavLink to="/services"> Services</NavLink> {/* <<GearFill />  /> */}

          <NavLink to="/contact-us"> Contactus</NavLink> {/* <<PersonLinesFill />  /> */}
 
          <NavLink to="/profile">  Profile </NavLink> {/* <<PersonFill /> /> */}

          <NavLink to="/tabs">  Tabs </NavLink> {/* <<List /> /> */}

        </NavMenu>

        <NavBtn>
          <Auth0Provider
            domain={domain}
            clientId={clientID}
            redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>

          {/* <NavBtnlink to="/login/"> Sign In </NavBtnlink> */}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
