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
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        console.log(this.state.news);
        return(
            <React.Fragment>
                <Header userText={(userInput) => {this.filterNews(userInput)}}/>
                <NewsDisplay datalist={this.state.filtered}/>
            </React.Fragment>
        )
    } 
}

export default Home;

/*
add = (a) =>{return a+a}

add(1)
*/
