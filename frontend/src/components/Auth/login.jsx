import axios from "axios";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:9000";
const Login = () => {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const navigate=useNavigate()
  //function for login
    async function login(){
        if(email && password){
            try{
                const response = await axios.post(`${url}/user/Signin`, {
                  email,
                  password,
                });
                if(response.status==200){
                  localStorage.setItem('token',response.data.token)
                  setemail('')
                  setpassword('')
                  navigate('/')
                }
                else{
                  alert('user credential are wrong!')
                }
            }
            catch(error){
                console.log(error)
            }
        }
    }
  return (
    <div className="login">
      <div className="container">
        <div className="intro">
          <h1>FoodRecepi</h1>
          <h3>Welcome Back Please login to continue</h3>
        </div>
        <div className="inputs">
          <div>
            <Mail />
            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>{
              setemail(e.target.value)
            }} />
          </div>
          <div>
            <Lock/>
                <input type="password" name='password' placeholder="Password" value={password} onChange={(e)=>{
                  setpassword(e.target.value)
                }}/>
          </div>
        </div>
        <button className="loginbtn" onClick={()=>{login()}}>
          Login
        </button>
        <div className="createAccount">
            <p>Don't have a account?</p>
            <a href="/signup">Create an Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
