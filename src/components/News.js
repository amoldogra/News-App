import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
         capitilizeFirstLetter = (string)=> {                       // to capitilized first word of title
          return string.charAt(0).toUpperCase()+string.slice(1);    
      }
        constructor(props){
            super(props);
            this.state = {
                articles : [],
                loading  : true,
                page : 1,
                totalResults: 0
            }
            document.title= `${this.capitilizeFirstLetter(this.props.category)} - NewsBuster`;
        }
         async updateNews(){
             this.props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true}); 
            let data = await fetch(url);
            this.props.setProgress(30);
            let parsedData = await data.json();
            console.log(parsedData);
            this.props.setProgress(70);
            this.setState({articles: parsedData.articles, 
                totalResults: parsedData.totalResults,
                loading : false
            })
            this.props.setProgress(100);
         }
        async componentDidMount(){
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c7bef50b632477698b5bbe4953277b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            // this.setState({loading : true}); 
            // let data = await fetch(url);
            // let parsedData = await data.json();                                   // this block of code used when we don't use updateNews()
            // console.log(parsedData);
            // this.setState({articles: parsedData.articles, 
            //     totalResults: parsedData.totalResults,
            //     loading : false
            // })
         this.updateNews();
        }
           handleNextClick = async ()=>{
            //    console.log("clicked");
            // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c7bef50b632477698b5bbe4953277b6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading : true}); 
            // let data = await fetch(url);
            // let parsedData = await data.json();
            //   this.setState({                                                     // this block of code used when we don't use updateNews()
            //       loading : false,
            //       page : this.state.page+1,
            //       articles: parsedData.articles
            //   })
            // }
            this.setState({page: this.state.page+1});
            this.updateNews();

          }
           handlePrevClick = async ()=>{
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}apiKey=4c7bef50b632477698b5bbe4953277b6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading : true}); 
            // let data = await fetch(url);
            // let parsedData = await data.json();
            //   this.setState({                                                      // this block of code used when we don't use updateNews()
            //        loading : false,
            //       page : this.state.page-1,
            //       articles: parsedData.articles
            //   })
            this.setState({page: this.state.page-1});
            this.updateNews();
          }
          
          fetchMoreData = async () => {
           this.setState({page: this.state.page+1})
           let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c7bef50b632477698b5bbe4953277b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
           
           let data = await fetch(url);
           let parsedData = await data.json();
           console.log(parsedData);
           this.setState({
               articles: this.state.articles.concat(parsedData.articles), 
               totalResults: parsedData.totalResults
               
           })
          };
    
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center' style = {{margin : '35px 0px'}}>Top {this.capitilizeFirstLetter(this.props.category)} Headlines</h2>
               {this.state.loading && <Spinner/>}                                                    
               <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
        >
                 <div className="container">
                     <div className="row my-3">
                         {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
                             { this.state.articles.map((element)=>{
                          return <div className="col-md-4" key={element.url}>
                          <NewsItem  
                             title = {element.title?element.title:""}
                             description={element.description?element.description.slice(0,88):""}
                             imageUrl={element.urlToImage}
                             newsUrl={element.url} 
                             author={element.author} 
                             date={element.publishedAt} 
                             source={element.source.name}/>
                     </div>
                     })}
                  </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                <button disabled ={this.state.page<=1} type="button" className="btn btn-danger" onClick={this.handlePrevClick} >&larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>   */}
                             {/* disabled this code bcoz of scrolling functionality */}
            </div>
        )
    }
}

export default News
