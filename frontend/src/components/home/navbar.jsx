import React, { useContext, useState } from "react";
import { Menu, X, Search, User, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Islogedin from "../Auth/isloggedin";
import { DataContext } from "../datacontext";

const Navbar = () => {
  const { query, setquery } = useContext(DataContext);
  let navigate=useNavigate()
  let [loged,setloged]=useState(localStorage.getItem('token')==null?false:true)
  //logout function
  function logout(){
    localStorage.clear()
    setloged(false)
  }
  return (
    <nav className="navbar">
      <div className="left">
        {/* left side logo */}
        <h1 className="logo" onClick={()=>{navigate('/')}}>Food Recepi</h1>
        {/* buttons for navigation */}
        <div className="btns">
          <button onClick={()=>{navigate('/favorite')}}>favorite</button>
          <button>all food recepi</button>
        </div>
      </div>
      {/* search bar */}
      <div className="search">
        <Search className="text-gray-500 mr-3" size={20} />
        <input type="text" placeholder="Search food recepi..." value={query} onChange={(e)=>{setquery(e.target.value)}}/>
      </div>
      {/* right side buttons */}
      <div className="right">
        <User size={18} />
        {!loged ? (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            login/signup
          </button>
        ) : (
          <button
            onClick={() => {
              logout()
            }}
          >
            logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
