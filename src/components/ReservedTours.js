// import React from 'react';
// //import Home from "./admin/Home";
// //import CustomerTourPackages from './customer/CustomerTourPackages';
// import  { useEffect, useState } from "react";
// import axios from 'axios';

// const ReservedTours = () => {
//     const [ReservedTours, settours] = useState(null);
//    const [loadings, setLoadings] = useState(true);

//    useEffect(() => {
//     const fetchData = async () => {
//       setLoadings(true);
//       try {
//         const response = await axios.get("http://localhost:8080/all/bookings");
//         settours(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoadings(false);
//     }; 
//     fetchData();
//   }, []);
// //   const deletecustomer =(e,id)=>{
// //     e.preventDefault();
// //     CustomerService.deleteCustomerById(id).then((res)=>{
// //       if(customers){
// //         setCustomers((prevElement)=>{
// //           return prevElement.filter((customer)=>customer.id !== id);
// //         });
// //       }
// //     });
// //   };
// //   const navigate= useNavigate();

// //   const editCustomer=(e, id)=>{
// //     e.preventDefault();
// //     navigate(`/editCustomer/${id}`);
// //   };

//   return (
//     <>
//     <h3>Reserved Tours</h3>
//     <div className="container mx-auto my-8">
//     <div className="flex shadow border-b mt-3">

//         <table className="min-w-full">
//             <thead className="bg-gray-200">
//                    <tr>
//                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                         Booking Id</th>
//                     <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                         Total Persons</th>
//                     <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                          Total Cost</th>
//                     <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                         Travelling Cost</th>
//                     <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                         Accomodation Cost</th>
//                     <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                         From Date</th>
//                     <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                         To Date</th>
//                     <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                         Payment Status</th>
//                     <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                         Package Id</th>
//                     <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
//                         Customer Id</th>
                    
//                     </tr> 
//             </thead>
//             {!loadings && (
//             <tbody className="bg-white">
//               {ReservedTours.map((reservedtours)=>(
//                 <tr
//                 className=" bg-gray-100 hover:bg-gray-300 hover:delay-75"
//                 key={reservedtours.bookingId}
//               >
//                 <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-1xl  text-gray-500 hover:delay-75">
//                     {reservedtours.bookingId}
//                   </div>
//                 </td>
//                       <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-1xl  text-gray-500 hover:delay-75">
//                     {reservedtours.totalPersons}
//                   </div>
//                 </td>
//                 <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500 hover:delay-75">
//                     {reservedtours.totalCost}
//                   </div>
//                 </td>
//                 <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500 hover:delay-75">
//                      {reservedtours.travellingCost}
//                   </div>
//                 </td>
//                 <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500 hover:delay-75">
//                      {reservedtours.accomdationCost}
                     
//                   </div></td>
//                   <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500 hover:delay-75">
//                      {reservedtours.fromDate}
//                   </div>
//                   </td>
//                   <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500 hover:delay-75">
//                      {reservedtours.toDate}
//                   </div>
//                   </td>
//                   <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500 hover:delay-75">
//                      {reservedtours.paymentStatus}
                     
//                   </div></td>
//                   <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500 hover:delay-75">
//                      {reservedtours.packageId}
//                   </div>
//                   </td>
//                   <td className="text-left px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500 hover:delay-75">
//                      {reservedtours.customerId}
//                   </div>
                  
                
//                 </td>
//                         {/* <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
//                           <a
//                           onClick={(e, id) => editCustomer(e,customer.id) }
//                           className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">Edit</a>


//                           <a 
//                           onClick={(e, id) =>deletecustomer(e,customer.id) }
//                           className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">Delete</a>
//                         </td> */}
//                       </tr>
//             ))}
//             </tbody>
//             )}
//             </table>
//             </div>


//     </div>
//     </>
    
//   )
// }

// export default ReservedTours