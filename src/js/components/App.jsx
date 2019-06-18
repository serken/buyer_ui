import React, { Component } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Content from "./Content.jsx"
import SignIn from "./SignIn/SignIn.jsx"
import Registration from "./Registration/Registration.jsx"
import Users from "./Users.jsx"
import TenderList from "./Tender/TenderList.jsx"
import Tender from "./Tender/Tender.jsx"
import CreateTenderForm from "./CreateTender/CreateTenderForm.jsx"

import { connect } from "react-redux"
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { requestSessionRestore, fetchCategories, tendersRequest } from "../actions/index"

import styled from 'styled-components'

const Body = styled.div`
  flex: 1;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`

function mapDispatchToProps(dispatch) {
  return {
    sessionRestore: params => dispatch(requestSessionRestore()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchTenders: () => dispatch(tendersRequest())
  };
}

function mapStateToProps(state) {
  const { user } = state
  return { user: user }
}

class App extends Component {
  constructor(){
    super()
  }

  componentWillMount() {
    this.props.sessionRestore()
    this.props.fetchCategories()
    this.props.fetchTenders()
  }

  render() {
    return (
      <BrowserRouter>
        <Body>
          <Header user={this.props.user}/>
          <Route exact path="/" component={Content} />
          <Route exact path="/sign_in" component={SignIn} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/tenders/" component={TenderList} />
          <Route exact path="/tenders/:tenderId" component={Tender} />
          <Route exact path="/create_tender" component={CreateTenderForm} />
        </Body>
      </BrowserRouter>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
