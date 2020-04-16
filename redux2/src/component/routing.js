import React, { Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import Header from './Header';
import Footer from './Footer';


const Routing = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Header/>
                    <Route path="/" component={Home}/>
                <Footer/>
            </Fragment>
        </BrowserRouter>
        
    )
}

export default Routing;