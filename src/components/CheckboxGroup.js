import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { addFormField } from '../actions/Form';
// Compoonents
import { MKSpinner } from 'react-native-material-kit';
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
    addFormField: PropTypes.func,
    items: PropTypes.array.isRequired,
    field: PropTypes.string
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
          value={item.value}
          text={item.text}
          field={this.props.field}
          onPress={this.props.addFormField}
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
        {this.renderCheckboxItems()}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFormField
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(CheckboxGroup);
