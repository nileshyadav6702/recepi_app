import { Book, Clock, Heart, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

let url = "http://localhost:9000";

const Singlerecepi = (item) => {
  item=item.item
  let navigate=useNavigate()
  async function addtofavorite(){
    console.log('hi')
    let res=await axios.post(`${url}/user/favorite/${item.id}`,{},{
      headers:{
        auth:localStorage.getItem('token')
      }
    })
  }
  return (
    <div className="recepicard" key={item.id}>
      <div className="image">
        <img src={`${item["image"]}`} alt="food recepi" />
      </div>
      <div className="description">
        <h3>{item.name.toUpperCase()}</h3>
        <hr />
        <div className="details">
          <div className="wrapper">
            <div>
              <Clock />
              <span className="analtics">{item["prepTimeMinutes"]}</span>
            </div>
            <p>Minutes</p>
          </div>
          <div className="wrapper">
            <div>
              <Book />
              <span className="analtics">{item["ingredients"].length}</span>
            </div>
            <p>Ingredients</p>
          </div>
          <div className="wrapper">
            <div>
              <User />
              <span className="analtics">{item["servings"]}</span>
            </div>
            <p>Servings</p>
          </div>
        </div>
        <button className="viewRecepi" onClick={()=>{navigate(`/detail/${item.id}`)}}>View Recepi</button>
        <button className="addtofavorite">
          <div
            onClick={() => {
              addtofavorite();
            }}
          >
            <Heart size={18} />
            <span>{false ? "Added" : "Add"}</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Singlerecepi