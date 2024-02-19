import { Box, Typography } from "@mui/material";
import { addElipsis } from "../utils/common-utils";



const Blog=({post})=>{
    return (
        <Box style={{border:'1px solid #d3cede',borderRadius:'10px',margin:'10px',height:'350px',display:'flex',alignItems:"center",flexDirection:'column'}}>
            <img style={{width:'100%',objectfit:'cover',height:170,borderRadius:'10px 10px 0 0'}} src={post.picture}/>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'12px'}}>{post.categories}</Typography>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'18px',fontWeight:600}}>{addElipsis(post.title,20)}</Typography>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'12px'}}>{post.username}</Typography>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'16px'}}>{addElipsis(post.description,100)}</Typography>
        </Box>
    );
}


export default Blog;