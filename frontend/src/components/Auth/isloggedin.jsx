import React from 'react'

const Islogedin = () => {
  return localStorage.getItem('token')?true:false
}

export default Islogedin