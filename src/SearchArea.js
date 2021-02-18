import React from "react";
import "./App.css";

export default function SearchArea() {
  return (
    <div className="SearchArea">
      <div className="searchBar" id="searchBar">
        <form className="form-inline md-form mr-auto mb-4" id="search-form">
          <div className="row">
            <div className="col-">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search City"
                aria-label="Search"
                id="city-input"
              />
            </div>

            <div className="col-">
              <button className="searchButton" type="submit" id="searchButton">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <div className="col-">
              <button className="locationButton" id="current-location-button">
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
