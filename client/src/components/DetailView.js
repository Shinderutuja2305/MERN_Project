import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { API } from "../service/API";

const DetailView=()=>{

    const {id}=useParams(); 
    const [blog,setPosts]=useState([]);
    const category='all';
    useEffect(()=>{
        const fetchData=async()=>{
         const response= await API.getPostById(id);
            if(response.isSuccess){
                setPosts(response.data);
            }
        }
        fetchData();
    },[] )
    return(
        <>
        {
            <Box style={{margin:'50px 100px'}}>
            <img src={blog.picture} style={{width:'100%',height:'50vh',objectfit:'cover'}}/>
            <Typography style={{fontSize:'38px',fontWeight:600,textAlign:'center',margin:'50px 0 10px 0',wordBreak:'break-word'}}>{blog.title}</Typography>
            <Box style={{color:'#878787',margin:'20px 0',display:'flex'}}>
                <Typography>Author: <Box component="span" style={{fontWeight:600}}>{blog.username}</Box></Typography>
                <Typography style={{marginLeft:'auto'}}>{new Date(blog.createDate).toDateString()}</Typography>
            </Box>
            <Typography style={{wordBreak:'break-word'}}>{blog.description}</Typography>
            </Box>

        }
        <Button style={{margin:'20px'}} variant="contained" LinkComponent={Link} to="/createblog" >Back</Button>
        </>
    );
}
export default DetailView;