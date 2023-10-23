import React, { Component } from 'react'

export class NewsItem extends Component {

  
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
            </span>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary" target='_blank' rel='noreferrer'>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem