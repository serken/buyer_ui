import React, { Component } from "react";
import styled from 'styled-components'
import { requestSignIn } from "../actions/index"
import { connect } from "react-redux"

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.5);
  min-height: 500px;
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
      password: ''
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
    e.preventDefault()
    this.props.signIn(this.state)
  }

  render() {
    return (
      <ContentBody>
        <div>
          login/email: <input value={this.state.login} onChange={this.onLoginChange}/><br/>
          password: <input value={this.state.password} onChange={this.onPasswordChange}/>
          <button onClick={this.onSignIn}> Submit</button>
        </div>
      </ContentBody>
    );
  }
}

const SignInForm = connect(null, mapDispatchToProps)(Form)
export default SignInForm
