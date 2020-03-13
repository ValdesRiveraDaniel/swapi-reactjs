import React, { Component } from "react";
import cloneDeep from "clone-deep";
import "./Container.css";
import Data from "../Assets/data.json";
import Films from "./Films.jsx";
import FilmDetail from "./FilmDetail.jsx";

class Container extends Component {
  state = {
    viewOptions: {
      sidebarShow: false,
      episodeToShowId: null
    },
    data: Data
  };

  onFilmClick = episodeId => {
    const newState = cloneDeep(this.state);
    newState.viewOptions.sidebarShow = true;
    newState.viewOptions.episodeToShowId = episodeId;
    this.setState({ viewOptions: newState.viewOptions });
  };

  onFilmDetailClose = () => {
    const newState = cloneDeep(this.state);
    newState.viewOptions.sidebarShow = false;
    newState.viewOptions.episodeToShowId = null;
    this.setState({ viewOptions: newState.viewOptions });
  };

  filmRating = (filmId, filmRating) => {
    const parsedRating = parseInt(filmRating, 10);
    const newState = cloneDeep(this.state);
    newState.data[filmId - 1].rating.ratingsArr.push(parsedRating);
    const average = arr =>
      Math.round(arr.reduce((prev, curr) => prev + curr) / arr.length);
    newState.data[filmId - 1].rating.ratingAvg = average(
      newState.data[filmId - 1].rating.ratingsArr
    );
    this.setState({ data: newState.data });
  };

  render() {
    return (
      <div className="Container">
        <div className="Content">
          <Films films={this.state.data} onFilmClick={this.onFilmClick} />
        </div>
        {this.state.viewOptions.sidebarShow ? (
          <div className="Sidebar">
            <FilmDetail
              film={this.state.data[this.state.viewOptions.episodeToShowId - 1]}
              onFilmDetailClose={this.onFilmDetailClose}
              onRating={this.filmRating}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Container;
