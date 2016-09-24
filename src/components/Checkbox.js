import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MKCheckbox, MKColor } from 'react-native-material-kit';
import TextField from '../components/TextFields';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Style from '../utilities/styles.js';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginRight: 40,
    fontSize: Style.FONT_SIZE
  }
}));

class Checkbox extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    field: PropTypes.string,
    value: PropTypes.string,
    onPress: PropTypes.func,
    type: PropTypes.string
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.onCheckedHandler = this._onCheckedHandler.bind(this);
    this.showInput = this._showInput.bind(this);
  }

  _onCheckedHandler() {
    this.props.onPress({
      field: this.props.field,
      value: this.props.value
    });
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
        <View style={styles.container}>
          <MKCheckbox
            checked={this.state.checked}
            onCheckedChange={this.onCheckedHandler}
            fillColor={`#734BC3`}
            borderOnColor={`#501EB4`}
            borderOffColor={`rgba(224,228,204,1)`}
            rippleColor={`#DE337F`}
          />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        {this.showInput()}
      </View>
    );
  }
}

export default Checkbox;
