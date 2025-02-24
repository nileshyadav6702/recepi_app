import { useState } from "react"

function Example(){
    let [v1,setv1]=useState('')
    let [v2,setv2]=useState('')
    let [operation,setoperation]=useState('')
    let [ans,setans]=useState('')
    const obj={
        'add':'+',
        'mull':'*'
    }
    //functin to find ans
    function findans(){
        if(v1 && v2 && operation){
            v1=Number(v1)
            v2=Number(v2)
            console.log(operation)
            if(operation=='add'){
                setans(v1+v2)
            }
            else if(operation=='mull'){
                setans(v1*v2)
            }
        }
    }
    return (
        <>
        <div>
            <input type="text" placeholder="enter value one"  value={v1} onChange={(e)=>{
                setv1(e.target.value)
            }}/>
            <input type="text" placeholder="enter value two" value={v2} onChange={(e)=>{
                setv2(e.target.value)
            }}/>
            <select onChange={(e)=>{
                setoperation(e.target.value)
            }}>
                <option value="add">Add</option>
                <option value="mull">Mull</option>
                <option value="div">div</option>
                <option value="sub">sub</option>
            </select>
            <button onClick={()=>{findans()}}>show ans</button>
            <span>Ans:{ans}</span>
        </div>
        </>
    )
}

export default Example