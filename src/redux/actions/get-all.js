export const GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';
export const GET_ALL_PENDING = 'GET_ALL_PENDING';

export function getAllSuccess({films, total, loading}) {
  return { 
    type: GET_ALL_SUCCESS,
    films: films,
    total: total,
    loading: loading
  };
}

export function getAllPending() {
  return { 
    type: GET_ALL_PENDING,
    loading: true
  };
}