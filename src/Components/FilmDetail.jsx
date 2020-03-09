import React from "react";
import "./FilmDetail.css";

const FilmDetail = props => {
  const { film, onFilmDetailClose } = props;
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
