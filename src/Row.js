import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, firstRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // "useEffect()" which run on a specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // when we get any variable from out of the useEffect() then that need to be a input for useEffect().

  const opts = {
    height: "390",
    width: "100%",
    playVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log();
        })
        .catch((error) => console.log("loadding error - ", error));
    }
  };

  console.log("Video url - ", trailerUrl);

  //console.table(movies); // console.table() is very useful while handling arrays and objects

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${firstRow && "row__firstRow"}`}
            key={movie.id}
            // title='Sample'

            onClick={() => handleClick(movie)}
            src={`${base_url}${
              firstRow ? movie.poster_path : movie.backdrop_path
            } `}
            alt={movie.name}
          />
        ))}
      </div>

      {/* <YouTube videoId="XtMThy8QKqU" opts={opts} /> */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
