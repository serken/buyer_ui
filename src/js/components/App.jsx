import React, { Component } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Content from "./Content.jsx"
import SignInForm from "./SignInForm.jsx"
import Registration from "./Registration.jsx"
import Users from "./Users.jsx"

import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { requestSessionRestore } from "../actions/index"

import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`

function mapDispatchToProps(dispatch) {
  return {
    sessionRestore: params => dispatch(requestSessionRestore())
  };
}

function mapStateToProps(state) {
  const { user, userCreated } = state
  return { user: user }
}

class App extends Component {
  constructor(){
    super()
  }

  componentWillMount() {
    this.props.sessionRestore()
  }

  render() {
    return (
      <Body>
        <Header user={this.props.user}/>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/sign_in" component={SignInForm} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/users" component={Users} />
        </Switch>
        <Footer />
      </Body>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
