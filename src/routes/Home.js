import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
// Components
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

  render() {
    return (
      <View style={styles.base}>
        <TouchableHighlight onPress={Actions.pointInTime}>
          <View>
            <Text style={styles.centerText}> Point In Time </Text>
            <Image
              style={styles.image}
              source={{ uri:'https://avatars2.githubusercontent.com/u/11851392?v=3&s=400' }}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.vispdat}>
          <View>
            <Text style={styles.centerText}> VISPDAT </Text>
            <Image
              style={styles.image}
              source={{ uri:'https://avatars3.githubusercontent.com/u/11274285?v=3&s=400' }}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.refuse}>
          <View>
            <Text style={styles.centerText}> Refuse </Text>
            <Image
              style={styles.image}
              source={{ uri:'https://avatars0.githubusercontent.com/u/13359917?v=3&s=400' }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
export default Home;
