import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import { API } from "../service/API";
import DeleteIcon from '@mui/icons-material/Delete';


const BlogView=()=>{

    const {id}=useParams(); 
    const navigate=useNavigate();
    const [blog,setPosts]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
         const response= await API.getBlogById(id);
            if(response.isSuccess){
                setPosts(response.data);
            }
        }
        fetchData();
    },[] )

    const deleteBlog=async()=>{
        let respone=await API.deletePost(blog._id);
        if(respone.isSuccess){
            navigate('/dashboard');
        }
    }


    return (
            <>
            {
            <Box style={{margin:'50px 100px'}}>
            <img src={blog.picture} style={{width:'100%',height:'50vh',objectfit:'cover'}}/>
            <Box style={{float:'right'}}>
                <DeleteIcon style={{margin:'5px',padding:'5px',border:'1px solid #878787',borderRadius:'10px'}} color="error" onClick={()=>deleteBlog()}/>
            </Box>
            <Typography style={{fontSize:'38px',fontWeight:600,textAlign:'center',margin:'50px 0 10px 0',wordBreak:'break-word'}}>{blog.title}</Typography>
           
            <Box style={{color:'#878787',margin:'20px 0',display:'flex'}}>
                <Typography>Author: <Box component="span" style={{fontWeight:600}}>{blog.username}</Box></Typography>
                <Typography style={{marginLeft:'auto'}}>{new Date(blog.createDate).toDateString()}</Typography>
            </Box>
            <Typography style={{wordBreak:'break-word'}}>{blog.description}</Typography>
            </Box>

        }

           <Button style={{margin:'20px'}} variant="contained" LinkComponent={Link} to="/dashboard" >Back</Button>
            </>
    );
}

export default BlogView;