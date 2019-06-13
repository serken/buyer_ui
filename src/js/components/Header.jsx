import React, { Component } from "react";
import styled from 'styled-components'

const HeaderBody = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(10,10,10,0.1);
`

class Header extends Component {
  render() {
    return (
      <HeaderBody>
        Header here
      </HeaderBody>
    );
  }
}
export default Header;
