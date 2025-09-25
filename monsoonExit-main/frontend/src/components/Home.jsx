//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )


//Write your code here
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Home = () => {
     const[blogs,setBlogs]=useState([]);
  
    useEffect(()=>{
  axios.get("http://localhost:3001/get")
  .then((res)=>{
    console.log(res.data)
    setBlogs(res.data)
  })
  },[])
  
   const deleteblog=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3001/delete/"+id)
    .then((res)=>{
      console.log(res.data.message)
      alert(res.data.message)
      window.location.reload()
    })
  }
  return (
    <div>
        <br/>
      <Grid container spacing={2}>
          {blogs.map((inputs)=>{
            return(
             <Grid item xs={12} md={4} sm={6}>  
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={inputs.img_url}
        title="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {inputs.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {inputs.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{deleteblog(inputs._id)}}>delete</Button>
        <Button size="small" >update</Button>
      </CardActions>
    </Card>
     </Grid> 
            )
          })}
        </Grid> 
    
    </div>
  )
}

export default Home
