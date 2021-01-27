import React, { Suspense, Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from '../../hoc/auth'
// pages for this product
import LandingPage from '../../components/views/LandingPage/LandingPage.js'
import LoginPage from '../../components/views/Security Model/LoginPage/LoginPage'
import RegisterPage from '../../components/views/Security Model/RegisterPage/RegisterPage'
import NavBar from '../../components/views/NavBar/NavBar'
import forgotPassword from '../../components/views/Security Model/LoginPage/ForgotPassword'
import changePassword from '../../components/views/Security Model/LoginPage/ResetPassword'
import weightControl from '../../components/views/Weight Control/Weight'
import foodCompare from '../../components/views/Food Compare/Home'
import brm from '../../components/views/Analyzer/pages/main/homepage'
import Bulking from '../../components/views/Analyzer/Bulking/bulking'
import Cutting from '../../components/views/Analyzer/Cutting/cutting'
import pays from '../../components/views/Pays/PricingHome'
import Catalogrewards from '../../components/views/rewards/Catalog'
import SingleReward from '../../components/views/rewards/SingleReward'
import Information from '../../components/views/Food Compare/Informacion/index'
import AddFood from '../../components/views/Food Compare/AddFood/index'
import AddReward from '../../components/views/rewards/AdminAddReward'
import Auditory from '../../components/views/Auditory/index'
import Backup from '../../components/views/Backup/index'
import Benefits from "../../components/views/rewards/Benefits"
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside
class App extends Component {
  render() {
    return (
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <div style={{ paddingTop: '69px', minHeight: 'calc(10vh - 5px)' }}>
            <Route exact path='/' component={Auth(LandingPage, null)} />
            <Route exact path='/login' component={Auth(LoginPage, false)} />
            <Route
              exact
              path='/register'
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path='/foodCompare'
              component={Auth(foodCompare, null)}
            />
            <Route exact path='/information/:id' component={Auth(Information, true)} />
            <Route exact path='/addFood' component={Auth(AddFood, true)} />
            <Route exact path='/benefits' component={Auth(Benefits, true)} />
            <Route
              exact
              path='/forgotPassword'
              component={Auth(forgotPassword, false)}
            />
            <Route
              exact
              path='/changePassword'
              component={Auth(changePassword, true)}
            />
            <Route
              exact
              path='/weightControl'
              component={Auth(weightControl, true)}
            />
            <Route exact path='/bulking' component={Auth(Bulking, true)} />
            <Route exact path='/cutting' component={Auth(Cutting, true)} />
            <Route exact path='/bmrCalculator' component={Auth(brm, true)} />
            <Route exact path='/Premium' component={Auth(pays, true)} />
            <Route
              exact
              path='/Rewards'
              component={Auth(Catalogrewards, true)}
            />
            <Route
              exact
              path='/Reward/:id'
              component={Auth(SingleReward, true)}
            />
            <Route exact path='/Audits' component={Auth(Auditory, true)} />
            <Route exact path='/AddReward' component={Auth(AddReward, true)} />
            <Route exact path='/Backup' component={Auth(Backup, true)} />
          </div>
        </Suspense>
      </Switch>
    )
  }
}

export default App
