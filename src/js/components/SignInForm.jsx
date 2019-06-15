import React, { Component } from "react";
import styled , { css } from 'styled-components'
import { requestSignIn } from "../actions/index"
import { connect } from "react-redux"
import Button from './shared/Button.jsx'
import { Redirect } from 'react-router-dom'

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.5);
  min-height: 500px;
`

const StyledInput = styled.input`
  border: ${props => props.error ? "1px solid red" : "none"}
`

function mapDispatchToProps(dispatch) {
  return {
    signIn: params => dispatch(requestSignIn(params))
  };
}

class Form extends Component {
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
    this.onLoginChange = this.onLoginChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onSignIn = this.onSignIn.bind(this)
  }

  componentDidMount() {
  }

  onLoginChange(input) {
    this.setState({login: input.target.value})
  }

  onPasswordChange(input) {
    this.setState({password: input.target.value})
  }

  onSignIn(e) {
    if(this.state.login == '' || this.state.password == ''){
      this.setState({ errors: { login: this.state.login == '', password: this.state.errors.password == '' }})
      this.setState({redirect: false})
    } else {
      this.props.signIn(this.state)
      this.setState({redirect: true})
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />
    }
    return (
      <ContentBody>
        <div>
          login/email: <StyledInput error={this.state.errors.login} value={this.state.login} onChange={this.onLoginChange}/><br/>
          password: <StyledInput error={this.state.errors.password} value={this.state.password} onChange={this.onPasswordChange}/><br/>
          <Button onClick={this.onSignIn}> Submit</Button>
        </div>
      </ContentBody>
    );
  }
}

const SignInForm = connect(null, mapDispatchToProps)(Form)
export default SignInForm
