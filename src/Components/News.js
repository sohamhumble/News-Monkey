import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <NewsItem />
          </div>
          <div className="col-md-6 col-lg-4">
            <NewsItem />
          </div>
          <div className="col-md-6 col-lg-4">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
