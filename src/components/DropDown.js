import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Select, Option, OptionList } from 'react-native-selectme';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.person = this._person.bind(this);
    this.getOptionList = this._getOptionList.bind(this);

    this.state = {
      person: ''
    };
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
        <Select
          width={250}
          ref="Select1"
          optionListRef={this.getOptionList}
          defaultValue="Select Something"
          onSelect={this.person}
        >
          <Option value={{ id: 'Boots' }}>Boots</Option>
          <Option value={{ id: 'Kawika' }}>Kawika</Option>
          <Option value={{ id: 'Alex' }}>Alex</Option>
          <Option value={{ id: 'Brock' }}>Brock</Option>
        </Select>

        <Text>Select a person: {this.state.person} </Text>
        <OptionList ref="OPTIONLIST" />

      </View>
    );
  }
}

export default Dropdown;
