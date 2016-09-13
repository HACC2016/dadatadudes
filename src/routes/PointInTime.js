import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form/index.js';
// Components
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import TextField from '../components/Login/TextFields.js';
import Checkbox from '../components/Checkbox.js';
import RadioButton from '../components/RadioButton.js';
import Dropdown from '../components/DropDown.js';

class PointInTime extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    submitForm: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
    this.onChangeText = this._onChangeText.bind(this);
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _onSubmit() {
    this.props.submitForm('good-bye');
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onSubmit}>
        <View>
          <Dropdown />
          <TextField onChangeText={this.onChangeText}> Damn kid </TextField>
          <TextField> 2 </TextField>
          <TextField> 3 </TextField>
          <TextField> 4 </TextField>
          <TextField> 5 </TextField>
          <TextField> 6 </TextField>
          <Checkbox />
          <Text> Hello </Text>
          <View>
            <View>
              <RadioButton />
              <Text> Yes </Text>
            </View>
            <View>
              <RadioButton />
              <Text> No </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PointInTime);
