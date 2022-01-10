import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize : 8,
        category : 'general',
    }
     static propTypes = {
         country: PropTypes.string,
         pageSize: PropTypes.number,
         category: PropTypes.string,
     }
    
        constructor(){
            super();
            this.state = {
                articles : [],
                loading  : false,
                page : 1
            }
        }
        async componentDidMount(){
            console.log("cdm");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c7bef50b632477698b5bbe4953277b6&page=1&pageSize=${this.props.pageSize}`;
            this.setState({loading : true}); 
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({articles: parsedData.articles, 
                totalResults: parsedData.totalResults,
                loading : false
            })
        }
           handleNextClick = async ()=>{
               console.log("clicked");
            if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c7bef50b632477698b5bbe4953277b6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true}); 
            let data = await fetch(url);
            let parsedData = await data.json();
              this.setState({
                  loading : false,
                  page : this.state.page+1,
                  articles: parsedData.articles
              })
            }

          }
           handlePrevClick = async ()=>{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}apiKey=4c7bef50b632477698b5bbe4953277b6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
              this.setState({
                  page : this.state.page-1,
                  articles: parsedData.articles
              })
          }
          
    
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style = {{margin : '35px 0px'}}>NewsBuster - Top Headlines</h1>
               {this.state.loading && <Spinner/>}
                 <div className="container">
                     <div className="row my-3">
                         {!this.state.loading && this.state.articles.map((element)=>{
                          return <div className="col-md-4" key={element.url}>
                          <NewsItem  title = {element.title?element.title:""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                     </div>
                     })}
                  </div>
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled ={this.state.page<=1} type="button" className="btn btn-danger" onClick={this.handlePrevClick} >&larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>  
            </div>
        )
    }
}

export default News
