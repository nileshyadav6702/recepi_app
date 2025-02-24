import React, { useContext, useEffect, useState } from 'react'
import Singlerecepi from './singlerecepi'
import axios from 'axios'
import { DataContext } from '../datacontext';

const RecepiList = (props) => {
    const { query, setquery } = useContext(DataContext);
    let [allrecpei,setallrecepi]=useState([])
    let url = "https://recepi-app-ga7p.onrender.com";

    //calling the fetch function to get the data
    async function fetchdata(){
        let res=await fetch(`${url}/recepi`)
        let json=await res.json()
        if(!query){
          setallrecepi(json.data['recipes'])

        }
        else{
          setallrecepi(json.data['recipes'].filter((el)=>el.name.toLowerCase().includes(query.toLowerCase())))
        }
    }

    useEffect(()=>{
        fetchdata()
    },[query])
  return (
    <div className='recepilist'>
        {
            allrecpei.length>0?
            allrecpei.map((item,indx)=>{
                return <Singlerecepi item={item} indx={indx}/>
            })
            :null
        }
    </div>
  )
}

export default RecepiList