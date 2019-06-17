import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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

  .tableRow {
    text-decoration: none !important
  }
`

function mapStateToProps(state) {
  const { tenders, user, users } = state
  return { tenders: tenders, user: user, users: users }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

class TenderList extends Component {
  constructor(){
    super()
  }

  componentWillMount() {
  }

  render() {
    let keys = Object.keys(this.props.tenders[0] || [])
    return (
      <ContentBody>
        <div>Tennders List</div><br />
          <div><br />
            <Table>
            <TableHead>

               {keys.map((key, v) => {
                  return <TableCell key={key}>{key}</TableCell>
               })

               }
            </TableHead>
            {this.props.tenders.map((u, i) => {
               return <TableBody key={`${u.id}${u.title}`}><TableRow classes={{root: 'tableRow'}} hover component={Link} to={`/tenders/${u.id}`}>
                  {keys.map((key, v) => {
                    return <TableCell key={`${u.id}${key}`}>{u[key]}</TableCell>
                  })}
                  </TableRow></TableBody>
            })}
            </Table>
          </div>
      </ContentBody>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TenderList);
