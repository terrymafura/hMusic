import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Played": "play_count"
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      sortBy: "best_match"
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSearch(event) {
    this.props.searchAlbums(this.state.term, this.state.sortBy);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Music" onChange={this.handleTermChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Search</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
