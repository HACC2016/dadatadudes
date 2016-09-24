import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form';
import { MKTextField } from 'react-native-material-kit';

import Style from '../utilities/styles.js';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    marginVertical: Style.MARGIN_VERTICAL
  },
  textField: {
    fontSize: Style.FONT_SIZE,
    color: 'rgba(0,0,0,0.6)',
    height: Style.FONT_SIZE + 30
  },
  label: {
    fontSize: Style.FONT_SIZE - 1
  },
  polo: {
    flex: 1
  }
}));

class TextField extends Component {

  static propTypes = {
    question: PropTypes.string,
    addFormField: PropTypes.func.isRequired,
    field: PropTypes.string,
    submitForm: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.onChangeText = this._onChangeText.bind(this);
  }

  _onChangeText(value) {
    const { field, addFormField } = this.props;
    addFormField({
      field,
      value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MKTextField
          style={styles.polo}
          floatingLabelEnabled={true}
          floatingLabelFont={styles.label}
          placeholder={this.props.question}
          onChangeText={this.onChangeText}
          tintColor={"rgba(224,228,204,1)"}
          highlightColor={"#E35393"}
          textInputStyle={styles.textField}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(TextField);
