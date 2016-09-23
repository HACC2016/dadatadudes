import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import Button from './Button';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Actions
import { setCurrentIndex, submitForm } from '../actions/Form';
// Selectors
import { currentIndexSelector, formInputsSelector } from '../selectors/Form';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flexDirection: 'column',
    marginLeft: 50,
    marginRight: 50
  }
});

class ToggleBar extends Component {
  static propTypes = {
    currentIndex: PropTypes.number,
    formInputs: PropTypes.object,
    onClick: PropTypes.func,
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
      <View style={styles.base}>
        <View style={styles.row}>
          <TouchableHighlight onPress={this.nextPage}>
            <View style={styles.col}>
              <Icon
                name="keyboard-arrow-left"
                size={100}
                color="#00bfff"
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.backPage}>
            <View style={styles.col}>
              <Icon
                name="keyboard-arrow-right"
                size={100}
                color="#00bfff"
              />
            </View>
          </TouchableHighlight>
        </View>
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
