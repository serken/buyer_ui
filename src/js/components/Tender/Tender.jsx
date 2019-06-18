import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"

import { tenderRequest } from "./../../actions/index"

import TenderCard from "./../shared/TenderCard.jsx"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Badge from '@material-ui/core/Badge';
import ProposalCard from './../shared/ProposalCard.jsx'


import { Link } from 'react-router-dom';
import { find } from 'lodash'

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.5);
  min-height: 800px;
`

function mapStateToProps(state) {
  const { tenders, user, users, selectedTender } = state
  return { tenders: tenders, user: user, users: users, selectedTender: selectedTender }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTender: (params) => dispatch(tenderRequest(params))
  };
}

class Tender extends Component {
  constructor(){
    super()
  }

  componentWillMount() {
    this.props.fetchTender({ id: this.props.match.params.tenderId })
  }

  render() {
    const {
      id, img, title, price, description, proposals
    } = this.props.selectedTender || {}

    return (
      <ContentBody>
        <Container maxWidth="md" style={{background: 'darkgrey'}}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="315"
            image={img || `https://picsum.photos/900/315?${id}`}
            title="Contemplative Reptile"
          />
          <Typography gutterBottom variant="h6" component="h5">
            {title || 'Title'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price || '1.000.000'}$
          </Typography>
          <Typography gutterBottom variant="h7" component="h7">
            {description || 'Description'}
          </Typography>


          <ExpansionPanel style={{marginTop: '16px'}}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{marginTop: '12px'}}
            >
              <Badge badgeContent={proposals && proposals.length} style={{marginLeft: '5px'}} showZero color="primary">
                <Typography>Proposals</Typography>
              </Badge>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails key={'details' + (proposals && proposals.length)}>
              { proposals && proposals.length > 0 &&
                  proposals.map((proposal, index) => {
                    return <ProposalCard {...proposal} key={proposal.text + index}/>
                  })
              }
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Container>
      </ContentBody>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tender);
