import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { addFormField } from '../actions/Form';
// Compoonents
import { StyleSheet, View, ListView } from 'react-native';
import { MKRadioButton, MKSpinner } from 'react-native-material-kit';
import RadioButton from './RadioButton.js';
import { processQuestions } from '../utilities/helpers';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5
  }
}));

class RadioOptions extends Component {
  static propTypes = {
    addFormField: PropTypes.func,
    field: PropTypes.string,
    items: PropTypes.array.isRequired
  }

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.radioGroup = new MKRadioButton.Group();
    this.renderRadioButtons = this._renderRadioButtons.bind(this);
  }

  _renderRadioButtons(item) {
    return (
      <RadioButton
        value={item.value}
        text={item.text}
        field={this.props.field}
        onPress={this.props.addFormField}
        group={this.radioGroup}
      />
    );
    // const { items } = this.props;
    // return items.map((item, key) => {
    //   return (
    //     <RadioButton
    //       key={key}
    //       value={item.value}
    //       text={item.text}
    //       field={this.props.field}
    //       onPress={this.props.addFormField}
    //       group={this.radioGroup}
    //     />
    //   );
    // });
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={processQuestions(this.props.items)}
        initialListSize={this.props.items.size}
        scrollRenderAhead={250}
        renderRow={this.renderRadioButtons}
      />
    );
    // if (!this.props.items) {
    //   return (
    //     <View>
    //       <MKSpinner />
    //     </View>
    //   );
    // }
    // return (
    //   <View style={styles.listView}>
    //     {this.renderRadioButtons()}
    //   </View>
    // );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFormField
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(RadioOptions);
