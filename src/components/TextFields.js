import React, { Component, PropTypes } from 'react';
import {
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form';
import { MKColor, MKTextField } from 'react-native-material-kit';

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
          onChangeText={this.onChangeText}
          tintColor={MKColor.Lime}
          textInputStyle={{ color: MKColor.Orange }}
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
