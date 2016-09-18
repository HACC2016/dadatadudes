import React, { Component, PropTypes } from 'react';
import {
  TouchableHighlight,
  Image
} from 'react-native';

class CarouselSwitch extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    toggleSection: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.toggleSection}>
        <Image
          source={this.props.image}
        />
      </TouchableHighlight>
    );
  }
}

export default CarouselSwitch;
