import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import {categorie} from '../constants/data.js';

const Categories=()=>{
    
    const [searchParams]=useSearchParams();
    const category=searchParams.get('category');
    

return(
    <>
    <Button variant="contained" LinkComponent={Link} to={`/create?category=${category || ''}`}
 margin="20 px" style={{margin:"20px",width:"85%"}}>Create Blog</Button>
    &nbsp;
    <Table border="1" style={{ border:"1",borderColor:"rgba(224,224,224,1)"}}>
        <TableHead>
            <TableRow>
                <TableCell>
                    <Link to="/createblog" style={{textDecoration:"none"}}>All Categories
                    </Link>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {categorie.map((category)=>
                <TableRow key={category.id}>
                     <TableCell>
                        <Link to={`/createblog/?category=${category.type}`}  style={{textDecoration:"none"}}>
                    {category.type}
                    </Link>
                    </TableCell>
               </TableRow> )}
        </TableBody>
    </Table>
    </>
    )
};
export default Categories;