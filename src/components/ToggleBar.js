import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import { View, TouchableHighlight, Image } from 'react-native';
// Actions
import { setCurrentIndex } from '../actions/Form';
// Selectors
import { currentIndexSelector } from '../selectors/Form';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class ToggleBar extends Component {
  static propTypes = {
    currentIndex: PropTypes.number,
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
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: currentIndexSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCurrentIndex
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleBar);
