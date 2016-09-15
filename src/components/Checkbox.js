import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MKCheckbox, MKColor } from 'react-native-material-kit';
import TextField from '../components/Login/TextFields.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Checkbox extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleChange = this._handleChange.bind(this);
    this.showInput = this._showInput.bind(this);
  }

  _handleChange() {
    const { type } = this.props;
    if (type === 'input') {
      this.setState({
        checked: !this.state.checked
      });
    }
  }

  _showInput() {
    const { checked } = this.state;
    if (checked) {
      return (
        <TextField />
      );
    }
    return null;
  }

  render() {
    return (
      <View>
        <MKCheckbox
          checked={this.state.checked}
          onCheckedChange={this.handleChange}
          fillColor={MKColor.Teal}
          borderOnColor={MKColor.Pink}
          borderOffColor={MKColor.Green}
          rippleColor={MKColor.Blue}
        />
        <Text>{this.props.text}</Text>
        {this.showInput()}
      </View>
    );
  }
}

export default Checkbox;
