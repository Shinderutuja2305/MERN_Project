import { useEffect, useState } from "react";
import { API } from "../service/API";
import Blog from "./Blog";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";




const Blogs=()=>{

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            let response=await API.getBlogs();
           if(response.isSuccess){
            setPosts(response.data);
           }
        }
        fetchData();
    },[])


    return(
        <>
        {
            
            posts && posts.length>0 ? posts.map(post=>(
                <Grid item lg={3} sm={4} xs={12} >
                    <Link to={`/views/${post._id}`}  style={{textDecoration:'none',color:'inherit'}}>
                    <Blog post={post}/>
                  </Link>
                </Grid>
            )): <Box style={{color:'#878787', margin:'30px 80px',fontSize:18}} >
                No data available...</Box>
        }
        </>
    )
};

export default Blogs;