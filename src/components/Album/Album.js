import React from "react";
import ReactDOM from "react-dom";
import "./Album.css";

const album = {
  albumArt: "./while_you_were_sleeping.jpg",
  name: "While You Were Sleeping",
  artist: "Art Department",
  year: 2015,
  genre: "HipHop",
  country: "Zimbabwe",
  rating: 5,
  plays: 69
};

class Album extends React.Component {
  render() {
    return (
      <div className="Album">
        <div className="image-container">
          <img src="./while_you_were_sleeping.jpg" alt="" />
        </div>
        <h2>{album.name}</h2>
        <div className="Album-information">
          <div className="Album-details">
            <p>Artist: {album.artist}</p>
            <p>
              {album.genre} {album.year}
            </p>
            <p>{album.country}</p>
          </div>
          <div className="Album-ratings">
            <h3 className="rating">{album.rating} stars</h3>
            <p>{album.plays} plays</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
