import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form';
import {
  ScrollView,
  Text
} from 'react-native';
import { VispdatQuestions } from '../utilities/questions';
import Section from '../components/Sections.js';

class Vispdat extends Component {
  static propTypes = {
    addFormField: PropTypes.func,
    prefaceText: PropTypes.string,
    submitForm: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
    this.onChangeText = this._onChangeText.bind(this);
    this.renderSections = this._renderSections.bind(this);
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _onSubmit() {
    this.props.submitForm('hello');
  }

  _renderPrefaceText() {
    const { prefaceText } = this.props;
    if (!prefaceText) {
      return null;
    }
    return <Text>{prefaceText}</Text>;
  }

  _renderSections() {
    return VispdatQuestions.map(({ title, items }, key) => (
      <Section
        key={key}
        title={title}
        items={items}
      />
    ));
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

export default connect(null, mapDispatchToProps)(Vispdat);
