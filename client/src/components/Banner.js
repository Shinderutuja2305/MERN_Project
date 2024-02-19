import { AppBar, Box, Button, Grid, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import  blog from '../blog.jpg';
import {react} from 'react';
import Categories from './Categories';
import Posts from './Posts';

const Banner=()=>{
    return(
<><div>
   <AppBar position="sticky" sx={{background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
}}>
    <Box display="flex" marginRight={'auto'}>
    </Box>
    <Box display="flex" marginLeft="auto">

            <Button LinkComponent={Link} to="/userhome"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">
                BACK
            </Button>
    </Box>
   </AppBar>
    </div>
<div>
    <div>
    &nbsp;&nbsp;
        <img src={blog} width="800" height="150"/>
        &nbsp;&nbsp;
     </div>
     <Grid container>
    <Grid item lg={2} sm={2} xs={12}>
        <Categories/>
    </Grid>
    <Grid container item xs={12} sm={10} lg={10}>
         <Posts/>
    </Grid>
    </Grid>

</div>
<footer className="footer">
</footer>
</>
    )
};
export default Banner;