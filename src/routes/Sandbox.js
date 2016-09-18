import React, { Component, PropTypes } from 'react';
import WifiManager from 'react-native-wifi-manager';
import {
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

class Sandbox extends Component {
  static propTypes = {
    loadAnswerOptions: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      wifiStatus: ''
    };
    this.checkWifiStatus = this._checkWifiStatus.bind(this);
  }

  _checkWifiStatus() {
    WifiManager.status((status) => {
      this.setState({
        wifiStatus: status
      });
    });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={this.checkWifiStatus}
        >
          <Text>Check Wifi status</Text>
        </TouchableWithoutFeedback>
        <Text> {this.state.wifiStatus} </Text>
        <Text>Sample</Text>
      </View>
    );
  }
}

export default Sandbox;
