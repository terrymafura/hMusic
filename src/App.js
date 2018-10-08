import React, { Component } from "react";
import AlbumList from "../src/components/AlbumList/AlbumList";
import SearchBar from "../src/components/SearchBar/SearchBar";
import "./App.css";

const album = {
  albumArt: "https://image.ibb.co/ntw9ye/cover.jpg",
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
  searchAlbums(term, sortBy) {
    console.log("Searching Albums with " + term + " , " + " , " + sortBy);
  }

  render() {
    return (
      <div className="App">
        <h1>hmusic</h1>
        <SearchBar />
        <AlbumList albums={albums} />
      </div>
    );
  }
}

export default App;
