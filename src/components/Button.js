import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 5
  },
  button: {
    height: 36,
    marginBottom: 10,
    justifyContent: 'center',
    paddingRight: 250
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
      <View style={styles.button}>
        <MKButton
          backgroundColor={MKColor.Pink}
          shadowRadius={2}
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
      </View>
    );
  }

}

export default Button;
