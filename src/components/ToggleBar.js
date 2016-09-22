import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import { View, TouchableHighlight, Image } from 'react-native';
import Button from './Button';
// Actions
import { setCurrentIndex, submitForm } from '../actions/Form';
// Selectors
import { currentIndexSelector, formInputsSelector } from '../selectors/Form';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class ToggleBar extends Component {
  static propTypes = {
    currentIndex: PropTypes.number,
    formInputs: PropTypes.object,
    submitForm: PropTypes.func,
    setCurrentIndex: PropTypes.func
  };

  mixins: [PureRenderMixin];


  constructor(props) {
    super(props);
    this.backPage = this._backPage.bind(this);
    this.nextPage = this._nextPage.bind(this);
  }

  _backPage() {
    this.props.setCurrentIndex(this.props.currentIndex - 1);
  }

  _nextPage() {
    this.props.setCurrentIndex(this.props.currentIndex + 1);
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.nextPage}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'http://placekitten.com/100/100' }}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={this.backPage}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'http://placekitten.com/250/250' }}
          />
        </TouchableHighlight>
        <Button text={"Submit"} onPress={this.props.submitForm} value={this.props.formInputs} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: currentIndexSelector(state),
    formInputs: formInputsSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCurrentIndex,
    submitForm
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleBar);
