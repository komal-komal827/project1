import { useEffect, useState } from "react";

function Demo2({display}) {
    let [count, setcount] = useState(0)
    useEffect(() => {
        console.log("Component are mount")
    }, [display])

    useEffect(() => {
        return () =>{
            console.log("Component are unmount ")
    }
    }, [display])

    useEffect(() => {
        console.log("component are updated")
    }, [count])





    return (
        <>
        <h1>Demo2 component</h1>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}> Increment</button>

        </>
    )
}
export default Demo2;

