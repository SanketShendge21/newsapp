import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps={
    country : 'in',
    pageSize : 8,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  articles = [
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Drug donanemab seen as turning point in dementia fight - BBC",
    "description": "The antibody treatment donanemab helps clear the brain of a damaging protein that builds up in Alzheimer's.",
    "url": "https://www.bbc.com/news/health-66221116",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/598B/production/_127832922_brain_scans_woman_getty.jpg",
    "publishedAt": "2023-07-17T14:16:16Z",
    "content": "Results out today confirm that the drug donanemab, hailed as a turning point in the fight against Alzheimer's, slows cognitive decline by about a third.\r\nMike Colley, who is 80, is one of only a few … [+5975 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Quentin Fottrell",
    "title": "The Moneyist answers: Should I tip before or after tax and credit-card charges? - MarketWatch",
    "description": "‘I won’t tip at a deli counter, but I will tip more in a diner,’ one reader says.",
    "url": "https://www.marketwatch.com/story/tipping-recommendations-in-restaurants-are-based-on-faulty-calculations-should-i-tip-before-or-after-tax-and-credit-card-charges-eabff2a5",
    "urlToImage": "https://images.mktw.net/im-262198/social",
    "publishedAt": "2023-07-17T14:10:00Z",
    "content": "Ive read your previous responses to letters on tipping, and my thoughts are simple: Tipping is dependent on the service given. I wont tip at a deli counter, but I will tip more in a diner. I see no r… [+5729 chars]"
    }
    ];
  constructor(){

    super();
    // console.log("Hello im a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page : 1
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json()
      // console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading : false
      })
  }

    async componentDidMount(){
      this.updateNews()
    }

    handlePrevClick = async ()=>{
      this.setState({page : this.state.page - 1});
      this.updateNews();
    }

    handleNextClick = async ()=>{
      this.setState({page : this.state.page + 1});
      this.updateNews();
    }
    
  

  render() {
    return (

        <div className='container'>
          <h2 className='text-center' style={{margin:'40px 0px'}}>NewsMonkey - Top Headlines </h2>
           {this.state.loading && <Spinner />} {/* this says if loading true then show spinner component else not */}
          
        {/* iterating over two elements as my articles contains only two objects */}

          <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""}
            imageUrl={!element.urlToImage?"https://images.macrumors.com/t/jHD1aGfXq86Ln_kfzTyWIF68vOo=/2368x/article-new/2021/02/Safari-Technology-Preview-Feature.jpg":element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
            </div>
          })}

          </div>
          <div className="container d-flex justify-content-between">
            <button type='button' disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr; </button>
          </div>
      </div>
      
    )
  }
}

export default News