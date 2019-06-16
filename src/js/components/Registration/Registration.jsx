import React, { Component } from "react";
import styled from 'styled-components'
import { createUserRequest } from "./../../actions/index"
import { connect } from "react-redux"
import Button from './../shared/Button.jsx'
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
    createUser: params => dispatch(createUserRequest(params))
  };
}

class RegistrationForm extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: '',
      email: '',
      redirect: false
    }
    this.onLoginChange = this.onLoginChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  componentDidMount() {
  }

  onLoginChange(input) {
    this.setState({login: input.target.value})
  }

  onEmailChange(input) {
    this.setState({email: input.target.value})
  }

  onPasswordChange(input) {
    this.setState({password: input.target.value})
  }

  createUser(values, actions) {
    this.setState({redirect: true})
    this.props.createUser(values)
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />
    }
    return (
      <ContentBody>
        <Formik onSubmit={this.createUser} render={props => <Form {...props} />}/>
      </ContentBody>
    );
  }
}

const Registration = connect(null, mapDispatchToProps)(RegistrationForm)
export default Registration
