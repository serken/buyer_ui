import React, { Component } from "react";
import styled from 'styled-components'

const HeaderBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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
