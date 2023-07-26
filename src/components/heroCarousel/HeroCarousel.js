import React, { useRef } from "react";
import useFetch from "../../hooks/useFetch";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import { useSelector } from "react-redux";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HeroCarousel = () => {
  const slideRef = useRef(null);
  const { data } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  const handleClickNext = () => {
    const cards = document.querySelectorAll(".card");
    slideRef.current.appendChild(cards[0]);
  };

  const handleClickPrev = () => {
    const cards = document.querySelectorAll(".card");
    slideRef.current.prepend(cards[cards.length - 1]);
  };

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        {data &&
          data?.results?.map((item) => (
            <div
              key={item.key}
              className="card"
              style={{
                background: `url(${url.backdrop + item.backdrop_path})`, backgroundSize: "cover"
              }}
            >
              <ContentWrapper>
                <h2 className="name">{item.title}</h2>
                <h3 className="des">{item.overview}</h3>
              </ContentWrapper>
            </div>
          ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
