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

class Content extends Component {
  render() {
    return (
      <ContentBody>
        Content here
      </ContentBody>
    );
  }
}
export default Content;
