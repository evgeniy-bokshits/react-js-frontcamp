import { GET_ALL, GET_ALL_PENDING, GET_ALL_SUCCESS } from '../actions/get-all';

const initialState = {
    films : [],
    total : 0,
    loading: true
};

export function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_ALL_PENDING:
      return {
        ...state,
        loading: true
      }
    case GET_ALL_SUCCESS:
      return {
        films: action.films,
        total: action.total,
        loading: false
      };

    default:
      return state;
  };
}

export const getAllSuccess = state => ({films: state.films, total: state.total});
export const getAllPending = state => state.loading;