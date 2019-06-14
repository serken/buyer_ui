import React, { Component } from "react";
import styled from 'styled-components'
import { createUserRequest } from "../actions/index"
import { connect } from "react-redux"
import Button from './shared/Button.jsx'

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
    createUser: params => dispatch(createUserRequest(params))
  };
}

class Form extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: '',
      email: ''
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

  createUser(e) {
    this.props.createUser(this.state)
  }

  render() {
    return (
      <ContentBody>
        <div>
          login: <input value={this.state.login} onChange={this.onLoginChange}/><br/>
          email: <input value={this.state.email} onChange={this.onEmailChange}/><br/>
          password: <input value={this.state.password} onChange={this.onPasswordChange}/><br/>
          <Button onClick={this.createUser} to="/"> Submit</Button>
        </div>
      </ContentBody>
    );
  }
}

const Registration = connect(null, mapDispatchToProps)(Form)
export default Registration
