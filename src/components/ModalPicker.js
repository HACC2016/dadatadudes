import React, { Component, PropTypes } from 'react';
import ModalPicker from 'react-native-modal-picker';
import {
  View,
  Text,
  InteractionManager
} from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Dropdown extends Component {

  static propTypes = {
    items: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      data: []
    };
  }

  mixins: [PureRenderMixin];

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      if (this.props.items) {
        this.setState({
          data: this.props.items.map(({ text: label }, key) => {
            return { label, key: key++ };
          })
        });
      }
    });
  }

  render() {
    if (!this.state.data) {
      return (
        <View>
          <Text> fuk uggjjjj</Text>
        </View>
      );
    }
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
