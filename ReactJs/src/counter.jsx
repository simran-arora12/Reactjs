import { useState } from "react"

function Counter(){
  let [count,setcount]=useState(0)

const addvalue=()=>{
  if(count<20){    setcount(count+1)
}}

const deletevalue=()=>{
  if(count>0){
  setcount(count-1)}
}
    return(
        <>
         <button className="mx-5 my-4" onClick={addvalue} >Add Value {count}</button>
         <br></br>
         <button className="mx-5 my-4" onClick={deletevalue} >Delete Value {count}</button>

        </>
    )
}
export default Counter