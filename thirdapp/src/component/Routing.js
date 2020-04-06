import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home}></Route>
            </BrowserRouter>
        </div>
    )
}

export default Routing;