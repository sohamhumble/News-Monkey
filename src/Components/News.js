import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const apiKey =
  // `72849d38148f458191ace20f0e169897`
  `53a4899f08dd4967b7c7dbf8f4f2b02c`;
  // `cccc36e578a1428884b931fd2ce66298`;

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
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async fetching_function(pageNo = 0) {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${apiKey}&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + pageNo}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: this.state.page + pageNo,
      loading: false
    });
  }

  async componentDidMount() {
    this.fetching_function();
    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - News Monkey`;
  }

  fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${apiKey}&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
      loading: false
    });
  };

  render() {
    return (
      <div>
        <div className="text-center my-5">
          <h1>Top Headlines - {`${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`}</h1>
          {this.state.loading === true && <Spinner />}
        </div>

        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
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
                      author={item.author}
                      publishedAt={item.publishedAt}
                      source={item.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
