import React from 'react';
//import Home from "./admin/Home";
//import CustomerTourPackages from './customer/CustomerTourPackages';
import  { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TourPackages = () => {
  let navigate = useNavigate();
   const GotoNext = () => {
    navigate("/AddPackages");
  };
    const [TourPackages, setpackages] = useState(null);
   const [loadings, setLoadings] = useState(true);

   useEffect(() => {
    const fetchData = async () => {
      setLoadings(true);
      try {
        const response = await axios.get("http://localhost:8080/all/tours");
        setpackages(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoadings(false);
    }; 
    fetchData();
  }, []);
//   const deletecustomer =(e,id)=>{
//     e.preventDefault();
//     CustomerService.deleteCustomerById(id).then((res)=>{
//       if(customers){
//         setCustomers((prevElement)=>{
//           return prevElement.filter((customer)=>customer.id !== id);
//         });
//       }
//     });
//   };


  // const editCustomer=()=>{
   
  //   navigate("/Booking");
  // };

  return (
    <>
    <h3>Tour Packages<br/><br/>
    <Button variant="contained" color="success" onClick={GotoNext} >Add Package</Button></h3>
    <div className="container mx-auto my-8">
    <div className="flex shadow border-b mt-3">

        <table className="min-w-full">
            <thead className="bg-gray-200">
                   <tr>
                   <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Package Id</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Package Name</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                         Description</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Destination</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Mode of Travel</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Package Cost PerPerson</th>
                    {/* <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Booking</th> */}
                    
                    </tr> 
            </thead>
            {!loadings && (
            <tbody className="bg-white">
              {TourPackages.map((tourpackages)=>(
                <tr
                className=" bg-gray-100 hover:bg-gray-300 hover:delay-75"
                key={tourpackages.packageId}
              >
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    {tourpackages.packageId}
                  </div>
                </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    {tourpackages.packageName}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                    {tourpackages.description}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                     {tourpackages.destination}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                     {tourpackages.modeofTravel}
                     
                  </div></td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                     {tourpackages.packageCostPerPerson}
                  </div>
                
                </td>
                        <td >
                    {/* <button
                          onClick={editCustomer }
                          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">Edit</button>
                           */}

                          {/* <a 
                          onClick={(e, id) =>deletecustomer(e,customer.id) }
                          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">Delete</a> */}
                        </td>
                      </tr>
            ))}
            </tbody>
            )}
            </table>
            </div>


    </div>
    </>
    
  )
}


export default TourPackages