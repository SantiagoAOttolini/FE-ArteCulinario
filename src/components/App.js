import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import forgotPassword from "./views/LoginPage/ForgotPassword";
import changePassword from "./views/LoginPage/ResetPassword";
import weightControl from "./views/Weight Control/Weight"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/forgotPassword"
            component={Auth(forgotPassword, false)}
          />
          <Route
            exact
            path="/changePassword"
            component={Auth(changePassword, true)}
          />
          <Route exact path="/weightControl" component={Auth(weightControl, false)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
