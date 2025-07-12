import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{ width: '19rem' }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{ left: '90%', zIndex: '1' }}>
            {source}
          </span>
          <img src={imgUrl ? imgUrl : "../News.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Learn more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
