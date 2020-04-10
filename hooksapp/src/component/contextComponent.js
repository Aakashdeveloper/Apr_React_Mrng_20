import React, {Component } from 'react';
const MyContext = React.createContext();


class MyProvider extends Component{
    data={
        city:'London'
    }

    render(){
        return(
            <MyContext.Provider value={{state:this.data}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

class City extends Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hi To {context.state.city}</p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}


const Contient = (props) => {
    console.log("Contrryprops", props)
    return(
        <div>
            <Country/>
        </div>
    )
}

const Country = (props) => {
    console.log("Contrryprops", props)
    return(
        <div>
            <City/>
        </div>
    )
}


class ContextComponent extends Component{
    render(){
        return(
            <MyProvider>
                <Contient/>
            </MyProvider>
        )
    }
}

export default ContextComponent;