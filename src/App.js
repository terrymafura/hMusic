import React, { Component } from "react";
import AlbumList from "../src/components/AlbumList/AlbumList";
import "./App.css";

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

const albums = [album, album, album, album, album, album];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hmusic</h1>
        <AlbumList albums={albums} />
      </div>
    );
  }
}

export default App;
