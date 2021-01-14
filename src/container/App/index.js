import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../../hoc/auth";
// pages for this product
import LandingPage from "../../components/views/LandingPage/LandingPage.js";
import LoginPage from "../../components/views/Security Model/LoginPage/LoginPage";
import RegisterPage from "../../components/views/Security Model/RegisterPage/RegisterPage";
import NavBar from "../../components/views/NavBar/NavBar";
import forgotPassword from "../../components/views/Security Model/LoginPage/ForgotPassword";
import changePassword from "../../components/views/Security Model/LoginPage/ResetPassword";
import weightControl from "../../components/views/Weight Control/Weight"
import foodCompare from "../../components/views/Food Compare/Home"
import analyzerMetabolic from "../../components/views/Analyzer/Home/home"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(10vh - 5px)" }}>
        <Switch>
          
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/foodCompare" component={Auth(foodCompare, null)} />
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
          <Route exact path="/weightControl" component={weightControl} />
          <Route exact path="/analyzerMetabolic" component={analyzerMetabolic} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
