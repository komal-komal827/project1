import { useState } from "react";
import Demo2 from "./demo2";

function Demo1(props) {
let [display,setdisplay]=useState(true)   

    return (
        <>
        <h1>Demo1 component</h1>
        {
            display? <Demo2 display={display}/>:null
        }
        <button onClick={()=>setdisplay(!display)}>Toggle</button>
            
        </>
    )
}
export default Demo1;

