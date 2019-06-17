import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"

import { Link } from 'react-router-dom';
import { find } from 'lodash'

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.5);
  min-height: 500px;
  text-align: center;
`

function mapStateToProps(state) {
  const { tenders, user, users } = state
  return { tenders: tenders, user: user, users: users }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

class Tender extends Component {
  constructor(){
    super()
  }

  componentWillMount() {
  }

  render() {
    return (
      <ContentBody>
      </ContentBody>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tender);
