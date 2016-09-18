import { actions } from '../../actions/AnswerOptions';
import {
  ListView
} from 'react-native';

/**
 * Dynamically adds answer options to the redux store.
 * This will be necessary when we want to submit dynamic fields
 * to the server.
 */
const loadAnswerOptions = (state, { field, value, prefaceText }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return {
    ...state,
    [ field ]: {
      questions: ds.cloneWithRows(value),
      prefaceText
    }
  };
};

export default function reducer(state = {}, { data, type }) {
  switch (type) {
  case actions.LOAD_ANSWER_OPTIONS:
    return loadAnswerOptions(state, data);
  default:
    return state;
  }
}

