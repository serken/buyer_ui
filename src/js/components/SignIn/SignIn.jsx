import React, { Component } from "react";
import styled , { css } from 'styled-components'
import { requestSignIn } from "./../../actions/index"
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

import { Formik, Field, ErrorMessage } from 'formik'
import { Form } from './Form.jsx'

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.5);
  min-height: 500px;
  form {
    width: 500px;
  }
`

function mapDispatchToProps(dispatch) {
  return {
    signIn: params => dispatch(requestSignIn(params))
  };
}

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: '',
      errors: {
        login: false,
        password: false
      },
      redirect: false
    }
    this.onSignIn = this.onSignIn.bind(this)
  }

  componentDidMount() {
  }

  onSignIn(values, actions) {
    this.props.signIn(values)
    this.setState({redirect: true})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />
    }
    return (
      <ContentBody>
        <Formik onSubmit={this.onSignIn} render={props => <Form {...props} />}/>
      </ContentBody>
    );
  }
}

SignIn = connect(null, mapDispatchToProps)(SignIn)
export default SignIn
