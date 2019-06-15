import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"
import { usersRequest } from "../actions/index"

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
  const { users, user } = state
  return { users: users, user: user }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(usersRequest())
  };
}

class Users extends Component {
  constructor(){
    super()
  }

  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {
    let keys = Object.keys(this.props.users[0] || [])
    return (
      <ContentBody>
        <div>Users List</div><br />
        { this.props.user &&
          <div><br />
            <table>
            <thead>

               {keys.map((key, v) => {
                  return <td>{key}</td>
               })

               }
            </thead>
            {this.props.users.map((u, i) => {
               return <tr>
                  {keys.map((key, v) => {
                    return <td>{u[key]}</td>
                  })}
                  </tr>
            })}
            </table>
          </div>
        }
      </ContentBody>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
