import React, { useState } from 'react'
import Navbar from './navbar'
import RecepiList from '../recepi/recepilist'

const Home = () => {
  let [query,setquery]=useState('')
  return (
    <div>
        <Navbar/>
        <RecepiList query={query} setquery={setquery}/>
    </div>
  )
}

export default Home