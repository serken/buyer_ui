import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"
import TenderCard from "./shared/TenderCard.jsx"

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.5);
  min-height: 500px;
`

function mapStateToProps(state) {
  const { user, tenders } = state
  return { user: user, tenders: tenders }
}

class Content extends Component {
  render() {
    return (
      <ContentBody>
      { this.props.tenders.map((tender, index) => {
          return  <TenderCard {...tender} />
      })
      }
      </ContentBody>
    );
  }
}
export default connect(mapStateToProps)(Content);
