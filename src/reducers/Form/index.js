import { actions } from '../../actions/Form/index.js';

const submitForm = (state, action) => {
  console.log(action.data);
};

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
  case actions.SUBMIT_FORM:
    return submitForm(state, action);
  default:
    return state;
  }
}

