import React from "react";
import "./main-news.css";
import NewsItem from "../news-item";
const MainNews = ({ news }) => {

  return (
    <div className="d-block">
        {
            news.map(({author, title, description, url, urlToImage, publishedAt}) =>{
                return(<div className="main-event align-text-center list-group-item">
                    <h4>{title}</h4>
                    <div className="main-image p-4 w-100">
                        <img className="image border-radius" src={urlToImage} alt="Main Event image"/>
                    </div>
                    <div className="w-100 align-content-center">
                      <button className="btn btn-main">Go to news...</button>
                    </div>
                </div>);
            })

        }
    </div>
  );
};
export default MainNews;
