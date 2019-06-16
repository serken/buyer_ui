import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"
import { Formik, Field, ErrorMessage } from 'formik'
import { Redirect } from 'react-router-dom'
import { createTenderRequest } from "./../../actions/index"
import { Form } from './Form.jsx'

const ContentBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #D8D8D8;
  background-color: rgba(100,100,100,0.4);
  min-height: 500px;
  justify-content: center;
  text-align: center;

  form {
    width: 400px;
  }
`

function mapStateToProps(state) {
  const { tenders, user, categories } = state
  return { tenders: tenders, user: user, categories: categories }
}

function mapDispatchToProps(dispatch) {
  return {
    createTender: params => dispatch(createTenderRequest(params))
  };
}

class CreateTenderForm extends Component {
  constructor(){
    super()
    this.state = {
      redirect: false
    }
    this.createTender = this.createTender.bind(this)
  }

  createTender(values, actions) {
    this.setState({redirect: true})
    this.props.createTender(values)
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />
    }
    let categories = this.props.categories
    return (
      <ContentBody>
        <Formik onSubmit={this.createTender} render={props => <Form {...props} categories={categories} />}/>
      </ContentBody>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTenderForm)
