import React, { Component, PropTypes } from 'react';
// Compoonents
import { ListView, InteractionManager, View } from 'react-native';
import { MKRadioButton, MKSpinner } from 'react-native-material-kit';
import RadioButton from './RadioButton.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class RadioOptions extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.radioGroup = new MKRadioButton.Group();
    this.renderRadioGroupItems = this._renderRadioGroupItems.bind(this);
    this.state = {
      dataSource: false
    };
  }

  componentDidMount() {
    if (this.props.items) {
      InteractionManager.runAfterInteractions(() => {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          dataSource: ds.cloneWithRows(this.props.items)
        });
      });
    }
  }

  _renderRadioGroupItems(item) {
    return (
      <RadioButton
        text={item.text}
        group={this.radioGroup}
      />
    );
  }

  render() {
    if (!this.state.dataSource) {
      return (
        <View>
          <MKSpinner />
        </View>
      );
    }
    return (
      <ListView
        initialListSize={this.props.items.length}
        dataSource={this.state.dataSource}
        scrollRenderAhead={100}
        renderRow={this.renderRadioGroupItems}
      />
    );
  }
}

export default RadioOptions;
