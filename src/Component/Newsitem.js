
import React, { Component } from 'react'

export class Newsitem extends Component {
  
  
  render() {
    let {title,description,imageurl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
          <div className="card" style={{width: "18rem"}}>
          <img src={imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{source} </span></h5>
            <p className="card-text">
              {description}
            </p>
            <p className='card-text'><small className='text-muted'>By {author} on {date}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
          </div>
          </div>
      </div>
    )
  }
}

export default Newsitem
