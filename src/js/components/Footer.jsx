import React, { Component } from "react";
import styled from 'styled-components'

const FooterBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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
