function PropsDemo({stud})

{
  return(
<>
{
  stud.map((s)=>{
    return(
      <h2>{s.name} - {s.age}</h2>
    )

      
   })
}
 </>   
  )
}
export default PropsDemo