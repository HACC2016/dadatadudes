import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form/index.js';
import FormQuestion from '../components/FormQuestion.js';
import {
  ScrollView,
  Text
} from 'react-native';
import { vispdat } from '../utilities/questions.js';

// const styles = Object.assign({}, StyleSheet.create({

//   row: {
//     flexDirection: 'row'
//   },

//   col1: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 20, marginRight: 20
//   },

//   col2: {
//     flex: 2,
//     flexDirection: 'column',
//     marginLeft: 20, marginRight: 20
//   },

//   titleText: {
//     fontSize: 15,
//     fontWeight: 'bold'
//   }

// }));

class Vispdat extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    submitForm: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
    this.onChangeText = this._onChangeText.bind(this);
    this.renderQuestions = this._renderQuestions.bind(this);
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _renderQuestions() {
    return vispdat.map(({ question, type, answers }, key) => (
      <FormQuestion
        key={key}
        question={question}
        type={type}
        answers={answers}
      />
    ));
  }

  _onSubmit() {
    this.props.submitForm('hello');
  }

  render() {
    if (!vispdat) {
      return (
        <ScrollView>
          <Text>Loading...</Text>
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        {this.renderQuestions()}
      </ScrollView>
    );
  }

  // render() {
  //   return (
  //     <ScrollView>
  //       <SectionHeader sectionTitle="Basic Information" />
  //       <TextField
  //         onChangeText={this.onChangeText}
  //         question="Fist Name"
  //       />
  //       <TextField
  //         onChangeText={this.onChangeText}
  //         question="Nickname"
  //       />
  //       <TextField
  //         onChangeText={this.onChangeText}
  //         question="Last Name"
  //       />
  //       <TextField
  //         onChangeText={this.onChangeText}
  //         question="In what language do you feel best able to express yourself?"
  //       />
  //       <TextField
  //         onChangeText={this.onChangeText}
  //         question="Date of Birth"
  //       />
  //       <TextField
  //         onChangeText={this.onChangeText}
  //         question="Age"
  //       />
  //       <TextField
  //         onChangeText={this.onChangeText}
  //         question="Social Security Number"
  //       />
  //       <RadioButton
  //         text="Consent to participate"
  //       />
  //       <SectionHeader sectionTitle="History of Housing and Homelessness" />
  //       <Text style={styles.titleText}>Where do you sleep most frequently?</Text>
  //       <View style={styles.row}>
  //         <View style={styles.col2}>
  //           <Checkbox checkOption="Shelters" />
  //         </View>
  //         <View style={styles.col2}>
  //           <Checkbox checkOption="Transitional Housing" />
  //         </View>
  //       </View>
  //       <View style={styles.row}>
  //         <View style={styles.col2}>
  //           <Checkbox checkOption="Safe Haven" />
  //         </View>
  //         <View style={styles.col2}>
  //           <Checkbox checkOption="Outdoors" />
  //         </View>
  //       </View>
  //       <View style={styles.row}>
  //         <View style={styles.col2}>
  //           <Checkbox checkOption="Other (specify):" />
  //           <TextField
  //             onChangeText={this.onChangeText}
  //           />
  //         </View>
  //         <View style={styles.col2}>
  //           <Checkbox checkOption="Refused" />
  //         </View>
  //       </View>
  //       <DropDown
  //         dropDownTitle="How long has it been since you lived in permanent stable housing?"
  //         items={this.persons}
  //       />
  //     </ScrollView>
  //   );
  // }
}

// const mapStateToProps = (state) => {
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Vispdat);
