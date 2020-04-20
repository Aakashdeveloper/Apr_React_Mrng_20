import React, { Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from '../container/NewsDetails';


const Routing = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/details/:id" component={NewsDetails}/>
                <Footer/>
            </Fragment>
        </BrowserRouter>
        
    )
}

export default Routing;