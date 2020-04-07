import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';
import Artist from './Artist';
import FormComponent from './formComponent';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/details/:id" component={Artist}></Route>
                <Route exact path="/forms" component={FormComponent}></Route>
                
            </BrowserRouter>
        </div>
    )
}

export default Routing;