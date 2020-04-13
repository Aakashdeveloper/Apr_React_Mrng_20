import React, {Component} from 'react';
import { movieList} from '../action';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class App extends Component{
    componentDidMount(){
        this.props.movieList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
            </div>
        )
    }
}

//This will recive state from the store
function mapStateToProps(state){
    console.log(state)
}

//This will dispatch action
function mapDispatchToProps(dispatch){
    return bindActionCreators({movieList},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App)