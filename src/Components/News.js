import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=72849d38148f458191ace20f0e169897&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container">
        <h1>Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((item) => {
            return (
              <div className="col-md-6 col-lg-4" key={item.url}>
                <NewsItem
                  title={item.title}
                  description={item.description}
                  imageUrl={
                    item.urlToImage === null
                      ? "/images/default_news_icon.jpg"
                      : item.urlToImage
                  }
                  newsUrl={item.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
