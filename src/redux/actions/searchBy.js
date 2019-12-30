import { getAllSuccess } from '../actions/get-all';
import { apiBaseUrl } from "../../infrastructure";

function findFilmsBySearchField(genre) {
    return dispatch => {
        fetch(`${apiBaseUrl}?sortBy=release_date&sortOrder=desc&search=${this.state.searchField}&searchBy=${this.state.type}&limit=10`)
            .then(response => response.json())
            .then(result => {
                this.props.changeFilmContainer(result.data, result.total);
                if (!result.total) {
                    this.setState({ searchField: '' });
                }
            })
    }
}

export default findFilmsBySearchField;

