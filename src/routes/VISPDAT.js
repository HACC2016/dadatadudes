import React, { Component, PropTypes } from 'react';
import {
  ScrollView
} from 'react-native';
import Carousel from '../components/Carousel.js';
import { VispdatQuestions } from '../utilities/questions';

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

  _renderSections() {
    return VispdatQuestions.map(({ title, items }, key) => (
      <Carousel
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

export default Vispdat;
