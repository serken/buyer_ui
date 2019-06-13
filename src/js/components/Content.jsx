import React, { Component } from "react";
import styled from 'styled-components'

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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
