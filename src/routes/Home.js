import React, { Component, PropTypes } from 'react';
// Actions
import {
  Actions
} from 'react-native-router-flux';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  route: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));

class Home extends Component {
  static propTypes = {
    loadAnswerOptions: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableHighlight onPress={Actions.PointInTimeBasic}>
          <View style={styles.route} >
            <Text> Point In Time </Text>
            <Icon
              name="hourglass-empty"
              color={"#0a64a0"}
              size={150}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.VispdatBasic}>
          <View style={styles.route} >
            <Text> VI-SPDAT </Text>
            <Icon
              color={"#501eb4"}
              name="assignment"
              size={150}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.Refuse}>
          <View style={styles.route} >
            <Text> Refuse </Text>
            <Icon
              color={"#dc2878"}
              name="warning"
              size={150}
            />
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

export default Home;
