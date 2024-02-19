import React from "react";
import welcome from '../welcome.webp'
const Body = () =>{
	return ( 
        <div style={{
          background:"rgb(255,113,154)"
          }}>
             <center>
                       &nbsp;&nbsp;
                       &nbsp;&nbsp;
                       &nbsp;&nbsp;
                        <div style={{height:610}} >
                        &nbsp;&nbsp;
                        &nbsp;&nbsp;
                      <img src={welcome}  width={700} height="500" />
                        </div>
                    </center>
        </div>  
            )
};
export default Body;