import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="row">
          <div className="col-lg-1">
            <img
              className="img-fluid"
              width="50"
              height="50"
              src="https://www.shareicon.net/data/256x256/2016/09/01/822569_world_512x512.png"
            />
          </div>
          <div className="col-lg-3">
              <h2>Besøk Norge</h2>
          </div>
          <div className="col-lg-8">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control1 mr-sm-2"
                type="text"
                placeholder="Search anything! Everything is Norwegian!"
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term);
  }

}
export default SearchBar;
