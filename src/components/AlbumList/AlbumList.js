import React from "react";
import "./AlbumList.css";
import Album from "../Album/Album";

class AlbumList extends React.Component {
  render() {
    return (
      <div className="AlbumList">
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </div>
    );
  }
}

export default AlbumList;
