import React from 'react';
import { FilmItem } from '../film-item';
import './film-container.scss';

const FilmContainer = (props) => {
    const { films, total } = props;

    return (
        <div className="film-list">
            <div className="film-list__result-counter">
                {total} films found!
            </div>
            <div className="film-list__sort-type">
                <div></div>
                <div></div>
            </div>
            <div className="film-list__search-result">
                { total
                ? films.map((el) => <FilmItem info={el} key={el.id}/>) 
                : <span>No films found</span>}
            </div>
        </div>
    );
};

export default FilmContainer;