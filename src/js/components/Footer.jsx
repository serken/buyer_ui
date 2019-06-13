import React, { Component } from "react";
import styled from 'styled-components'

const FooterBody = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(10,10,10,0.1);
`

class Footer extends Component {
  render() {
    return (

      <FooterBody>
        Footer here
      </FooterBody>
    );
  }
}
export default Footer;
