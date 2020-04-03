import React, {Component, Fragment} from 'react';
import "./Header.css";

class Header extends Component{

    constructor(){
        super()

        this.state={
            title:'My React App',
            details:'skjfb bfue jeb jbcejb jebiu jiebi uiebv',
            keyword:'User text here'
        }
    }

    //Event Binding
    inputChange(event){
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    render(){
        //const mydata = this.state;
        return(
            <Fragment>
                <header>
                    <p className="logo">{this.state.title}</p>
                    <center>
                        <input onChange={this.inputChange.bind(this)}/>
                        <p>{this.state.keyword}</p>
                    </center>
                </header>
            </Fragment>
        )
    }

}

export default Header;


