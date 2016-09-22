import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { addFormField } from '../actions/Form';
import ModalPicker from 'react-native-modal-picker';
import {
  View,
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
    addFormField: PropTypes.func,
    field: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.string
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    /**
     * Need to remap to fit ModalPicker object schema
     */
    this.state = {
      data: this.props.items.map(({ text: label }, key) => {
        return { label, key: key++ };
      })
    };
    this.onChangeHandler = this._onChangeHandler.bind(this);
  }

  _onChangeHandler(data) {
    this.props.addFormField({
      field: this.props.field,
      value: data.label
    });
  }

  render() {
    return (
      <View style={{ width: 1000 }}>
        <ModalPicker
          data={this.state.data}
          onChange={this.onChangeHandler}
          initValue="Options"
          style={styles.container}
          overlayStyle={styles.module}
          sectionStyle={styles.module}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFormField
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Dropdown);
