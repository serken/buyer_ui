import React, { Component } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Content from "./Content.jsx"
import SignInForm from "./SignInForm.jsx"
import Registration from "./Registration.jsx"

import { BrowserRouter as Router, Route } from 'react-router-dom'

import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`


class App extends Component {
  render() {
    return (
      <Body>
        <Header />
        <Route exact path="/" component={Content} />
        <Route exact path="/sign_in" component={SignInForm} />
        <Route exact path="/registration" component={Registration} />
        <Footer />
      </Body>
    );
  }
}
export default App
