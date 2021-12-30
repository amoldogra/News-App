import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
        constructor(){
            super();
            this.state = {
                articles : [],
                loading  : false
            }
        }
        async componentDidMount(){
            console.log("cdm");
            let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4c7bef50b632477698b5bbe4953277b6";
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({articles: parsedData.articles})
        }

    
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsBuster - Top Headlines</h2>
                
                <div className="row">
                {this.state.articles.map((element)=>{
                     return <div className="col md-4" key={element.url}>
                    <NewsItem  title = {element.title?element.title:""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                   
                        
                    
                
                </div>
               
            </div>
        )
    }
}

export default News
