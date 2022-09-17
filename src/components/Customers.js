import axios from "axios";
import React, { useEffect, useState } from "react";
// import Home from "./admin/Home";


const Customers = () => {
    const [customers, setCustomers] = useState(null);
   const [loadings, setLoadings] = useState(true);

   useEffect(() => {
    const fetchData = async () => {
      setLoadings(true);
      try {
        const response = await axios.get("http://localhost:8080/all/customers");
        setCustomers(response.data);
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
//   const navigate= useNavigate();

//   const editCustomer=(e, id)=>{
//     e.preventDefault();
//     navigate(`/editCustomer/${id}`);
//   };

  return (
    <>
    <h3>List of Customers</h3>
    <div className="container mx-auto my-8">
    <div className="flex shadow border-b mt-3">

        <table className="min-w-full">
            <thead className="bg-gray-200">
                   <tr>
                   <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Customer Id</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        First Name</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                         Last Name</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Mobile Number</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Email Id</th>
                    <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">
                        Date of Birth</th>
                    
                    </tr> 
            </thead>
            {!loadings && (
            <tbody className="bg-white">
              {customers.map((customer)=>(
                <tr
                className=" bg-gray-100 hover:bg-gray-300 hover:delay-75"
                key={customer.customerId}
              >
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    {customer.customerId}
                  </div>
                </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    {customer.firstName}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                    {customer.lastName}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                     {customer.mobileno}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                     {customer.emailid}
                     
                  </div></td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 hover:delay-75">
                     {customer.dateofBirth}
                  </div>
                
                </td>
                        {/* <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                          <a
                          onClick={(e, id) => editCustomer(e,customer.id) }
                          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">Edit</a>


                          <a 
                          onClick={(e, id) =>deletecustomer(e,customer.id) }
                          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">Delete</a>
                        </td> */}
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

export default Customers