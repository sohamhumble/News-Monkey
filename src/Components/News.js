import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // let {country,category,apiKey,pageSize,setProgress}=props
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isEnd, setIsEnd] = useState(false);

  const fetching_function = async ()=>{
    props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(60);
      setArticles(parsedData.articles);
      setIsEnd(false);
      props.setProgress(90);
      document.title = `${
        props.category.charAt(0).toUpperCase() + props.category.slice(1)
      } - News Monkey`;
      props.setProgress(100);
    };
  useEffect(() => {
      fetching_function()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&pageSize=${
      props.pageSize
    }&page=${page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setPage(page + 1);
    setIsEnd(parsedData.articles.length === 0);
  };

  // const emptyString ='                                                                                                                                                                                                        ';

  return (
    <div>
      <div className="text-center my-5">
        <h1 style={{marginTop:"90px"}}>
          Top Headlines -{" "}
          {`${
            props.category.charAt(0).toUpperCase() + props.category.slice(1)
          }`}
        </h1>
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={isEnd === false}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((item) => {
              if(item.description!=null){
              return (
                <div className="col-md-6 col-lg-4" key={item.url}>
                  <NewsItem
                    title={
                      item.title.length>100?
                      item.title.slice(0,100)+'...':
                      item.title

                    }
                    description={
                      item.description.length>100?
                      item.description.slice(0,100)+'...':
                      item.description
                    }
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
                  }
                  else{
                    return null;
                  }
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  pageSize: 6,
  country: "in",
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
