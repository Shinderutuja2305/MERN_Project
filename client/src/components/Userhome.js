import { AppBar, Button, Toolbar,Box, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import blogging from "../blogimg.jpg"
import React, { useState } from "react";

const Userhome=() =>{

    const [value,setValue]=useState();
    return(
    <><div>
        <AppBar position="sticky" 
    sx={{
			background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
        }}>
            <Toolbar>
            <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
                <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={Link} to="/createblog" label="All Blog"/>
                    <Tab LinkComponent={Link} to="/myblogs" label="My blogs"/>
                </Tabs>
            </Box>
            <Box display="flex" marginLeft="auto">
            <Button LinkComponent={Link} to="/"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">
                LOGOUT
            </Button>
            </Box>
            </Toolbar>
        </AppBar>
    </div>
    <div style={{ background:"orange",height:'85vh'}} >
        &nbsp;&nbsp;
        <center><h1>Welcome....</h1><p style={{fontSize:'24px',fontWeight:'600',color:'blueviolet'}}>{sessionStorage.getItem("username")} </p><span></span>
       <h1> to the Blog App..!</h1>
       &nbsp;&nbsp;
       <img style={{paddingTop:"20px",objectFit:"cover"}} src={blogging} height={400} width="550"></img></center>
    </div>
    <footer className="footer" position="sticky">
    </footer>
    </>)
};
export default Userhome;
