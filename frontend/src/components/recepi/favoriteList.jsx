import React, { useEffect, useState } from 'react'
import Navbar from '../home/navbar'
import RecepiList from './recepilist'
import Singlefavoriterecepi from './singlefavoriterecepi';
import axios from 'axios';

const FavoriteList = () => {
  let [favoriterecepi, setfavoriterecepi] = useState([]);
  let url = "http://localhost:9000";

  //calling the fetch function to get the data
  async function fetchdata() {
    let res = await fetch(`${url}/recepi`);
    let json = await res.json();
    let data = await axios.get(`${url}/user/favorites`, {
      headers: { auth: localStorage.getItem("token") },
    });
    setfavoriterecepi(
      json.data["recipes"].filter((el) =>
        data.data['favorites'].includes(el.id)
      )
    );

  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <Navbar />
      <div className='favoriterecepilist'>
        {
          favoriterecepi?favoriterecepi.map((item)=>{
                return <Singlefavoriterecepi item={item} /> 
          }):null
        }

      </div>
      </div>
  );
}

export default FavoriteList