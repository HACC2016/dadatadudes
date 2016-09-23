// Need to attach current section to redux store.
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import { MKSpinner } from 'react-native-material-kit';
import Header from '../components/Header';
import FormContainer from '../components/FormContainer';
import ToggleBar from '../components/ToggleBar';
// Actions
import { loadSection } from '../actions/Form';
// Selectors
import {
  currentRouteSelector,
  pointInTimeMutationSelector
} from '../selectors/Form';
// Questions
import { PointInTimeSections } from '../utilities/questions';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as answerOptions from '../utilities/answerOptions.js';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation{
    AddReport(input: { districtId: "96744", reportedAt: "04/09/2014" }){
      reportedAt
    }
  }
`;

const styles = Object.assign({}, StyleSheet.create({
  container: {
    // marginTop: 50
  }
}));


class PointInTime extends Component {
  static propTypes = {
    currentRoute: PropTypes.string,
    loadSection: PropTypes.func,
    mutate: PropTypes.func
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.submitForm = this._submitForm.bind(this);
  }

  componentWillMount() {
    this.props.loadSection({
      currentIndex: 0,
      currentRoute: 'Point In Time',
      allSections: PointInTimeSections,
      answerOptions
    });
  }

  _submitForm() {
    this.props.mutate()
    .then((result) => {
      console.log('result', result);
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  render() {
    if (!this.props.currentRoute) {
      return <MKSpinner />;
    }
    return (
      <ScrollView style={styles.container} >
        <Header
          text={this.props.currentRoute}
        />
        <FormContainer/>
        <ToggleBar onClick={this.submitForm} />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRoute: currentRouteSelector(state),
    pointInTimeMutation: pointInTimeMutationSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadSection
  }, dispatch);
};

PointInTime = graphql(mutation)(PointInTime);
export default connect(mapStateToProps, mapDispatchToProps)(PointInTime);

