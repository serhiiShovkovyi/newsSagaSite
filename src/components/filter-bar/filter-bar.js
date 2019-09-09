import React from "react";
import "./filter-bar.css";
const FilterBar = ({
  onChangeCountry,
  onChangeSource,
  onChangeSort,
  onChangeCategory
}) => {
  return (
    <div className="container  filterbar">
      <div className="row">
        <div className="col-lg-6">
          Change country<br/>
          <div className="dropdown">
            <select onChange={event => onChangeCountry(event)} name="country">

              <option value="ua">Ukraine</option>
              <option value="uk">UK</option>
              <option value="us">USA</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="pl">Poland</option>
            </select>
          </div>
          Chose news source<br/>
          <select onChange={event => onChangeSource(event)} name="source">
            <option value="All">All</option>
            <option value="CNN">CNN</option>
            <option value="BBC">BBC</option>
            <option value="ABC">ABC News</option>
          </select>
        </div>
        <div className="col-lg-6">
          Sort by:<br/>
          <select onChange={event => onChangeSort(event)} name="sort">
            <option value="without">Without sort</option>
            <option value="Popularity">Popularity</option>
            <option value="new">Newest</option>
          </select>
          Category<br/>
          <select onChange={event => onChangeCategory(event)} name="category">
            <option value="all">All</option>
            <option value="business">Business</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default FilterBar;
