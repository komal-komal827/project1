const Demo2 = ({ count, Incr,Decr }) => {


    return (
        <>

            <h1>Demo 2 component</h1>
            <h1>{count}</h1>
            <button onClick={Incr}>Increment</button>
            <button onClick={Decr}>Decrement</button>
        </>
    )
}
export default Demo2;
