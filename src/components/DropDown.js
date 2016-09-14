import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { Select, Option, OptionList } from 'react-native-selectme';

class Dropdown extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dropDownTitle: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.person = this._person.bind(this);
    this.getOptionList = this._getOptionList.bind(this);
    this.renderOptionItems = this._renderOptionItems.bind(this);

    this.state = {
      person: ''
    };
  }

  shouldComponentUpdate(nextProps) {
    console.log('DROP DOWN next props', nextProps);
    return false;
  }

  _renderOptionItems() {
    return this.props.items.map((item, key) => {
      return <Option key={key} value={item.text}> {item.text} </Option>;
    });
  }

  _person(dude) {
    this.setState({
      ...this.state,
      person: dude
    });
  }

  _getOptionList() {
    return this.refs[ 'OPTIONLIST' ];
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> {this.props.dropDownTitle} </Text>
        <Select
          width={250}
          ref="Select1"
          optionListRef={this.getOptionList}
          defaultValue="Select Something"
          onSelect={this.person}
        >
          {this.renderOptionItems()}
        </Select>

        <OptionList ref="OPTIONLIST" />

      </View>
    );
  }
}

export default Dropdown;
