import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import PureRenderMixin from 'react-addons-pure-render-mixin';


const styles = Object.assign({}, StyleSheet.create({

  container: {
    flex: 1
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold'
  }

}));

class NavBar extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
  }

  render() {
    const titleConfig = {
      title: this.props.text
    };

    return (
      <View style={styles.container}>
        <NavigationBar
          title={titleConfig}
          tintColor="#ffff00"
          style={styles.title}
        />
      </View>
    );
  }
}

export default NavBar;
