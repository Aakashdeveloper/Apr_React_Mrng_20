import React, {Component} from 'react';
import Header from './Header';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    //var a = [0,1,2,3,4,5]
    //a.filter((data) => {return data*2})

    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.indexOf(keyword)>-1
        })
        this.setState({filtered:output})
    }

    render(){
        console.log(this.state.news);
        return(
            <React.Fragment>
                <Header/>
                <NewsDisplay datalist={this.state.filtered}/>
            </React.Fragment>
        )
    } 
}

export default Home;