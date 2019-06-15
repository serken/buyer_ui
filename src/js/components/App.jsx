import React, { Component } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Content from "./Content.jsx"
import SignInForm from "./SignInForm.jsx"
import Registration from "./Registration.jsx"
import Users from "./Users.jsx"
import Tender from "./Tender.jsx"

import { connect } from "react-redux"
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { requestSessionRestore, fetchCategories } from "../actions/index"

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
    sessionRestore: params => dispatch(requestSessionRestore()),
    fetchCategories: params => dispatch(fetchCategories())
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
    this.props.fetchCategories()
  }

  render() {
    return (
      <BrowserRouter>
      <Body>
        <Header user={this.props.user}/>
        <Route exact path="/" component={Content} />
        <Route exact path="/sign_in" component={SignInForm} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/tenders" component={Tender} />
        <Footer />
      </Body>
      </BrowserRouter>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
