import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { addFormField } from '../actions/Form';
import ModalPicker from 'react-native-modal-picker';
import {
  View,
  Picker,
  StyleSheet
} from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({

}));

class Dropdown extends Component {
  static propTypes = {
    addFormField: PropTypes.func,
    field: PropTypes.string,
    items: PropTypes.array
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    /**
     * Need to remap to fit ModalPicker object schema
     */
    this.onChangeHandler = this._onChangeHandler.bind(this);
    this.renderPickerItems = this._renderPickerItems.bind(this);
    this.state = {
      selected: {}
    };
  }

  _renderPickerItems() {
    return this.props.items.map((item) => {
      return (
        <Picker.Item label={item.text} value={item.value} />
      );
    });
  }

  _onChangeHandler(value) {
    this.props.addFormField({
      field: this.props.field,
      value
    });
    this.setState({ selected: value });
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.selected}
        onValueChange={this.onChangeHandler}
      >
        {this.renderPickerItems()}
      </Picker>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFormField
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Dropdown);
