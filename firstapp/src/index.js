import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const App =() => {
    return(
        <div>
            <Header/>
            <hr/>
            <h1>This is my React App</h1>
            <h2>This is heading</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));