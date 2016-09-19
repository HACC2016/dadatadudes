import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

// const styles = Object.assign({}, StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     backgroundColor: 'red'
//   }
// }));

class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <h3>{this.props.title}</h3>
      </View>
    );
  }

}

export default Header;
