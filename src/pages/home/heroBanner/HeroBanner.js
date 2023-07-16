import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch.js";
import { useSelector } from "react-redux";


const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch('/movie/upcoming');
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg)
  }, [data])

  const searchQueryHandler = (event) => {
    event.preventDefault();
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="backdrop-img"></div>
      <div className="wrapper">
        <div className="HeroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <input
            type="text"
            placeholder="Search for a Movie or TV show..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
