import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const CustomerHome=()=>{
    return(
        <div >
            
            <h1>Tour Management System</h1>
            <nav class="nav">
        
                <a class="nav-link" href="/CustomerHome">Home  </a>
                
                <a class="nav-link" href="/CustomerReservedTours">Reserved Tours   </a>
                <a class="nav-link" href="/CustomerTourPackages">Tour Packages   </a>
                <a class="nav-link" href="/MyCustomerProfile"><AccountCircleIcon/>  </a>
                
            </nav>
            <body >
                
            </body>
        </div>
        
    )
}
export default CustomerHome;