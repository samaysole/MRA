import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.scss";
import Logout from "./Logout";



function LoginButton() {
  const { user } = useAuth0();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <article style={{ marginTop: "20px" }}>
        <button
          className="pageBtn"
          onClick={() => loginWithRedirect()}
          style={{ cursor: "pointer" }}
        >
          Sign In
        </button>
      </article>
    )
  );
}

export default LoginButton;
