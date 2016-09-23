import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form';
import { MKColor, MKTextField } from 'react-native-material-kit';

const styles = Object.assign({}, StyleSheet.create({
  textField: {
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
      <View>
        <MKTextField
          floatingLabelEnabled={true}
          placeholder={this.props.question}
          onChangeText={this.onChangeText}
          tintColor={`rgba(224,228,204,1)`}
          highlightColor= {'rgba(250,105,0,0.6)'}
          textInputStyle={{ color: 'rgba(0,0,0,0.65)' }}
          style={styles.textField}
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
