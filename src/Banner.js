import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "./request";
import axios from "./axios";
import Header from "./Header";

function Banner() {
  const [movieBanner, setMovieBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovieBanner(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log("Movie Banner -", movieBanner);
      return request;
    }
    fetchData();
  }, []);

  console.log("Movie Banner -", movieBanner);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movieBanner?.backdrop_path}')`,
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="banner__contents">
        {/* movie title */}
        <h1 className="banner__title">
          {movieBanner?.title ||
            movieBanner?.name ||
            movieBanner?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movieBanner?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
