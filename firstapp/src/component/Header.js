import React, {Component, Fragment} from 'react';
import "./Header.css";

class Header extends Component{

    constructor(){
        super()

        this.state={
            title:'My React App',
            details:'skjfb bfue jeb jbcejb jebiu jiebi uiebv'
        }
    }

    render(){
        const mydata = this.state;
        return(
            <Fragment>
                <header>
                    <p className="logo">{this.state.title}</p>
                    <center>
                        <input/>
                    </center>
                </header>
            </Fragment>
        )
    }

}

export default Header;


