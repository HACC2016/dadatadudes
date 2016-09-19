import React, { Component, PropTypes } from 'react';
import {
  TouchableHighlight,
  Image,
  Text
} from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class CarouselSwitch extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onClickHandler}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'http://placekitten.com/250/250' }}
        />
      </TouchableHighlight>
    );
  }
}

export default CarouselSwitch;
