import { getAllSuccess, getAllPending } from '../actions/get-all';
import { apiBaseUrl } from "../../infrastructure";

function fetchFilms() {
    return dispatch => {
        dispatch(getAllPending());
        fetch(`${apiBaseUrl}?sortBy=release_date&sortOrder=desc&searchBy=title&limit=10`)
        .then(result => result.json())
        .then(result => {
            if(result.error) {
                throw(result.error);
            }
            dispatch(getAllSuccess({films: result.data, total: result.total, loading: false}));
            return {films: result.data, total: result.total, loading: false};
        })
    }
}

export default fetchFilms;