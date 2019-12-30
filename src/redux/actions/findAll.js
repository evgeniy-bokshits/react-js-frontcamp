import { getAllSuccess } from '../actions/get-all';
import { apiBaseUrl } from "../../infrastructure";

function findFilmsByGenre(genre) {
    return dispatch => {
        fetch(`${apiBaseUrl}?sortBy=release_date&sortOrder=desc&search=${genre}&searchBy=genres&limit=10`)
        .then(result => result.json())
        .then(result => {
            if(result.error) {
                throw(result.error);
            }
            dispatch(getAllSuccess({films: result.data, total: result.total}));
            return {films: result.data, total: result.total};
        })
    }
}

export default findFilmsByGenre;