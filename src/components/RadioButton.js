import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MKRadioButton, MKColor } from 'react-native-material-kit';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: {
    alignSelf: 'center',
    marginRight: 50
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
          fillColor={`#734BC3`}
          borderOnColor={`#501EB4`}
          borderOffColor={`rgba(224,228,204,1)`}
          rippleColor={`#DE337F`}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

export default RadioButton;
