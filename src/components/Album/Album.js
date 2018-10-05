import React from "react";
// import ReactDOM from "react-dom";
import "./Album.css";

class Album extends React.Component {
  render() {
    return (
      <div className="Album">
        <div className="image-container">
          <img src="./while_you_were_sleeping.jpg" alt="" />
        </div>
        <h2>{this.props.album.name}</h2>
        <div className="Album-information">
          <div className="Album-details">
            <p>Artist: {this.props.album.artist}</p>
            <p>
              {this.props.album.genre} {this.props.album.year}
            </p>
            <p>{this.props.album.country}</p>
          </div>
          <div className="Album-ratings">
            <h3 className="rating">{this.props.album.rating} stars</h3>
            <p>{this.props.album.plays} plays</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
