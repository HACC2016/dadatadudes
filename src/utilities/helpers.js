import {
  ListView
} from 'react-native';

export const processQuestions = (questions) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  if (questions.toJS) {
    return ds.cloneWithRows(questions.toJS());
  }
  return ds.cloneWithRows(questions);
};
