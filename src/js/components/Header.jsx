import React, { Component } from "react";
import styled from 'styled-components'

import Button from './shared/Button.jsx'

const HeaderBody = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(10,10,10,0.1);
  min-height: 50px;
`

class Header extends Component {
  render() {
    return (
      <HeaderBody>
        Header here
        <br />
        <Button href='/'>Root</Button>
      </HeaderBody>
    );
  }
}
export default Header;
