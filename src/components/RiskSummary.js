import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
  StyleSheet
} from 'react-native';
import RiskCategory from './RiskCategory.js';
import { VispdatCategories } from '../utilities/questions.js';
import Button from './Button.js';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    flex: 1
  }
}));

class RiskSummary extends Component {
  static propTypes = {
    items: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.renderCategories = this._renderCategories.bind(this);
    this.state = {
      dataSource: false
    };
  }

  _renderCategories({ title, base }) {
    return (
      <RiskCategory
        title={title}
        base={base}
      />
    );
  }

  render() {
    // const preSurvey = 0;
    // const history = 1;
    // const risks = 1;
    // const social = 1;
    // const wellness = 2;
    // const total = 5;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={styles.container}>
        <ListView
          initialListSize={1}
          dataSource={ds.cloneWithRows(VispdatCategories)}
          scrollRenderAhead={250}
          renderRow={this.renderCategories}
        />
        <Button />
      </View>
    );
  }
}

export default RiskSummary;
