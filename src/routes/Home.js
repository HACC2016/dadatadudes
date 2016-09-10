import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

class Home extends Component {

  render() {
    return (
      <View>
        <TouchableHighlight onPress={Actions.login}>
          <View>
            <Text> Take your slippahs off before you walk inside the house. </Text>
            <Image
              style={{width: 50, height: 50}}
              source={{ uri:'https://avatars1.githubusercontent.com/u/6336938?v=3&s=460' }}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.pointInTime}>
          <View>
            <Text> Damn kid </Text>
            <Image
              style={{width: 50, height: 50}}
              source={{ uri:'https://avatars2.githubusercontent.com/u/11851392?v=3&s=400' }}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.vispdat}>
          <View>
            <Text> How many time I gotta tell you </Text>
            <Image
              style={{width: 50, height: 50}}
              source={{ uri:'https://avatars3.githubusercontent.com/u/11274285?v=3&s=400' }}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.refuse}>
          <View>
            <Text> You like something for cry about? </Text>
            <Image
              style={{width: 50, height: 50}}
              source={{ uri:'https://avatars0.githubusercontent.com/u/13359917?v=3&s=400' }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
export default Home;
