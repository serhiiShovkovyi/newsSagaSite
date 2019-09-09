import React from "react";
import "./news-item.css";
const NewsItem = ({
  author,
  title,
  url,
  urlToImage
}) => {
  return (
    <div className="d-flex" data-test={"newsItem"}>
      <div className="mr-3">
        <img className="img" src={urlToImage} data-test="img" alt="Image of a news" />
      </div>
      <div className="title row">
        <a href={url} className="modal-title">
          {title}
        </a>
          <div className="w-100">
              <p className="author float-right">{author ? author : ""}</p>
          </div>
      </div>
    </div>
  );
};
export default NewsItem;
