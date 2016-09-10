import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Navigator
} from 'react-native';
import {
  Router
} from 'react-native-router-flux';
import scenes from './routes/index.js';

class App extends Component {
  render() {
    return (
      <Router scenes={scenes} />
    );
  }
}
export default App;
