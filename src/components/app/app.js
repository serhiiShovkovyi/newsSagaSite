import React, { Component } from "react";
import NewsList from "../news-list";
import QueueAnim from "rc-queue-anim";
import { getNews } from "../../actions";
import icon from "./menu.svg";
import FilterBar from "../filter-bar";
import LoadingIndicator from "../loading-progress";
import "./app.css";
import { connect } from "react-redux";

class App extends Component {
  state = {
    newsPerPage: 5,
    totalNews: 0,
    country: 'ua'
  };
  componentWillMount() {
    this.props.getNews();
  }
  changeCountry = event => {
    const country = event.target.value;
    this.props.getNews(event.target.value);
    this.setState({country: country})
  };
  changeSource = event => {
    console.log(event.target.value);
  };
  changeSort = event => {
    console.log(event.target.value);
  };
  changeCategory = event => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="container-fluid">
        <QueueAnim delay={100} duration={500}>
          <nav key="1" className="nav fixed-top bg-danger navbar-expand-lg">
            <button
              className="navbar-toggler bg-light "
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <img src={icon} width={25} alt="Menu"></img>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item m-1">
                  <a
                    className="nav-link logo-text navbar-brand"
                    href="#about-me"
                  >
                    Fetch the news
                  </a>
                </li>
                <li className="nav-item m-1">
                  <a className="nav-link" href="">
                    Chose country
                  </a>
                </li>
                <li className="nav-item m-1">
                  <a className="nav-link" href="">
                    blog
                  </a>
                </li>
                <li className="nav-item m-1">
                  <a className="nav-link" href="">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row">
            <div className=" mt-5 main-content col-lg-8">
              <QueueAnim type={["right", "left"]} delay={200} duration={900} ease={['easeOutBack', 'easeInOutCirc']} leaveReverse>
                {this.props.loading ? (
                  <LoadingIndicator />
                ) : (
                  <NewsList key="1" news={this.props.currentNews} />
                )}
              </QueueAnim>
            </div>

            <div className=" mt-5 filters col-lg-4">
              <QueueAnim type={["right", "left"]} delay={200} duration={900}>
                <h4>Filters</h4>
                <FilterBar
                  key="1"
                  onChangeCountry={this.changeCountry}
                  onChangeSource={this.changeSource}
                  onChangeSort={this.changeSort}
                  onChangeCategory={this.changeCategory}
                />
                <hr />
              </QueueAnim>
            </div>
          </div>
        </QueueAnim>
      </div>
    );
  }
}
const mapStateToProps = ({ currentNews, loading }) => {
  return {
    currentNews,
    loading
  };
};
const mapDispatchToProps = {
  getNews
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
