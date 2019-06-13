import React, { Component } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Content from "./Content.jsx"
import SignInForm from "./SignInForm.jsx"
import Registration from "./Registration.jsx"

import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`

function mapStateToProps(state) {
  const { user } = state
  return { user: user }
}

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <Body>
        <Header user={this.props.user}/>
        <Route exact path="/" component={Content} />
        { !this.props.user &&
          <Route exact path="/sign_in" component={SignInForm} />
        }
        { !this.props.user &&
          <Route exact path="/registration" component={Registration} />
        }
        <Footer />
      </Body>
    );
  }
}
export default connect(mapStateToProps)(App)
