import React from "react";
import CardView from "./CardView";
import { useEffect, useState } from "react";
import { API } from "../service/API";
import { Link } from "react-router-dom";
import { AppBar, Box, Button } from "@mui/material";


const Myblogs=()=>{

const [posts,setPosts] = useState([]);

useEffect(()=>{
    const fetchData = async ()=>{
        let response=await API.getBlogPost();
       if(response.isSuccess){
        setPosts(response.data);
       }
    }
    fetchData();
},[]) 

    return(
    <>
       <AppBar position="sticky" sx={{background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"}}>
       <Box display="flex" marginLeft="auto">
       <Button LinkComponent={Link} to="/userhome"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">
                BACK
            </Button>
        </Box>
    </AppBar>

       {           
            posts && posts.length>0 ? posts.map(post=>(
               <CardView post={post}/>
            )): <Box style={{color:'#878787', margin:'30px 80px',fontSize:18}} >
                No data available...</Box>
        }

    
    </>
);
}

export default Myblogs;