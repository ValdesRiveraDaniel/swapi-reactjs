import React from "react";
import "./Films.css";
import Film from "./Film";

const Films = props => {
  const { films, onFilmClick } = props;
  return (
    <div className="Films">
      {films.map(item => {
        return (
          <Film
            key={item.episode_id}
            image={item.image}
            title={item.title}
            episode={item.episode_id}
            rating={item.rating.ratingAvg}
            numOfRatings={item.rating.ratingsArr.length}
            onFilmClick={onFilmClick}
          />
        );
      })}
    </div>
  );
};

export default Films;
