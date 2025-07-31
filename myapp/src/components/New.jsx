import { Button } from '@mui/material'
import React, { useState } from 'react'


const New = () => {
    var[a,Seta]=useState()

    const inpt1 = () => {
    Seta("React")
    }
    const inpt2 = () => {
    Seta("Angular")
    }
    const inpt3 = () => {
    Seta("Nest")
    }
    return (
    <div>
    <h1>Welcome {a}</h1> 
    <Button variant='contained' color='secondary'onClick={inpt1} >React</Button> &nbsp; &nbsp;
    <Button variant='contained' color='error'onClick={inpt2} >Angular</Button> &nbsp; &nbsp;
    <Button variant='contained' color='success' onClick={inpt3}>Nest</Button> &nbsp; &nbsp;
    

    </div>
  )
}

export default New
