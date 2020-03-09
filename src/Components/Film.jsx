import React from "react";
import "./Film.css";

const Film = props => {
  const { image, title, episode, onFilmClick } = props;
  return (
    <div className="Film" onClick={e => onFilmClick(episode)}>
        <img src={image} alt="" />
      <div className="film_info">
        <h3>{title}</h3>
        <p>Episode: {episode}</p>
      </div>
    </div>
  );
};

export default Film;
