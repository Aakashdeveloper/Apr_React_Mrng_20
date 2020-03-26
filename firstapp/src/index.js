import React from 'react';
import ReactDOM from 'react-dom';

const App =() => {
    return(
        <div>
            <h1>This is my React App</h1>
            <h2>This is heading</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));