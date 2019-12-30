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
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchFilms} = this.props;
        fetchFilms();
    }

    changeFilmContainer = (films, total) => {
        this.setState({films: films, total: total});
    };

    shouldComponentRender() {
        const {loading} = this.state;
        if(loading === false) return true;
        // more tests
        return false;
    }

    render() {
        const { films, total } = this.props.films;

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
    films: getAllSuccess(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchFilms: fetchFilmsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main );