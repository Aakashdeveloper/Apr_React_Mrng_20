import React, { Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Register from './register';
import Login from './login';
import User from './User';
import Profile from './Profile';
import Header from './Header';


const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/user" component={User}></Route>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;