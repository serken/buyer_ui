import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"
import { usersRequest } from "../actions/index"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
            <Table>
            <TableHead>

               {keys.map((key, v) => {
                  return <TableCell>{key}</TableCell>
               })

               }
            </TableHead>
            {this.props.users.map((u, i) => {
               return <TableBody><TableRow>
                  {keys.map((key, v) => {
                    return <TableCell>{u[key]}</TableCell>
                  })}
                  </TableRow></TableBody>
            })}
            </Table>
          </div>
        }
      </ContentBody>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
