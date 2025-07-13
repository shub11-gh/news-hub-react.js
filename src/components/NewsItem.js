import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{ width: '19rem' }}>
          <div style = {{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-warning" >
              {source}
            </span>

          </div>
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
