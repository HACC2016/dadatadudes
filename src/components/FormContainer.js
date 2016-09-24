import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Components
import Form from './Form';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {
  currentSectionTitleSelector
} from '../selectors/Form';

class FormContainer extends Component {
  static propTypes = {
    prefaceText: PropTypes.string,
    questions: PropTypes.object,
    section: PropTypes.object,
    sectionTitle: PropTypes.string
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form
        sectionTitle={this.props.sectionTitle}
      />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    sectionTitle: currentSectionTitleSelector(state)
  };
};

export default connect(mapStateToProps)(FormContainer);
