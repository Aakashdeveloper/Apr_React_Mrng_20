import React, {useState,useEffect} from 'react';

const url="";

function HookComponent(){
    const [title] = useState('Developer Funnel');
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)
    const [movies,setMovies] = useState('')

    useEffect(()=>{
        console.log("hhhhhh")
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setMovies(movies)
        })
        .catch()
    },[movies])


    /*useEffect(()=>{
        async function fetchMovies(){
            const res = await fetch(url)
            res.err()
        }
        
        fetchMovies()
    },[movies])*/


    return(
        <div>
            <h1>Hooks</h1>
            <h2>{title}</h2>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}} 
            className="btn btn-success">
                Click
            </button>
            <p>{count1}</p>
            <button onClick={()=>{setCount1(count1+1)}} 
            className="btn btn-success">
                Click
            </button>
        </div>
    )
}

export default HookComponent;