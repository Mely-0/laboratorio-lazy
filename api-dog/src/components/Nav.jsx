import { Link } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import './css/nav.css';
import {
    Breadcrumb,
    BreadcrumbItem
    } from '@chakra-ui/react'
function Nav(){
return(<>
<div className="contenedor-nav">
<Box bg='tomato' w='100%' h='100%' p={4} color='white'>
    <Breadcrumb>
    <BreadcrumbItem>
    <Link to="/Empresa">About</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
    <Link to="/Contact">Contact</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
    <Link to="/Home">Home</Link>
    </BreadcrumbItem>
</Breadcrumb>
</Box>
</div>
</>
)
}
export default Nav;