import React,{Component, Fragment} from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';
import Header from './Header';

const url="http://localhost:8900/artists";

class Home extends Component {
    constructor(){
        super()

        this.state={
            artists:''
        }
        
    }
    render(){
        console.log(">>>",this.state.artists);
        return(
            <Fragment>
                <Header/>
                <Banner/>
                <ArtistList artistData={this.state.artists}></ArtistList>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                artists:data
            })
        })
    }
}


export default Home;