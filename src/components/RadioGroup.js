import React, { Component, PropTypes } from 'react';
// Compoonents
import { View, StyleSheet } from 'react-native';
import { MKRadioButton } from 'react-native-material-kit';
import RadioButton from './RadioButton.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
}));

class RadioOptions extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.radioGroup = new MKRadioButton.Group();
    this.renderRadioGroupItems = this._renderRadioGroupItems.bind(this);
  }

  _renderRadioGroupItems() {
    const { items } = this.props;
    return items.map((item, key) => {
      console.log('item', item);
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
      <View style={styles.container}>
        {this.renderRadioGroupItems()}
      </View>
    );
  }
}

export default RadioOptions;
