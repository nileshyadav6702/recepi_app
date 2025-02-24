import React, { useEffect, useState } from 'react'
import Navbar from '../home/navbar'
import axios from 'axios'
import { useSearchParams } from "react-router";
let url = "http://localhost:9000";
const Viewdetail = () => {
    let [detail,setdetail]=useState('')
    async function fetchdata(){
        let data = await axios.get(
          `${url}/recepi/onerecepi/${window.location.href.split("/")[4]}`
        );
        setdetail(data['data']['data'])

    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
        <Navbar/>
        {
            detail?<div className='viewdetail'>
                <div className='detailimage'>
                    <img src={detail.image} alt="" />
                </div>
                <div className='recepidetail'>
                    <h2>{detail.name}</h2>
                    <p>Ingredients</p>
                    <ul>
                        {
                            detail.ingredients.map(el=><li>{el}</li>)
                        }
                    </ul>
                    <p>instructions</p>
                    <ul>
                        {
                            detail.instructions.map(el=><li>{el}</li>)
                        }
                    </ul>
                </div>
            </div>:null
        }
    </div>
  )
}

export default Viewdetail