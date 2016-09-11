import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FormActions from '../actions/Form/index.js';

class PointInTime extends Component {

  static propTypes = {
    submitForm: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit() {
    this.props.submitForm('good-bye');
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onSubmit}>
        <View>
          <Text> Damn kid </Text>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'https://avatars2.githubusercontent.com/u/11851392?v=3&s=400' }}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PointInTime);
