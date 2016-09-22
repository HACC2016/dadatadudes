import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MKCheckbox, MKColor } from 'react-native-material-kit';
import TextField from '../components/TextFields';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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
            fillColor={MKColor.Teal}
            borderOnColor={MKColor.Pink}
            borderOffColor={MKColor.Green}
            rippleColor={MKColor.Blue}
          />
          <Text>{this.props.text}</Text>
        </View>
        {this.showInput()}
      </View>
    );
  }
}

export default Checkbox;
