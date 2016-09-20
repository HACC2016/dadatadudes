import React, { Component, PropTypes } from 'react';
import ModalPicker from 'react-native-modal-picker';
import {
  View,
  InteractionManager,
  StyleSheet
} from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5
  },
  module: {
    flex: 1,
    position: 'relative'
  }

}));

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
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <ModalPicker
          data={this.state.data}
          initValue="Options"
          style={styles.container}
          overlayStyle={styles.module}
          sectionStyle={styles.module}
        />
      </View>
    );
  }
}

export default Dropdown;
