import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from '../hoc/auth'
import LoginPage from './Security Model/Login/index'
import RegisterPage from './Security Model/Register/index'
import Menu from './Menu/index'
import forgotPassoword from './Security Model/Forgot Password/index'
import ResetPage from './Security Model/Reset Passowrd/index'


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/login' component={Auth(LoginPage, false)} />
          <Route exact path='/register' component={Auth(RegisterPage, false)} />
          <Route
            exact
            path='/forgotPassoword'
            component={Auth(forgotPassoword, false)}
          />
          <Route
            exact
            path='/changePassword'
            component={Auth(ResetPage, true)}
          />
        </Switch>
      </div>
    </Suspense>
  )
}

export default App
