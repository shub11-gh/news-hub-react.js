import React from 'react';

const NewsItem = ({ title, description, imgUrl, newsUrl, author, date, source }) => (
  <div className="news-card my-3">
    <div className="news-img-container">
      <span className="badge rounded-pill bg-warning">
        {source}
      </span>
      <img src={imgUrl || "../News.jpg"} alt={title} className="card-img-top" />
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}...</p>
      <p className="card-text">
        <small className="text-body-secondary">
          By {author || "Unknown"} on {new Date(date).toGMTString()}
        </small>
      </p>
      <a href={newsUrl} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  </div>
);

export default NewsItem;
