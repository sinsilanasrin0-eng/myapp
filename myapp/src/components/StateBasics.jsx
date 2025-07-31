import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,SetName]=useState("arjun")
    var [a,Seta]=useState()
    

    const inputHandler=(e)=>{
        console.log(e.target.value)
        SetName(e.target.value)
    }
    const subhandeler=()=>{
        Seta(name)
    }
    
  return (
    <div>
      <h1>Welcome {a}</h1>
      <TextField variant='outlined' onChange={inputHandler}/><br/><br/>
      <Button variant='contained' onClick={subhandeler}>Submit</Button>
    </div>
  )
}

export default StateBasics
