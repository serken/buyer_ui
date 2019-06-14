import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.5);
  min-height: 500px;
`


function mapStateToProps(state) {
  const { user } = state
  return { user: user }
}

class Content extends Component {
  render() {
    return (
      <ContentBody>
        { this.props.user &&
          <div>
            Welcome, {this.props.user.email}
          </div>
        }
        {
          !this.props.user &&
          <div>
            Welcome, please sign in!
          </div>
        }
      </ContentBody>
    );
  }
}
export default connect(mapStateToProps)(Content);
