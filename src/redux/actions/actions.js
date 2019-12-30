import { getAllSuccess, getAllPending } from '../reducers/root-reducer';
import { apiBaseUrl } from "../../infrastructure";

export function fetchFilms() {
    return dispatch => {
        // dispatch(getAllPending());
        fetch(`${apiBaseUrl}?sortBy=release_date&sortOrder=desc&searchBy=title&limit=10`)
        .then(result => result.json())
        .then(result => {
            if(result.error) {
                throw(result.error);
            }
            // dispatch(getAllSuccess({films: result.data, total: result.total}));
            return {films: result.data, total: result.total};
        })
    }
}