import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './main.scss';
import { apiBaseUrl } from "../../infrastructure";
import { Search } from '../search';
import { FilmContainer }  from '../film-container';
import { FilmDetail }  from '../film-detail';
import { getFilms } from '../../redux/reducers/root-reducer';

import fetchFilmsAction from '../../redux/actions/fetchAll';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { getAllPending, getAllSuccess } from '../../redux/reducers/root-reducer';
import store from '../../redux/store/store';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films : [],
            total : 0,
            loading: true
        };

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchFilms} = this.props;
        fetchFilms();
    }

    componentDidMount() {
        // fetch(`${apiBaseUrl}?sortBy=release_date&sortOrder=desc&searchBy=title&limit=10`)
        //     .then(response => response.json())
        //     .then(result => {
                // this.setState({films: this.state.films, total: this.state.total});
            // })
    }

    changeFilmContainer = (films, total) => {
        this.setState({films: films, total: total});
    };

    findFilmsByGenre(genre) {
        fetch(`${apiBaseUrl}?sortBy=release_date&sortOrder=desc&search=${genre}&searchBy=genres&limit=10`)
            .then(response => response.json())
            .then(result => {
                this.setState({films: result.data, total: result.total});
            })
    }

    shouldComponentRender() {
        const {loading} = this.state;
        if(loading === false) return true;
        // more tests
        return false;
    }

    render() {
        const {type, films, total, loading} = this.props;

        if(!this.shouldComponentRender()) return <ClipLoader />

        return (
            <Router>
                <Switch>
                    <Route path='/film/:id' >
                        <FilmDetail/>
                    </Route>
                    <Route path='/' exact>
                        <Search changeFilmContainer={this.changeFilmContainer}/>
                    </Route>
                </Switch>
                <FilmContainer films={films} total={total}/>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    films: getAllSuccess(state),
    // loading: getAllPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchFilms: fetchFilmsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main );