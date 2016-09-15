import React, { Component, PropTypes } from 'react';
// Compoonents
import { View } from 'react-native';
import Checkbox from './Checkbox.js';

class CheckboxGroup extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.renderCheckboxItems = this._renderCheckboxItems.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    console.log('CHECKBOX GROUP next props', nextProps);
    return false;
  }

  _renderCheckboxItems() {
    const { items } = this.props;
    return items.map((item, key) => {
      return (
        <Checkbox
          key={key}
          text={item.text}
          type={item.type}
        />
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderCheckboxItems()}
      </View>
    );
  }
}

export default CheckboxGroup;
