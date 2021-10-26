import React from 'react';
import MoviePopup from '../moviePopup/Popup.js';
import Logic from "./Grid.logic";
import './Grid.scss';

const Grid = ({ data }) => {

  const { moviePopup, movieData, convertYoutubeUrl, popupHandler } = Logic();

  return (
    <div className='movies_container'>

      <h1>Top 100 IMDB Movies</h1>

      {moviePopup
        ?
        <MoviePopup
          movieData={movieData}
          convertYoutubeUrl={convertYoutubeUrl}
          popupHandler={popupHandler}
        />
        : null
      }

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie, index) => {
            return (
              <tr key={index} onClick={() => popupHandler(movie)}>
                <td>{index + 1}</td>
                <td>{movie.Title}</td>
                <td>{movie.Genre}</td>
                <td>{movie.Year}</td>
                <td>{movie.imdbRating}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default Grid;