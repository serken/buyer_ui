import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux"
import { Formik, Field, ErrorMessage } from 'formik'
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
  };
}

class CreateTenderForm extends Component {
  render() {
    return (
      <ContentBody>
        <Formik render={props => <Form {...props} />}/>
      </ContentBody>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTenderForm)
