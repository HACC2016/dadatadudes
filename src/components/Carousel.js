import React, { Component, PropTypes } from 'react';
import {
 ScrollView
} from 'react-native';
// Components
import CarouselSwitch from './CarouselSwitch.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Section from './Sections';

class Carousel extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      currentTemplate: this.props.items
    };
    this.backPage = this._backPage.bind(this);
    this.nextPage = this._nextPage.bind(this);
  }

  _backPage() {
    const index = this.state.index - 1;
    this.setState({
      index
    });
  }

  _nextPage() {
    const index = this.state.index + 1;
    this.setState({
      index
    });
  }

  render() {
    console.log('this.state.currentTemplate[ this.state.index ]', this.state.currentTemplate[ this.state.index ]);
    return (
      <ScrollView>
        <Section
          items={this.state.currentTemplate[ this.state.index ].items}
          title={this.state.currentTemplate[ this.state.index ].title}
        />
        <CarouselSwitch
          image={'../assets/Left.png'}
          onClickHandler={this.backPage}
        />
        <CarouselSwitch
          image={'../assets/right.png'}
          onClickHandler={this.nextPage}
        />
      </ScrollView>
    );
  }
}

export default Carousel;
