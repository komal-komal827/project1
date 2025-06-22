/*function Demo() {
    let sub_paid = true;
    if (sub_paid) {
        return (
            <>
            <h1>conditional rendering</h1>
                <h1>Movies</h1>
            </>

        )
    }

    else {

        return (
            <>
                paid rupees
            </>

        )



    }
}
export default Demo

function Demo(props) {
    
 let isLogin=false
    return (
        <>
        {isLogin==true ? <h1>Home page</h1>: <h1> Login page</h1>}
            
        </>
    )
}
export default Demo*/

function Demo() {

let islogin=false
    return (
        <>
            <h1>demo component</h1>
            {(() => {
                if (islogin)
                {
                    return <h1>Home page </h1>

                }
                else 
                {
                    return <h1>login page</h1>
                }
            })()
            }

        </>
    );
}
export default Demo;


