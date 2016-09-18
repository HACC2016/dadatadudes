import React, { Component, PropTypes } from 'react';
import {
 View,
 InteractionManager
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CarouselSwitch from './CarouselSwitch.js';
import Section from '../components/Sections.js';
import { VispdatQuestions } from '../utilities/questions';
import find from 'lodash/find';
// Actions
import * as SectionActions from '../actions/Section/';

class Carousel extends Component {

  static propTypes = {
    toggleSection: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      currentTemplate: find(VispdatQuestions, ({ title }) => {
        return title === this.props.title;
      })
    };
  }

  render() {
    return (
      <View>
        <Section
          title={this.state.currentTemplate.title}
          items={this.state.currentTemplate.items}
        />
        <CarouselSwitch
          image={'../assets/Left.png'}
          onClick={this.props.toggleSection}
        />
        <CarouselSwitch
          image={'../assets/Right.png'}
          onClick={this.props.toggleSection}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...SectionActions
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Carousel);
