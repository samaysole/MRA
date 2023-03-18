import Login from "./Login";
import Logout from "./Logout";
import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import Profile  from "./Profile";
import Tabs from "./Tabs";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

import Signin from "./Signin"
import DashBord from "./DashBord";

function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  const { isLoading, error } = useAuth0();

  return (
    <>
      

      {error && <p> Authentication Error </p>}
      {!error && isLoading && <p style={{ color: "white" }}> Loading.... </p>}
      {/* {!isAuthenticated ? <Tabs /> : <Tabs />} */}
      {!error && !isLoading && (
        <div>
          <Login />
          {/* <Signin /> */}

          <Logout />
          <>
            <div style={{ margin: "45%", display: "inline" }}>
              {/* {user?.picture && (
                <img
                  style={{
                    borderRadius: "32px",
                    width: "24%",
                    height: "13%",
                    margin: "-35px",
                  }}
                  src={user.picture}
                  alt={user.name}
                />
              )} */}
            </div>
          </>

          {/* <Profile /> */}
        </div>
      )}
    </>
  );
}

export default App;
