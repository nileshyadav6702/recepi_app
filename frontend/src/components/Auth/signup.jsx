import { Mail, Lock, Eye, EyeOff ,User} from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const url = "https://recepi-app-ga7p.onrender.com";
const Signup = () => {
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate = useNavigate();

    //functin for signup
    async function signup(){
        if(username && email && password){
            try{
                const response = await axios.post(`${url}/user/Signup`, {
                  username,
                  email,
                  password,
                });
                if(response.status==200){
                  setemail('')
                  setpassword('')
                  setusername('')
                  navigate('/login')
                }
                else{
                  console.log('some error occured')
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
            <User />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e)=>{setusername(e.target.value)}}
            />
          </div>
          <div>
            <Mail />
            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
          </div>
          <div>
            <Lock />
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>{
                setpassword(e.target.value)
            }}/>
          </div>
        </div>
        <button className="loginbtn" onClick={()=>{signup()}}>Create Account</button>
        <div className="createAccount">
          <p>Already Have a Account?</p>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
