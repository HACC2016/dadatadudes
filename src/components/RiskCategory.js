import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const styles = Object.assign({}, StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    flexDirection: 'column'
  }
}));

class RiskCategory extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    base: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>{this.props.title}</Text>
        </View>
        <View style={styles.col}>
          <Text>/{this.props.base}</Text>
        </View>
      </View>
    );
  }
}

export default RiskCategory;
