import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

const apiKey =
  // `72849d38148f458191ace20f0e169897`
  // `53a4899f08dd4967b7c7dbf8f4f2b02c`;
  `cccc36e578a1428884b931fd2ce66298`;

export class News extends Component {
  static defaultProps = {
    pageSize: 6,
    country: "in",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  onClickHandleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${apiKey}&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  onClickHandlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${apiKey}&pageSize=${
      this.props.pageSize
    }&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="text-center my-5">
          <h1>Top Headlines</h1>
          {this.state.loading === true && <Spinner />}
        </div>
        <div className="row">
          {this.state.loading === false &&
            this.state.articles.map((item) => {
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

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <button
              type="button"
              onClick={this.onClickHandlePrevious}
              className="btn btn-danger"
              disabled={this.state.page <= 1}
            >
              &larr;Previous
            </button>
            <button
              type="button"
              onClick={this.onClickHandleNext}
              className="btn btn-danger"
              disabled={
                Math.ceil(this.state.totalResults / this.props.pageSize) <=
                this.state.page
              }
            >
              Next&rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
