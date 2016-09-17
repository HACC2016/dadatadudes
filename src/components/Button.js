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
    text: PropTypes.string.isRequired,
    onPressHandler: PropTypes.func.isRequired
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
  }
  
  render() {
    const { text, onPressHandler } = this.props;
    return (
      <MKButton
        backgroundColor={MKColor.Pink}
        textStyle={styles.buttonText}
        onPress={onPressHandler}
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
