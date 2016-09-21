import React, { Component, PropTypes } from 'react';
// Compoonents
import { StyleSheet, View } from 'react-native';
import { MKRadioButton, MKSpinner } from 'react-native-material-kit';
import RadioButton from './RadioButton.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({

  listView: {
    flex: 1,
    flexDirection: 'row'
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
    this.renderRadioButtons = this._renderRadioButtons.bind(this);
  }

  _renderRadioButtons() {
    const { items } = this.props;
    return items.map((item, key) => {
      return (
        <RadioButton
          text={item.text}
          group={this.radioGroup}
          key={key++}
        />
      );
    });
  }

  render() {
    if (!this.props.items) {
      return (
        <View>
          <MKSpinner />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {this.renderRadioButtons()}
      </View>
    );
  }
}

export default RadioOptions;
