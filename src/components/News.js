import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
             
            "source": {
                "id": "nbc news",
                "name": "NBC News"
            },
            "author": "Erika Edwards",
            "title": "Omicron symptoms: What new Covid variant research shows us so far   NBC News",
            "description": "Omicron variant symptoms may be different than previous Covid strains. Learn what you should know about Omicron symptoms and what to look out for.",
            "url": "https://www.nbcnews.com/health/health news/omicron symptoms covid what to know rcna9469",
            "urlToImage": "https://media cldnry.s nbcnews.com/image/upload/t_nbcnews fp 1200 630,f_auto,q_auto:best/rockcms/2021 12/211222 covid test mn 1100 83137e.jpg",
            "publishedAt": "2021 12 22T16:05:00Z",
            "content": "The dizzying speed of omicron's spread has left Americans questioning much of what they know about Covid 19, especially on the cusp of holiday travel. \r\n\"This is hitting us at a very inopportune time… [+7057 chars]"
        },
         
        {
             
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS Trailer (2022) Marvel   JoBlo Movie Trailers",
            "description": "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS Trailer (2022) MarvelPLOT: Joined by Wanda (Elizabeth Olsen as Scarlet Witch), Doctor Strange must battle evil fo...",
            "url": "https://www.youtube.com/watch?v=0eLkYGrSe28",
            "urlToImage": "https://i.ytimg.com/vi/0eLkYGrSe28/maxresdefault.jpg",
            "publishedAt": "2021 12 22T16:03:46Z",
            "content": null
        },
         
        {
             
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Ryan Dunleavy",
            "title": "NFL Power Rankings for Week 16: Plenty of movement   New York Post ",
            "description": "Here are The Post’s NFL power rankings for Week 16.",
            "url": "https://nypost.com/2021/12/22/nfl power ranking for week 16 plenty of movement/",
            "urlToImage": "https://nypost.com/wp content/uploads/sites/2/2021/12/1359900094.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021 12 22T15:53:00Z",
            "content": "Aaron Rodgers is about to leapfrog Brett Favre.\r\nRodgers next touchdown pass will break a tie with Favre at 442 and give him the storied Green Bay Packers franchise record. Thats a nice achievement, … [+5928 chars]"
        },
         
        {
             
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Shweta Sharma",
            "title": "US Army claims it is close to developing vaccine against all Covid variants and coronaviruses   The Independent",
            "description": "Army developed SpFN vaccine completed phase 1 of human trials earlier this year",
            "url": "https://www.independent.co.uk/news/world/americas/covid vaccine omicron variants us army b1980687.html",
            "urlToImage": "https://static.independent.co.uk/2021/12/22/04/GettyImages 1210622063.jpg?width=1200&auto=webp&quality=75",
            "publishedAt": "2021 12 22T15:38:32Z",
            "content": "The US Department of Defence (DOD) is just weeks away from announcing a vaccine that can fight against Covid 19, including the Omicron and Delta variants, and other coronaviruses that have killed mil… [+2155 chars]"
        },
         
    ]
        constructor(){
            super();
            this.state = {
                articles : this.articles,
                loading  : false
            }
        }

    
    render() {
        return (
            <div className='container my-3'>
                <h2>Todays Top Headlines</h2>
                <div className="row">
                    <div className="col md-4">
                        <NewsItem title = "cj" description="fnjjc" imageUrl="..." newsUrl=".."/>
                    </div>
                    <div className="col md-4">
                        <NewsItem title = "cj" description="fnjjc"/>
                    </div>
                    <div className="col md-4">
                        <NewsItem title = "cj" description="fnjjc"/>
                    </div>
                    <div className="col md-4">
                        <NewsItem title = "cj" description="fnjjc"/>
                    </div>
                </div>
                <NewsItem/>
            </div>
        )
    }
}

export default News
