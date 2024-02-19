import React from "react";
import blogging from '../blogging.jpg';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from "react-router-dom";
const Register =() =>{
    return (<main>
    <AppBar position="sticky" 
    sx={{
			background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
        }}>
      <Toolbar>
        <Typography variant="h4">Welcome...</Typography>
        <Box display="flex" marginLeft="auto">
            <Button LinkComponent={Link} to="/auth"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">
                LOGIN
            </Button>
            <Button LinkComponent={Link} to="/auth"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">SIGNUP
        
            </Button>
            <Button LinkComponent={Link} to="/"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">BACK
            </Button>
            
        </Box>
    </Toolbar>  
    </AppBar>
    <div style={{background:"linear-gradient(rgb(255,206,230),rgb(229,106,179))",height:"629px",}}>
        &nbsp;&nbsp;
        <div>
    <center><img src={blogging}  width={700} height="500" /></center>
    </div>
    </div>
    <footer className="footer">
    </footer>
    </main>
    );
};
export default Register;