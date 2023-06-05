import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  return (
    <div>
      <div className="card mb-3">
        <div
          style={{
            position: "absolute",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-danger"
          >
            Read More
          </a>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">
            Author: {author == null ? "Unknown" : author} <br />
            At: {new Date(publishedAt).toString()}
          </small>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
