import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getNews } from '../../Api/Api';
import './News.css';

export const NewsTemplate = ({ news, setNews }) => {
  useEffect(() => {
    const newsFromServer = getNews();

    newsFromServer.then((response) => {
      setNews(response.articles);
    });
  }, [setNews]);

  return (
    <>
      {news.map(newsItem => (
        <div className="card" key={newsItem.publishedAt}>
          <div className="card-header">
            {newsItem.author || newsItem.source.name}
          </div>
          <div className="card-body">
            <h5 className="card-title">{newsItem.title}</h5>
            <p className="card-text">{newsItem.description}</p>
            <a href={newsItem.url} className="link">Source</a>
          </div>
        </div>
      ))}
    </>
  );
};

NewsTemplate.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setNews: PropTypes.func.isRequired,
};
