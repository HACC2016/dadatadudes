import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
}));

class Button extends Component {
  static propTypes = {
    value: PropTypes.object,
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.onPressHandler = this._onPressHandler.bind(this);
  }

  _onPressHandler() {
    this.props.onPress(this.props.value);
  }


  render() {
    const { text } = this.props;
    return (
      <MKButton
        style={{ width: 150 }}
        onPress={this.onPressHandler}
        backgroundColor={MKColor.Teal}
        shadowOffset={{ width: 0, height: 2 }}
        shadowColor="black"
        textStyle={styles.buttonText}
        rippleColor={MKColor.Blue}
      >
        <Text
          style={styles.buttonText}
        >
        {text}
        </Text>
      </MKButton>
    );
  }

}

export default Button;
