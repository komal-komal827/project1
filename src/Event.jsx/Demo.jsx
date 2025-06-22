let Demo = ()=>
{
    function show(name)
        {
            alert('Aarush')
        }
        return(
        <>
        <h2>Demo component</h2>
        {<button onClick={show}>click</button>}
        {/* <button onClick={show('Aarush')}>click</button>*/ }

       {/* <button onClick={()=>{show('Aarush')}}>click </button>*/}
        </>

        )
    

}
export default Demo;