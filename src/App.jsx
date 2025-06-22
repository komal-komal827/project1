import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDemo from './PropsDemo'


function App()
{
    let stud =[ 
     {name:"komal detake",age:20},
     {name:"kajal detake", age:18},
     {name:"kaveri detake",age:18},
    
     ]
   return(
      <>
   {<PropsDemo stud={stud}/>}
       </>
    )
  }
  export default App