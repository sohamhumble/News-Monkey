import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div>
        <div className="card mb-3">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{
              zIndex: "1",
              left: "90%",
            }}
          >
            {source}
          </span>
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
              Link
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
  }
}

export default NewsItem;
