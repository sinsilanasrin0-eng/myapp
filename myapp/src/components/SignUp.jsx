import { Button, TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h1>SignUp page</h1>
      <TextField label="Name" varient="outlined" /><br /><br />
       <TextField label="Age" varient="outlined" /><br /><br />
        <TextField label="Phone" varient="outlined" /><br /><br />
         <TextField label="Password" varient="outlined" /><br /><br />
         <Button variant="contained">Submit</Button>
    </div>
  )
}

export default SignUp
