import {
  INITIAL_DATA_SUCCESS,
  INITIAL_DATA_ERROR,
  INITIAL_DATA_PURGE,
} from '../types';

const stateInitial = {
  initialData: {},
  initialError: {},
};

export default getInitial = (state = stateInitial, action) => {
  switch (action.type) {
    case INITIAL_DATA_SUCCESS:
      return { ...state, initialData: action.payload };
    case INITIAL_DATA_ERROR:
      return { ...state, initialError: action.payload };
    case INITIAL_DATA_PURGE:
      return { ...stateInitial, purgeInitial: action.payload };
  }
  return state;
}