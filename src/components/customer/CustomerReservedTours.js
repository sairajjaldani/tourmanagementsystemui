import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomerHome from './CustomerHome';
import { Button } from '@mui/material';

const CustomerReservedTours=()=>{
    const [gettotalCost,settotalCost] = useState([]);
    const [getbookingId,setbookingId] = useState([]);
    const [gettotalpersons,settotalpersons] = useState([]);
    const [gettravellingCost,settravelingCost] = useState([]);
    const [getaccomdationCost,setaccomdationCost] = useState([]);
    const[getfromDate,setfromDate] = useState([]);
    const [gettoDate,settoDate] = useState([]);
    const [getpaymentStatus,setpaymentStatus] = useState([]);
    const [getpackageId,setpackageId] = useState([]);
    // const [getpackageName,setpackageName] = useState([]);
    const Tour=async () => {
        try{
            const result = await axios.get("http://localhost:8080/all/bookings");
            // const newArray2  = result2.data.filter(function(ea){
            //     return ea.userId === localStorage.getItem("userId");
            // })
            const newArray = result.data.filter(function (el)
            {
              return el.customerId == localStorage.getItem("userId") ;
            }
            );
            const listItems = newArray.map((data) => <p>{data.totalCost}</p>)
            const listItems1 = newArray.map((data) => <p>{data.bookingId}</p>)
            const listItems2 = newArray.map((data) => <p>{data.totalPersons}</p>)
            const listItems3 = newArray.map((data) => <p>{data.travellingCost}</p>)
            const listItems4 = newArray.map((data) => <p>{data.accomdationCost}</p>)
            const listItems5 = newArray.map((data) => <p>{data.fromDate}</p>)
            const listItems6 = newArray.map((data) => <p>{data.toDate}</p>)
            const listItems7= newArray.map((data) => <p>{data.paymentStatus}</p>)
            const listItems8= newArray.map((data) => <p>{data.packageId}</p>)
            // const listItems9= newArray.map((data) => <p>{data.packageName}</p>)
            settotalCost(listItems);
            setbookingId(listItems1);
            settotalpersons(listItems2);
            settravelingCost(listItems3);
            setaccomdationCost(listItems4);
            setfromDate(listItems5);
            settoDate(listItems6);
            setpaymentStatus(listItems7);
            setpackageId(listItems8);
            // setpackageName(listItems9);

        }catch(err){
            console.log(err);
        }
    }

    // setInterval(Tour,100);
    
    return(
        <div>
        
        <CustomerHome />
        <h3>Reserved Tours</h3>
        <center> 
            {/* <label>
            
                   Enter CustomerId
            </label>
            <br/>
            // <input type="number" placeholder='customerId'  id="customerId"/> */}
             <Button onClick={Tour} variant="contained">view Reserved Tours</Button>
             <br/>
             <br/>
             <Button href="/payments" variant="contained">Payment</Button>
             
        </center>
        <div className="container mx-auto my-8">
    <div className="flex shadow border-b mt-3">
            <table>
                <thead className="bg-gray-200">
                    <tr >
                        <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">TotalCost</th>

                        <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Booking Id</th>
                        <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">No of Persons</th>
                        <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Transportation Cost</th>
                        <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Accomodation cost</th>
                        <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">from Date</th>
                        <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">to Date</th>
                        <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Payment Status</th>
                        <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Package Id</th>
                        {/* <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Package Name</th> */}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {gettotalCost}
                        </div>
                    </td>
                    {/* <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {gettotalpersons}
                        </div>
                    </td> */}
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {getbookingId}
                        </div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {gettotalpersons}
                        </div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {gettravellingCost}
                        </div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {getaccomdationCost}
                        </div>
                    </td>
                    {/* <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {getpackageId}
                        </div>
                    </td> */}
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {getfromDate}
                        </div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {gettoDate}
                        </div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {getpaymentStatus}
                        </div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                    {getpackageId}
                    </div>
                    </td>
                    {/* <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-1xl  text-gray-500 hover:delay-75">
                        {getpackageName}
                        </div>
                    </td> */}
                </tbody>
            </table>
        </div>
        </div>
        </div>
    );
}
export default CustomerReservedTours;