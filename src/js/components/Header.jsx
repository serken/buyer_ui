import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"
import Button from './shared/Button.jsx'
import { requestSignOut } from "../actions/index"

const HeaderBody = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(10,10,10,0.1);
  min-height: 50px;
`

function mapDispatchToProps(dispatch) {
  return {
    signOut: params => dispatch(requestSignOut())
  };
}

function mapStateToProps(state) {
  const { user } = state
  return { user: user }
}

class Header extends Component {
  render() {
    return (
      <HeaderBody>
        <Button to='/'>Home</Button>
        { !this.props.user &&
          <Button to='/sign_in'>Sign In</Button>
        }
        { !this.props.user &&
          <Button to='/registration'>Register</Button>
        }
        { this.props.user &&
          <Button to='/sign_out'>Sign out</Button>
        }
        <Button to='/tenders'>Tenders</Button>
      </HeaderBody>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
