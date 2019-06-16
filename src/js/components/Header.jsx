import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import { Link } from 'react-router-dom';
//import Button from '@material-ui/core/Button';

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
        <Button variant="contained" component={Link} to='/'>Home</Button>
        { !this.props.user &&
          <Button variant="contained" component={Link} to='/sign_in'>Sign In</Button>
        }
        { !this.props.user &&
          <Button variant="contained" component={Link} to='/registration'>Register</Button>
        }
        { this.props.user &&
          <Button variant="contained" component={Link} onClick={this.props.signOut} to="/">Sign out</Button>
        }
        { this.props.user &&
          <Button variant="contained" component={Link} to="/users">Users list</Button>
        }
        <Button variant="contained" component={Link} to='/tenders'>Tenders</Button>

        { this.props.user &&
          <Button variant="contained" component={Link} to="/create_tender">Create Tender</Button>
        }
      </HeaderBody>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
