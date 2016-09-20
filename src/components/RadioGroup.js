import React, { Component, PropTypes } from 'react';
// Compoonents
import {
  ListView,
  InteractionManager,
  View,
  StyleSheet
} from 'react-native';
import { MKRadioButton, MKSpinner } from 'react-native-material-kit';
import RadioButton from './RadioButton.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {
  processQuestions
} from '../utilities/helpers';

const styles = Object.assign({}, StyleSheet.create({

  listView: {
    flex: 1,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flex: 0,
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
    this.state = {
      dataSource: false
    };
  }

  componentDidMount() {
    if (this.props.items) {
      InteractionManager.runAfterInteractions(() => {
        this.setState({
          dataSource: processQuestions(this.props.items)
        });
      });
    }
  }

  _renderRadioGroupItems(item) {
    return (
      <View style={styles.col}>
        <RadioButton
          text={item.text}
          group={this.radioGroup}
        />
      </View>
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
        horizontal={true}
        style={styles.listView}
      />
    );
  }
}

export default RadioOptions;
