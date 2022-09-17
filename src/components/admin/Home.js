import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";




const Home=()=>{
    return(
    <>
        <h1 >Tour Management System</h1>
        <nav class="nav">
        
        <a class="nav-link" href="/Home">Home  </a>
        <a class="nav-link" href="/Customers">Customers </a>
        <a class="nav-link" href="/ReservedTours">Reserved Tours </a>
        <a class="nav-link" href="/TourPackages">Tour Packages </a>
        <a class="nav-link" href="/SignOut">SignOut</a>
        </nav>
        
  
        </>
    );
        
           
          
    
}
export default Home;