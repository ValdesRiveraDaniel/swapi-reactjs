import React from "react";
import "./FilmDetail.css";
import yellowStar from "../Assets/starYellow.svg";

const FilmDetail = props => {
  const { film, onFilmDetailClose, onRating } = props;
  return (
    <div className="FilmDetail">
      <div className="closeDetail">
        <div onClick={e => onFilmDetailClose()} style={{ margin: "auto 0" }}>
          Close
        </div>
      </div>
      <div className="filmInfo">
        <div className="filmInfo_img">
          <img src={film.image} alt="" />
        </div>
        <div className="filmInfo_content">
          <p>
            <b>Title:</b> {film.title}
          </p>
          <p>
            <b>Episode:</b>
            {film.episode_id}
          </p>
          <p>
            <b>Director:</b> {film.director}
          </p>
          <p>
            <b>Release:</b> {film.release_date}
          </p>
          <p>
            <b>Beginning:</b> {film.opening_crawl}
          </p>
        </div>
      </div>
      <div className="filmRate">
        <h1>Rate film</h1>
        <div className="filmRate-content">
          <div className="ratingStar" onClick={e => onRating(film.episode_id, 1)}>
            <img src={yellowStar} alt="1" />
            <span>1</span>
          </div>
          <div className="ratingStar" onClick={e => onRating(film.episode_id, 2)}>
            <img src={yellowStar} alt="2" />
            <span>2</span>
          </div>
          <div className="ratingStar" onClick={e => onRating(film.episode_id, 3)}>
            <img src={yellowStar} alt="3" />
            <span>3</span>
          </div>
          <div className="ratingStar" onClick={e => onRating(film.episode_id, 4)}>
            <img src={yellowStar} alt="4" />
            <span>4</span>
          </div>
          <div className="ratingStar" onClick={e => onRating(film.episode_id, 5)}>
            <img src={yellowStar} alt="5" />
            <span>5</span>
          </div>
        </div>
      </div>
      <div className="charactersSection">
        <h1>Characters</h1>
        <div className="filmCharacters">
          {film.characters.map(character => {
            return (
              <div className="filmCharacters_character" key={character.name}>
                <div className="character_img">
                  <img
                    src={character.image}
                    alt={character.actor}
                    style={{ width: "100%", overflow: "hidden" }}
                  />
                </div>
                <div className="character_info">
                  <p>{character.name}</p>
                  <p>{character.actor}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
