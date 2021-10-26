import { useState } from "react";

const Logic = () => {

    const [moviePopup, setMoviePopup] = useState(false);
    const [movieData, setMovieData] = useState({});

    const convertYoutubeUrl = (url) => {
        const urlId = url.substring(url.lastIndexOf("=") + 1);
        const iframeMarkup = 'https://www.youtube.com/embed/' + urlId;
        return iframeMarkup;
    }

    const openMoviePopup = (movie) => {
        setMoviePopup(true)
        setMovieData(movie)
    }

    const closeMoviePopup = () => {
        setMoviePopup(false)
        setMovieData({})
    }

    return {
        moviePopup,
        movieData,
        convertYoutubeUrl,
        openMoviePopup,
        closeMoviePopup
    };
};

export default Logic;
