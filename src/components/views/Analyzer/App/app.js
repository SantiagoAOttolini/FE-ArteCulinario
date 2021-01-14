import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Body from "../Body/body";
import Header from '../Header/header'
import './style.css';
import * as actionCreators from '../../../../_actions/types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

function mapStateToProps(state) {
  return { BmrReducer: state.BmrReducer }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <Header
            {...this.props}>
            <Body
              {...this.props} />
          </Header>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);