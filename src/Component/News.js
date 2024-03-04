import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'




export class News extends Component {
  
 capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
 }  
  
    
   
  constructor(props){
    super(props);
    this.state={
      
       articles:[],
       loading:false,
       page:1
       
}
document.title=this.props.category;
}
  async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a8282a8b8a746978a572295db620e0e`;
    let data=await fetch(url);
    let parsedata=await data.json()
    this.setState({articles:parsedata.articles})

  }
  handleprevclick=async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a8282a8b8a746978a572295db620e0e`;
    let data=await fetch(url);
   let parsedata=await data.json()
    

       this.setState({
        page:this.state.page-1, 
          articles:parsedata.articles
        })
  }
  handlenextclick=async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a8282a8b8a746978a572295db620e0e`;
   let data=await fetch(url);
    let parsedata=await data.json()

    

        this.setState({
          page:this.state.page+1, 
          articles:parsedata.articles

        })
      }


  render() {
    return (
      <div className='container my-3' style={{background:'grey',marginBottom:'10px'}}>
        <h1 className='text-center' style={{marginTop:'90px'}}>NewsMonkey - Top Headlines on {this.capitalizeFirstLetter(this.props.category)} category </h1>
        
        <div className="row">
          {this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url}>
                   <Newsitem  title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>

          </div>
          })}
          
          
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1}  type='button' className='btn btn-dark' onClick={this.handleprevclick}> &larr; Previous</button>
          <button  type='button' className='btn btn-dark' onClick={this.handlenextclick} >Next &rarr;</button>
        </div>
        
      </div>
    )

  }
  }


export default News
