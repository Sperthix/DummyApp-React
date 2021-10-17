import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {

const Authctx = useContext(AuthContext)

  return (
    <React.Fragment>
        <MainHeader />
        <main>
          {!Authctx.isLoggedIn && <Login />}
          {Authctx.isLoggedIn && <Home />}
        </main>
    </React.Fragment>
  );
}

export default App;
