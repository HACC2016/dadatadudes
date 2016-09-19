import React, { Component, PropTypes } from 'react';
import { bindAcitonCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import Form from './Form';

class FormContainer extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form
        section={"Route Name Placeholder"}
      />
    );
  }

}

export default FormContainer;
