import { useEffect, useState } from "react"

function Demo(props) {
    let[count,setCount]= useState(0)
    useEffect(()=>{
        console.log("component created/Mount")
    return()=>{
        console.log("component remove/Unmount")
    }
    },[])
    useEffect(()=>{
        console.log("component Updated/changed")
    },[count])
    return(
        <>
        <h1>component life cycle</h1>
       <h1>{count}</h1> 
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </>
    )

    
}
export default Demo;
