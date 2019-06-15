import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"
import { tendersRequest } from "../actions/index"

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.5);
  min-height: 500px;
  text-align: center;

  table {
    border-collapse: collapse;
  }

  td {
    border: 1px solid;
  }
`

function mapStateToProps(state) {
  const { tenders, user } = state
  return { tenders: tenders, user: user }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTenders: () => dispatch(tendersRequest())
  };
}

class Tender extends Component {
  constructor(){
    super()
  }

  componentWillMount() {
    this.props.fetchTenders()
  }

  render() {
    let keys = Object.keys(this.props.tenders[0] || [])
    return (
      <ContentBody>
        <div>Tender List</div><br />
        { this.props.user &&
          <div><br />
            <table>
            <thead>

               {keys.map((key, v) => {
                  return <th>{key}</th>
               })

               }
            </thead>
            {this.props.tenders.map((u, i) => {
               return <tbody><tr>
                  {keys.map((key, v) => {
                    return <td>{u[key]}</td>
                  })}
                  </tr></tbody>
            })}
            </table>
          </div>
        }
      </ContentBody>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tender);
