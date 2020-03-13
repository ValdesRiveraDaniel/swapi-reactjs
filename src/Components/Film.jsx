import React from "react";
import "./Film.css";
import yellowStar from "../Assets/starYellow.svg";
import blackStar from "../Assets/starBlack.svg";

const Film = props => {
  const { image, title, episode, rating, numOfRatings, onFilmClick } = props;

  const yellowRatingsDivArray = [];
  for (let i = 0; i < rating; i++) {
    yellowRatingsDivArray.push(
      <img className="yellowStar" src={yellowStar} alt="" style={{height: "100%"}}/>
    );
  }

  const blackRatingsDivArray = [];
  for (let i = 0; i < 5 - rating; i++) {
    blackRatingsDivArray.push(
      <img className="blackStar" src={blackStar} alt="" style={{height: "100%"}}/>
    );
  }

  return (
    <div className="Film" onClick={e => onFilmClick(episode)}>
      <img src={image} alt="" />
      <div className="film_info">
        <h3>{title}</h3>
        <p>Episode: {episode}</p>
      </div>
      <div className="film_rating">
        {yellowRatingsDivArray}
        {blackRatingsDivArray}
        <span id="numOfRatings">({numOfRatings})</span>
      </div>
    </div>
  );
};

export default Film;