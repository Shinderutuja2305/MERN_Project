import {Card,CardHeader,CardMedia,Typography,CardContent,Avatar, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from "../service/API";
import { Link, useNavigate } from "react-router-dom";




 const CardView =({post})=>{
  const account=sessionStorage.getItem('username');
  const navigate=useNavigate();

  const deletePost=async()=>{
    let respone=await API.deleteBlog(post._id);
    if(respone.isSuccess){
        navigate('/userhome');
    }
}


    return(
<>

     {
        account=== post.username &&
      <>
   <Card sx={{ width:'40%',margin:'auto',mt:2,padding:2,boxShadow:"5px 5px 10px #ccc"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="blogs">
          </Avatar>
        }
        title={post.title}
        subheader={new Date(post.createDate).toDateString()}
      />
      <CardMedia
        component="img"
        height="194"
        src={post.picture}
        alt="Paella dish"
      />
      <CardContent>
        <Box style={{float:'right'}}>
          <Link to={`/update/${post._id}`}>
          <EditIcon color='primary' style={{margin:'5px',padding:'5px',border:'1px solid #878787',borderRadius:'10px'}}/>
          </Link>
          <DeleteIcon color='error' style={{margin:'5px',padding:'5px',border:'1px solid #878787',borderRadius:'10px'}} onClick={()=>deletePost()}/>
        </Box>
      </CardContent>
     <CardContent>
        <Typography style={{fontSize:'10px'}}>{post.categories}</Typography>
        <Typography variant="body2" color="text.secondary">
         {post.description}
        </Typography>
      </CardContent>
    </Card>
    </>
      }
</>
);
}

export default CardView;