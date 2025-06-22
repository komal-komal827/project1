function Demo() {
    let student=[
        {name:"komal",age:20},
        {name:"ishwari",age:20},
        {name:"gayatri",age:21}
    ]

    return (
        <>
        <h1>list rendering &keys</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>sr.no</th><th>name</th><th>age</th>

                </tr>
            </thead>
            {
                student.map((s,index)=>{
                    return(
                    <tr key={index}> 
                     <th>{index+1}</th><th>{s.name}</th><th>{s.age}</th>    
                    </tr>
                    )

                })
            }

        </table>

            
        </>
    )
}
export default Demo;

