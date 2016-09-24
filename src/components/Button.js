import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Style from '../utilities/styles.js';

const styles = Object.assign({}, StyleSheet.create({
  buttonText: {
    fontSize: Style.BUTTON_FONT_SIZE,
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    width: Style.BUTTON_WIDTH,
    marginHorizontal: Style.FORM_MARGIN_X,
    marginTop: Style.BUTTON_MARGIN_TOP,
    marginBottom: Style.BUTTON_MARGIN_BOTTOM,
    padding: Style.BUTTON_PADDING,
    borderRadius: 2
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
    this.props.onPress();
  }


  render() {
    const { text } = this.props;
    return (
      <MKButton
        style={styles.button}
        onPress={this.onPressHandler}
        backgroundColor={'#3B83B3'}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={.7}
        shadowColor="black"
        textStyle={styles.buttonText}
        rippleColor={'#DE337F'}
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
