import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import {
  Actions
} from 'react-native-router-flux';
import {
  loadAnswerOptions
} from '../actions/AnswerOptions';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
// Utilities
import { PointInTimeQuestions } from '../utilities/questions';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    height: 250,
    width: 250
  },
  background: {
    backgroundColor: '#BDBDBD'
  },
  centerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

class Home extends Component {
  static propTypes = {
    loadAnswerOptions: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadAnswerOptions({
      field: 'PointInTime',
      prefaceText: PointInTimeQuestions.prefaceText,
      value: PointInTimeQuestions.questions
    });
  }

  render() {
    return (
      <View style={styles.base}>
        <TouchableHighlight onPress={Actions.pointInTime}>
          <View>
            <Text style={styles.centerText}> Point In Time </Text>
            <Image
              style={styles.image}
              source={{ uri: 'https://avatars2.githubusercontent.com/u/11851392?v=3&s=400' }}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.vispdat}>
          <View>
            <Text style={styles.centerText}> VISPDAT </Text>
            <Image
              style={styles.image}
              source={{ uri: 'https://avatars3.githubusercontent.com/u/11274285?v=3&s=400' }}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.refuse}>
          <View>
            <Text style={styles.centerText}> Refuse </Text>
            <Image
              style={styles.image}
              source={{ uri: 'https://avatars0.githubusercontent.com/u/13359917?v=3&s=400' }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadAnswerOptions
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);
