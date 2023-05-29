import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "The Indian Express" },
      author: "The Indian Express",
      title:
        "Malaysia Masters 2023 Finals Live: HS Prannoy wins game 1 21-19 against Weng Hong Yang - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/sports/badminton/malaysia-masters-2023-finals-live-hs-prannoy-to-take-on-weng-hong-yang-in-mens-singles-final-8632998/",
      urlToImage: null,
      publishedAt: "2023-05-28T10:28:36Z",
      content: null,
    },
    {
      source: { id: null, name: "Healthshots.com" },
      author: "Team Health Shots",
      title:
        "Planning a pregnancy with diabetes? A doctor shares 6 tips - Health shots",
      description:
        "If you're planning a pregnancy with diabetes, your lifestyle habits will need your special attention and doctor's extra care. Check out these tips!",
      url: "https://www.healthshots.com/preventive-care/reproductive-care/planning-a-pregnancy-with-diabetes-a-doctor-shares-6-tips/",
      urlToImage:
        "https://images.healthshots.com/healthshots/en/uploads/2021/11/11000021/gestational-diabetes.jpg",
      publishedAt: "2023-05-28T10:27:12Z",
      content:
        "A vast population of the country is affected by diabetes, a condition caused by genetic predisposition and lifestyle factors. In either case, elevated blood sugar levels occur when the body fails to … [+4248 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV Sports Desk",
      title:
        "CSK vs GT Live Score, IPL 2023 Final: Rain Threat Looms Large On Dhoni vs Hardik Showdown - NDTV Sports",
      description:
        "CSK vs GT Final Live Score, IPL 2023: Final match between CSK vs GT, Chennai Super Kings vs Gujarat Titans, Catch all the live updates here",
      url: "https://sports.ndtv.com/ipl-2023/csk-vs-gt-live-score-ipl-2023-final-chennai-super-kings-vs-gujarat-titans-indian-premier-league-final-match-live-score-updates-4073217",
      urlToImage:
        "https://c.ndtvimg.com/2023-05/udg411do_ms-dhoni-and-hardik-pandya-bcci_625x300_28_May_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-05-28T10:24:17Z",
      content:
        "CSK vs GT, IPL 2023 Final, Live Updates: Chennai Super Kings and Gujarat Titans will be going up against each other in the final match of IPL 2023 on Sunday, at the Narendra Modi Stadium in Ahmedabad… [+358 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Zarafshan Shiraz",
      title:
        "Healthy habits, diet plan to keep a check on thyroid problems - Hindustan Times",
      description:
        "Once detected with thyroid problem, lifestyle changes help in controlling the disease. Here are healthy habits and diet tips to keep a check on thyroid problems | Health",
      url: "https://www.hindustantimes.com/lifestyle/health/healthy-habits-diet-plan-to-keep-a-check-on-thyroid-problems-101685267377590.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/28/1600x900/vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash_1685267893281_1685268109509.jpg",
      publishedAt: "2023-05-28T10:03:55Z",
      content:
        "Thyroid disease is due to malfunctioning of the thyroid gland and it can be hyperthyroid which means increased production of thyroid hormone where the symptoms may include weight loss, anxiety or ner… [+3904 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Rishabh Suri",
      title:
        "EXCLUSIVE| The Kerala Story director Sudipto Sen reacts to Kamal Haasan calling it ‘propaganda’: Calling it that... - Hindustan Times",
      description:
        "The director of The Kerala Story finally opens up on actor Kamal Haasan criticising his film, and here’s what he has to say. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/controversial-sudipto-sen-directorial-the-kerala-story-faces-backlash-from-celebs-and-bans-in-some-states-post-200-crore-box-office-collection-101685265271141.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/28/1600x900/Actor-Kamal-Haasan-has-called-The-Kerala-Story--pr_1685265268008.jpg",
      publishedAt: "2023-05-28T09:14:30Z",
      content:
        "Sudipto Sen directorial The Kerala Story has been embroiled in controversy ever since its release. From bans on its theatrical release in some states to backlash from a section of the audience, inclu… [+1624 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "https://www.india.com/author/lifestylestaff/",
      title: "High Uric Acid: 5 Foods to Lower Uric Acid Naturally - India.com",
      description:
        "If you have too much uric acid in your body, it may form crystals that cause inflammation and pain in your joints. Expert reveals 5 foods that can help reduce high uric acid naturally.",
      url: "https://www.india.com/lifestyle/high-uric-acid-5-foods-to-lower-uric-acid-naturally-6075831/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2023/05/Collage-Maker-28-May-2023-02-43-PM-564.jpg",
      publishedAt: "2023-05-28T09:14:17Z",
      content:
        "If you have too much uric acid in your body, it may form crystals that cause inflammation and pain in your joints. Expert reveals 5 foods that can help reduce high uric acid naturally.\r\nHigh Uric Aci… [+2361 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Dharminder Kumar",
      title:
        "The political story behind Modi's new Parliament and Sengol - Economic Times",
      description:
        "Contrary to the popular imagination, we did not drive the British out. The post-colonial state was post-colonial mainly as a statement of fact, that it came chronologically after the coloniser departed, and not as a descriptor of an idea, of a clean break fro…",
      url: "https://economictimes.indiatimes.com/news/india/the-political-story-behind-modis-new-parliament-and-sengol/articleshow/100566905.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-100566901,width-1070,height-580,imgsize-1136142,overlay-economictimes/photo.jpg",
      publishedAt: "2023-05-28T08:51:00Z",
      content:
        'It is hard to believe today that "Mountbatten ji ki jai" was heard among many slogans celebrating Jawaharlal Nehru, Mahatma Gandhi and Bharat Mata that people shouted in the streets of Delhi the day … [+7734 chars]',
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "The Indian Express",
      title:
        "When Charan Singh refused to celebrate Savarkar birth anniversary: ‘Perhaps he is among the greatest, but …’ - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/political-pulse/when-charan-singh-refused-to-celebrate-savarkar-birth-anniversary-8633383/",
      urlToImage: null,
      publishedAt: "2023-05-28T08:40:11Z",
      content: null,
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        'Cannes 2023: Sunny Leone\'s Gratitude Note For Husband Daniel Who "Literally" Saved Her Life - NDTV Movies',
      description:
        "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      url: "https://www.ndtv.com/news",
      urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
      publishedAt: "2023-05-28T08:21:50Z",
      content:
        "If you are a climate change warrior or know someone who is doing incredible work in this space, send us your entries and we'll bring the most innovative stories to the world.",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT News Desk",
      title:
        "‘Could’ve compared it with something else': Owaisi on RJD's ‘coffin’ tweet - Hindustan Times",
      description:
        "The RJD has defended the tweet, saying it was a representation of democracy being ‘buried.’ | Latest News India",
      url: "https://www.hindustantimes.com/india-news/couldve-compared-it-with-something-else-owaisi-on-rjds-coffin-tweet-on-new-parliament-101685256792783.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/28/1600x900/PTI04-27-2023-000166B-0_1684133097160_1685256927325.jpg",
      publishedAt: "2023-05-28T07:50:04Z",
      content:
        "The Rashtriya Janata Dal (RJD) should have equated the new Parliament building with something else and not the coffin, AIMIM chief Asaduddin Owaisi said on Sunday, amid controversy over the Lalu Pras… [+1280 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        '"Reflection Of Aspirations Of New India": PM Modi On New Parliament Building - NDTV',
      description:
        "This is not just a complex but a symbol of the aspirations of 140 crore Indians, Prime Minister Narendra Modi said about the new parliament building, which he inaugurated this morning in a grand ceremony which saw attendance from 25 parties.",
      url: "https://www.ndtv.com/india-news/reflection-of-aspirations-of-new-india-pm-modi-on-new-parliament-building-4073115",
      urlToImage:
        "https://c.ndtvimg.com/2023-05/ivk3kedg_pm-modi-new-parliament_625x300_28_May_23.jpg",
      publishedAt: "2023-05-28T07:34:08Z",
      content:
        "\"It's our good fortune that we could restore the glory of this holy 'sengol',\" PM Modi said.\r\nNew Delhi: This is not just a complex but a symbol of the aspirations of 140 crore Indians, Prime Ministe… [+2555 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "The Indian Express",
      title:
        "Wrestlers Protest Live Updates: Vinesh Phogat, Sakshi Malik, Bajrang Punia detained ahead of march to Parliament - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/cities/delhi/delhi-news-live-updates-wrestlers-protest-new-parliament-arvind-kejriwal-aap-bjp-weather-8632761/",
      urlToImage: null,
      publishedAt: "2023-05-28T07:31:01Z",
      content: null,
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "etimes.in",
      title:
        "From Jiya Shankar to Awez Darbar; Take a look at the tentative list of Bigg Boss OTT 2 contestants - Indiatimes.com",
      description:
        "​Bigg Boss OTT 2, the popular reality show known for its drama, entertainment, and controversy, is set to premiere in June. Salman Khan, who will host the second season, formally revealed it on Thursday with a short teaser. The show consists of around 10 cont…",
      url: "https://timesofindia.indiatimes.com/tv/news/hindi/from-jiya-shankar-to-awez-darbar-take-a-look-at-the-tentative-list-of-bigg-boss-ott-2-contestants/photostory/100564849.cms",
      urlToImage: "https://static.toiimg.com/photo/msid-100565346.cms",
      publishedAt: "2023-05-28T06:32:08Z",
      content:
        "Bigg Boss OTT 2, the popular reality show known for its drama, entertainment, and controversy, is set to premiere in June. Salman Khan, who will host the second season, formally revealed it on Thursd… [+142 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT News Desk",
      title:
        "Earthquake tremors felt in many parts of Punjab, Haryana, J-K and Pakistan - Hindustan Times",
      description:
        "Earthquake tremors were felt in many parts of Punjab, Haryana, Jammu and Kashmir, Pakistan and Afghanistan. | Latest News India",
      url: "https://www.hindustantimes.com/india-news/earthquake-tremors-felt-in-many-parts-of-punjab-and-haryana-101685253850973.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/28/1600x900/istockphoto-875534110-612x612_1684469981167_1685255154586.jpg",
      publishedAt: "2023-05-28T06:05:17Z",
      content:
        "Earthquake tremors were felt in many parts of Punjab, Haryana and Jammu and Kashmir on Sunday. The European-Mediterranean Seismological Centre said an earthquake of magnitude 5.9 occurred 70 km south… [+736 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT News Desk",
      title:
        "On Mann Ki Baat, PM Modi pays tribute to Savarkar, NT Rama Rao | Highlights - Hindustan Times",
      description:
        "Every month, Mann Ki Baat is aired at 11am on the last Sunday of the month. Its previous edition, on April 26, was its historic 100th episode.",
      url: "https://www.hindustantimes.com/india-news/pm-narendra-modi-mann-ki-baat-101st-episode-live-updates-may-28-2023-101685231712716.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/28/1600x900/Prime-Minister-Narendra-Modi--File-Photo-_1685100967303_1685232074082.jpg",
      publishedAt: "2023-05-28T06:04:20Z",
      content:
        "On Sunday, prime minister Narendra Modi addressed the nation through the 101st episode of Mann Ki Baat, his monthly radio programme, which is broadcast at 11am on the last Sunday of each month. Accor… [+2391 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "PTI",
      title:
        "FPIs invest Rs 37,316 crore in May on strong domestic macro fundamentals, reasonable valuation - Moneycontrol",
      description:
        "This is the highest investment by FPIs in the last six months. Before this, they made a net investment of Rs 36,239 crore in equities in November 2022, data available with the depositories showed.",
      url: "https://www.moneycontrol.com/news/business/fpis-invest-rs-37316-crore-in-may-on-strong-domestic-macro-fundamentals-reasonable-valuation-10677951.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/06/shutterstock_707850085-770x433.jpg",
      publishedAt: "2023-05-28T05:58:28Z",
      content:
        "Foreign Portfolio Investors (FPIs) have pumped Rs 37,316 crore in Indian equities in May so far, primarily due to strong macroeconomic fundamentals and reasonable valuation of stocks. This is the hig… [+2764 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "ETMarkets.com",
      title:
        "4 Southern and Western India focussed real-estate stocks with “buy” reco have an upside potential of up to - Economic Times",
      description:
        "After remaining in dumps for over a decade, real estate stocks made a comeback during Covid. Multiple factors brought them back to the centre stage. Increase in demand taking care of excess inventory, and some saving’s once again shifting toward real estate a…",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/4-southern-and-western-india-focussed-real-estate-stocks-with-buy-reco-have-an-upside-potential-of-up-to-24/articleshow/100563990.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-100564014,width-1070,height-580/photo.jpg",
      publishedAt: "2023-05-28T05:44:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Insidesport.in" },
      author: "Apurba Biswas",
      title:
        "Battlegrounds Mobile India Downloadable Content: Get the latest version of BGMI - Inside Sport India - InsideSport",
      description:
        "Battlegrounds Mobile India Downloadable Content: Find out the downloadable content of the popular battle royale title, Battlegrounds Mobile India aka BGMI.",
      url: "https://www.insidesport.in/esports-battlegrounds-mobile-india-downloadable-content-get-the-latest-version-of-bgmi/",
      urlToImage:
        "https://www.insidesport.in/wp-content/uploads/2023/05/bgmi-BANNER.jpg?w=809",
      publishedAt: "2023-05-28T04:45:38Z",
      content:
        "Battlegrounds Mobile India, commonly known as BGMI is playable for both Android and iOS users from tomorrow. The immensely popular Battle Royale…Battlegrounds Mobile India, commonly known as BGMI is … [+2119 chars]",
    },
    {
      source: { id: null, name: "Crictoday.com" },
      author: "Abhinav Tyagi",
      title:
        "They need to perform - Ex-BCCI chief selector issues a stern warning to Virat Kohli and Rohit Sharma ahead of WTC final - Crictoday.com (Cricket News) ",
      description:
        "Former chief selector MSK Prasad stated that the senior players like Virat and Rohit should step up and deliver.",
      url: "http://crictoday.com/cricket/daily-cricket-news/they-need-to-perform-ex-bcci-chief-selector-issues-a-stern-warning-to-virat-kohli-and-rohit-sharma-ahead-of-wtc-final/",
      urlToImage:
        "https://crictoday.com/wp-content/uploads/2023/02/Untitled-design-76.jpg",
      publishedAt: "2023-05-28T04:31:17Z",
      content:
        "Most of the Indian squad for the all-important World Test Championship Final have travelled to London to prepare for the one-off Test against Australia from June 7-11 at The Ovals. The rest of the pl… [+1048 chars]",
    },
    {
      source: { id: "the-hindu", name: "The Hindu" },
      author: "The Hindu",
      title:
        "India facing ‘very complicated challenge’ from China, ensuring no attempt made to change status quo in border areas unilaterally: Jaishankar - The Hindu",
      description: null,
      url: "https://www.thehindu.com/news/national/india-facing-very-complicated-challenge-from-china-ensuring-no-attempt-made-to-change-status-quo-in-border-areas-unilaterally-jaishankar/article66903297.ece",
      urlToImage: null,
      publishedAt: "2023-05-28T03:54:00Z",
      content: null,
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container">
        <h2>Top Headlines</h2>
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
