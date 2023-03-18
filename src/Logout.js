import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "./Login.scss";

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
        <article style={{ marginTop: "20px" }}>
      <button
        className="pageBtnout"
        onClick={() => logout()}
        style={{ cursor: "pointer" }}
      >
        Sign Out{" "}
      </button>
      </article>
    )
  );
}
export default LogoutButton;
