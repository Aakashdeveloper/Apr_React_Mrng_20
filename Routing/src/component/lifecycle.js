//1. Get Default State
//2. Set Default State
//3. Before get created
//4. Render
//5. After get created
import React,{Component} from 'react';

class LifeCycle extends Component{
    //1. Get Default State
    constructor(props){
        super(props)

        //2. Set Default State
        this.state={
            title:'React Lifecycle'
        }
        console.log("Inside constructor")

    }

    //3. Before get created
    componentWillMount(){
        console.log("Inside componentWillMount")
    }

    componentWillUpdate(){
        console.log("Inside componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("Inside componentDidUpdate")
    }

    //stop rerender
    shouldComponentUpdate(nextProps,nextState){
        console.log("Inside shouldComponentUpdate")
        if(nextState.title===this.state.title){
            return false
        }else{
            return true
        }

    }

    //4. Render 
    render(){
        console.log("Inside render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something Else'})}}>
                    Click
                </div>
            </div>
        )

    }
    
    //5. After get created
    componentDidMount(){
        console.log("Inside componentDidMount")
    }

    //when we loose scope
    componentWillUnmount(){
        alert("You are leaving the page")
    }
}


export default LifeCycle;


/*0 1 1 2 3 3 4*/