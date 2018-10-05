import React from "react";
import "./AlbumList.css";
import Album from "../Album/Album";

class AlbumList extends React.Component {
  render() {
    return (
      <div className="AlbumList">
        {this.props.albums.map(album => {
          return <Album album={album} />;
        })}
      </div>
    );
  }
}

export default AlbumList;
