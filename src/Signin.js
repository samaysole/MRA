import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Signin from "./Signin.scss";
import Logout from "./Logout";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-bc6t2vcqpvwz5r3k.us.auth0.com";
const clientID = "1Akk9JsiQGsciiR003u8ZwJwNX93rULx";

function LoginButton() {
  const { user } = useAuth0();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    
    !isAuthenticated && (
      <article className="singn-btn" style={{ marginTop: "20px" }}>
        <button className="signin_btn" onClick={() => loginWithRedirect()}>
           Sign In  
          </button>
          
          <h1 style={{color: '#FFFFFF', marginTop: " 32%" , marginRight: '100px'}}> | </h1>

          <style>
            {
              "body {background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)}"
              // "body {background: linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(23,148,195,1) 50%, rgba(26,153,113,1) 100%)}"
            }
          </style>

  
          <button className="signup_btn" onClick={() => loginWithRedirect()}>
          <a  href="#" id="Sign"> Sign Up </a>
          </button>

       
      </article>

   
              
    )



  );


}

export default LoginButton;
