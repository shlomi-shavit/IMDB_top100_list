import React from 'react';
import './Popup.scss';

const MoviePopup = ({ movieData, convertYoutubeUrl, popupHandler }) => {

  return (
    <div className='popup_container'>

      <h2>{movieData.Title}</h2>

      <div className='iframe_container'>
        <iframe
          width='100%'
          height='100%'
          // className={classes.video__player}
          src={convertYoutubeUrl(movieData.Trailer.url)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

      <div className='close_popup' onClick={() => popupHandler()}>x</div>
    </div>
  )
};

export default MoviePopup;