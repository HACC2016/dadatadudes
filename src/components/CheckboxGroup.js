import React, { Component, PropTypes } from 'react';
// Compoonents
import { View, StyleSheet } from 'react-native';
import Checkbox from './Checkbox.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row'
  }

}));

class CheckboxGroup extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.renderCheckboxItems = this._renderCheckboxItems.bind(this);
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
      <View style={styles.container}>
        {this.renderCheckboxItems()}
      </View>
    );
  }
}

export default CheckboxGroup;
