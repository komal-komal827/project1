import { useState } from "react"

const Demo=(props)=>{
    let [count,setCount] = useState(0)
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </>
    )
}
export default Demo;

