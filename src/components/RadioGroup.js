import React, { Component, PropTypes } from 'react';
// Compoonents
import { View } from 'react-native';
import { MKRadioButton } from 'react-native-material-kit';
import RadioButton from './RadioButton.js';

class RadioOptions extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.radioGroup = new MKRadioButton.Group();
    this.renderRadioGroupItems = this._renderRadioGroupItems.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    console.log('RADIO GROUP next props', nextProps);
    return false;
  }

  _renderRadioGroupItems() {
    const { items } = this.props;
    return items.map((item, key) => {
      return (
        <RadioButton
          key={key}
          text={item.text}
          group={this.radioGroup}
        />
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderRadioGroupItems()}
      </View>
    );
  }
}

export default RadioOptions;
