// function Demo(props) {
//    let handleInput = (e) => {
//         console.log(e.target.value)
//     }

//     return (
//     <div>
//      <input type="text" name='txt_name' onChange={handleInput} placeholder="Enter name" />
//     {/* <input type="text" name='txt_age' onChange={handleInput} placeholder="Enter age" />   */}


//        </div>
//     )
// }
// export default Demo;

function Demo2(props) {
    let handleInput=(e)=>{
console.log(e.target.name)
}

    return (
        <>
     Enter name:<input type="text" onChange={handleInput} name='txt_name' />
     <br />
     <select  id="" onChange={handleInput} name='select_city'>
     <option value="vaijapur">vaijapur</option>
     <option value="shirdi">shirdi</option>
     <option value="yeola">yeola</option>
     </select>

            
        </>
    )
}
export default Demo2;cls
