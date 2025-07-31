import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar color='secondary'>
        <Toolbar>
          <h4>MYAPP</h4> &nbsp;&nbsp;
          <Link to='/lgn'>
          <Button Variant='contained'>Login</Button >
          </Link> &nbsp;&nbsp;

          <Link to='/'>
          <Button Variant='contained'>SignUp</Button>
          </Link> &nbsp;&nbsp;
          
           <Link to='/state'>
          <Button Variant='contained'>State</Button>
          </Link> &nbsp;&nbsp;

          <Link to='/new'>
          <Button Variant='contained'>new</Button>
          </Link> &nbsp;&nbsp;

           <Link to='/api'>
          <Button Variant='contained'>api</Button>
          </Link> &nbsp;&nbsp;


        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
