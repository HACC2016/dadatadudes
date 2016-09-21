import React, { Component, PropTypes } from 'react';
// Actions
import {
  Actions
} from 'react-native-router-flux';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBar from '../components/NavBar.js';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100
  },
  image: {
    height: 250,
    width: 250
  },
  background: {
    backgroundColor: 'black'
  },
  centerText: {
    fontSize: 50,
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

  render() {
    return (
      <View style={styles.background}>
        <View>
          <NavBar
            text="Homelss Observation & Mapping Engine"
          />
        </View>
        <View style={styles.base}>
          <TouchableHighlight onPress={Actions.pointInTime}>
            <View>
              <Text style={styles.centerText}> Point In Time </Text>
              <Icon
                name="hourglass-empty"
                size={300}
                color="#00bfff"
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={Actions.vispdat}>
            <View>
              <Text style={styles.centerText}> VI-SPDAT </Text>
              <Icon
                name="assignment"
                size={300}
                color="#ffe4c4"
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={Actions.refuse}>
            <View>
              <Text style={styles.centerText}> Refuse </Text>
              <Icon
                name="warning"
                size={300}
                color="#ff7f50"
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Home;
