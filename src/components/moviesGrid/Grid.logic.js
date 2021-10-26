import { useState } from "react";

const Logic = () => {

    const [moviePopup, setMoviePopup] = useState(false);
    const [movieData, setMovieData] = useState({});

    const convertYoutubeUrl = (url) => {
        const urlId = url.substring(url.lastIndexOf("=") + 1);
        const iframeMarkup = 'https://www.youtube.com/embed/' + urlId;
        return iframeMarkup;
    }

    const popupHandler = (movie) => {
        setMoviePopup(!moviePopup)
        setMovieData(movie)
    }

    return {
        moviePopup,
        movieData,
        convertYoutubeUrl,
        popupHandler
    };
};

export default Logic;
