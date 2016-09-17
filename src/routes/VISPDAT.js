import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form/index.js';
import { View } from 'react-native';
import Section from '../components/Section.js';
import { vispdatQuestions } from '../utilities/questions.js';


class Vispdat extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    submitForm: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
    this.onChangeText = this._onChangeText.bind(this);
    this.renderQuestions = this._renderQuestions.bind(this);
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _renderSections() {
    return vispdatQuestions.map(({ title, questions }, key) => (
      <Section
        key={key}
        title={title}
        questions={questions}
      />
    ));
  }

  _onSubmit() {
    this.props.submitForm('hello');
  }

  render() {
    return (
      <View>
        {this.renderSections()}
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Vispdat);

// const styles = Object.assign({}, StyleSheet.create({

//   row: {
//     flexDirection: 'row'
//   },

//   col1: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 20, marginRight: 20
//   },

//   col2: {
//     flex: 2,
//     flexDirection: 'column',
//     marginLeft: 20, marginRight: 20
//   },

//   titleText: {
//     fontSize: 15,
//     fontWeight: 'bold'
//   }

// }));
