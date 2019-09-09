import React from "react";
import NewsItem from "../news-item";

const NewsList = ({ news }) => {
    console.log(news);
    return (
        <ul className="list-group">
            {news.map(
                ({
                     source,
                     author='',
                     title,
                     description,
                     url,
                     urlToImage,
                     publishedAt
                 }) => {
                    return (
                        <li key={source.id} className="m-2 list-group-item">
                            <NewsItem
                                key={source.id}
                                author={author}
                                title={title}
                                description={description}
                                url={url}
                                urlToImage={urlToImage}
                                publishedAt={publishedAt}
                            />
                        </li>
                    );
                }
            )}
        </ul>
    );
};
export default NewsList;
