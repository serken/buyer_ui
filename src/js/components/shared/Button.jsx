import React, { Component } from "react";
import styled from 'styled-components'

const StyledButton = styled.a`
  width: 60px;
  height: 20px;
  cursor: pointer;
  border: 1px solid #888888;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  color: black !important;
`

class Button extends Component {
  render() {
    return (
      <StyledButton {...this.props}>
        {this.props.children}
      </StyledButton>
    );
  }
}
export default Button;
