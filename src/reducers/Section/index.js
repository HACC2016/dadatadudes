import { actions } from '../../actions/Section/';

const toggleSection = (state, { field, value }) => {
  const newState = {
    ...state,
    [ field ]: value
  };
  return newState;
};

export default function reducer(state = {}, { data, type }) {
  switch (type) {
  case actions.TOGGLE_SELECTION:
    return toggleSection(state, data);
  default:
    return state;
  }
}
