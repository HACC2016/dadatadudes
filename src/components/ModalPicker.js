import React, { Component, PropTypes } from 'react';
import ModalPicker from 'react-native-modal-picker';
import { View } from 'react-native';

class Dropdown extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      data: this.props.items.map(({ text: label }, key) => {
        return { label, key: key++ };
      })
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', padding: 50 }}>
        <ModalPicker
          data={this.state.data}
          initValue="Options"
        />
      </View>
    );
  }
}

export default Dropdown;
