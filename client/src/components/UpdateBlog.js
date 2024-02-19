import { AppBar, Box, Button, FormControl, InputBase, TextareaAutosize } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {  useEffect, useState } from "react";
//import { DataContext } from "../context/DataProvider.js";
import { API } from "../service/API";
//import letter from "../person-working-on-laptop.webp"


const intialPost={
    title:"",
    description:"",
    picture:"",
    username:"",
    categories:"",
    createDate:new Date()
}

const UpdateBlog=()=>{

    const [post,setPost]=useState(intialPost);
    const [file,setFile]=useState('');

    //const account=useContext(DataContext);

    const location=useLocation();
    const navigate=useNavigate();
    const {id}=useParams();

  const letter=post.picture ? post.picture :"http://localhost:3000/static/media/person-working-on-laptop.c99bfd4edd45869f90d1.webp";

      useEffect(()=>{

        const fetchData = async()=>{
            let response=await API.getPostById(id);
            if(response.isSuccess){
                setPost(response.data);
            }
        }
        fetchData();
      },[])

    useEffect(()=>{
        const getImage=async ()=>{
            if(file){
                const data=new FormData();
                data.append("name",file.name);
                data.append("file",file);
                //API Call
              const response=await API.uploadfile(data);
                post.picture=response.data;
            }
        }
        getImage();
      post.categories=location.search?.split('=')[1] || 'All';
     // post.username=account.username;
      post.username=sessionStorage.getItem('username');
    },[file])

    const handleChange =(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }

    const updateBlogPost=async()=>{
        let response=await API.updatePost(post);
        if(response.isSuccess){
            navigate('/myblogs');
        }
    }

    return(

        <>
        <AppBar position="sticky" >
        <Box display="flex" marginLeft="auto">
    <Button LinkComponent={Link} to="/myblogs"  variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning"> BACK</Button>
    </Box>
        </AppBar>
        <div>
            <Box style={{margin:"50px 100px"}}>
                <img style={{objectfit:"cover"}} src={letter} width="100%" height="300" />
                <FormControl style={{marginTop:"15px",display:"flex",flexDirection:"row"}}>
                    <label htmlFor="fileInput">
                        <AddCircleIcon fontSize="large" color="action"/>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                    <InputBase style={{flex:"1",margin:"0px 30px",fontSize:"18px"}} value={post.title}
                    onChange={(e) => handleChange(e)}  name="title" placeholder="Title"/>
                    <Button variant="contained" onClick={()=>updateBlogPost()}>Update</Button>
                    
                </FormControl>
                <TextareaAutosize  minRows={5} onChange={(e) => handleChange(e)}  name="description" value={post.description} placeholder="Tell your story..." 
                   style={{width:"100%",marginTop:"50px",fontSize:"18px",border:"none",outline:"none"}} />
            </Box>
        </div>
        </>
    )
};
export default UpdateBlog;
