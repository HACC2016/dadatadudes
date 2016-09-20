// Need to attach current section to redux store.
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import {
  ScrollView
} from 'react-native';
import { MKSpinner } from 'react-native-material-kit';
import Header from '../components/Header';
import FormContainer from '../components/FormContainer';
import ToggleBar from '../components/ToggleBar';
// Actions
import { loadSection } from '../actions/Form';
// Selectors
import {
  currentRouteSelector
} from '../selectors/Form';
// Questions
import { RefusedSections } from '../utilities/questions';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as answerOptions from '../utilities/answerOptions.js';

class TestRoute extends Component {
  static propTypes = {
    currentRoute: PropTypes.string,
    loadSection: PropTypes.func
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadSection({
      currentIndex: 0,
      currentRoute: 'Refused',
      allSections: RefusedSections,
      answerOptions
    });
  }

  render() {
    if (!this.props.currentRoute) {
      return <MKSpinner />;
    }
    return (
      <ScrollView>
        <Header
          text={this.props.currentRoute}
        />
        <FormContainer />
        <ToggleBar />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRoute: currentRouteSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadSection
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TestRoute);
