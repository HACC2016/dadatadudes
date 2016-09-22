import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MKRadioButton, MKColor } from 'react-native-material-kit';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}));

class RadioButton extends Component {
  static propTypes = {
    group: PropTypes.object.isRequired,
    field: PropTypes.string,
    value: PropTypes.string,
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired
  }

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.onPressHandler = this._onPressHandler.bind(this);
  }

  _onPressHandler() {
    this.props.onPress({
      field: this.props.field,
      value: this.props.value
    });
  }

  render() {
    const { text, group } = this.props;
    return (
      <View style={styles.container}>
        <MKRadioButton
          onPress={this.onPressHandler}
          group={group}
          fillColor={MKColor.Teal}
          borderOnColor={MKColor.Pink}
          borderOffColor={MKColor.Green}
          rippleColor={MKColor.Blue}
        />
        <Text>{text}</Text>
      </View>
    );
  }
}

export default RadioButton;
