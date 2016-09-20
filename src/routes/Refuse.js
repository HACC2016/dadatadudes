import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form';
import {
  ScrollView
} from 'react-native';
import { RefusedQuestions } from '../utilities/questions';
import Section from '../components/Sections.js';

class Refuse extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    submitForm: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
    this.renderSections = this._renderSections.bind(this);
  }

  _renderSections() {
    return RefusedQuestions.map(({ title, items }, key) => (
      <Section
        key={key}
        title={title}
        items={items}
      />
    ));
  }

  _onSubmit() {
    this.props.submitForm('hello');
  }

  render() {
    return (
      <ScrollView>
        {this.renderSections()}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Refuse);
