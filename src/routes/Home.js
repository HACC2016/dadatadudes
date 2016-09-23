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
    flex: 0,
    flexDirection: 'row'
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
      <ScrollView style={styles.container}>
        <TouchableHighlight onPress={Actions.PointInTimeBasic}>
          <View>
            <Text> Point In Time </Text>
            <Icon
              name="hourglass-empty"
              size={150}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.VispdatBasic}>
          <View>
            <Text> VI-SPDAT </Text>
            <Icon
              name="assignment"
              size={150}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.RefuseBasic}>
          <View>
            <Text> Refuse </Text>
            <Icon
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
