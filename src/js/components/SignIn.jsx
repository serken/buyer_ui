import React, { Component } from "react";
import styled from 'styled-components'

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.5);
  min-height: 500px;
`

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: ''
    }
    this.onLoginChange = this.onLoginChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  componentDidMount() {
  }

  onLoginChange(input) {
    this.setState({login: input.target.value})
  }

  onPasswordChange(input) {
    this.setState({password: input.target.value})
  }

  render() {
    return (
      <ContentBody>
        <div>
          login/email: <input value={this.state.login} onChange={this.onLoginChange}/><br/>
          password: <input value={this.state.password} onChange={this.onPasswordChange}/>
          <button> Submit</button>
        </div>
      </ContentBody>
    );
  }
}
export default SignIn
