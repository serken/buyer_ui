import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`


class App extends Component {
  render() {
    return (
      <Body>
        <Header />
        <Content />
        <Footer />
      </Body>
    );
  }
}
export default App;
