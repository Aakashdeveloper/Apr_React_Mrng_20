import React, {Component, Fragment} from 'react';
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { latestNews } from '../actions'

class Home extends Component{
    componentDidMount(){
        this.props.latestNews()
    }
    render(){
        return(
            <Fragment>
                <h1>Home Page</h1>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);