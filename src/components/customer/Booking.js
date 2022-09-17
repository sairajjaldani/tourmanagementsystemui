import React from "react";
import axios from "axios";
import { useState } from "react";
import TextField from "material-ui/TextField";
import { Button } from "@mui/material";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function Booking(){
    const [totalPersons,setTotalPersons] = useState("");
    const [fromDate,setFromDate] = useState("");
    const [toDate,setToDate] = useState("");
    // const [packageId,setpackageId] = useState("");
    // const [customerId,setCustomerId] = useState("");
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      try {
          
        
        await axios.post("http://localhost:8080/bookings", {
            bookingId: 0,
            totalPersons: totalPersons,
            totalCost: 0,
            travellingCost: 0,
            accomdationCost: 0,
            fromDate: fromDate,
            toDate: toDate,
            paymentStatus: "pending",
            packageId: localStorage.getItem("packageId"),
            customerId: localStorage.getItem("userId")
          });
        alert(" Booking Successfull" );
        setTotalPersons("");
        setFromDate("");
        setToDate("");
        // setpackageId("");
        // setCustomerId("");
      } catch (err) {
        alert("Booking Failed");
      }
    
    }
    return (
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="font-sans text-center text-4xl mt-10 mb-2 font-bold">
            Booking
          </h2>
          <p className="text-center capitalize mb-2 hover:uppercase">
            Fill in the Information Below
          </p>
          <MuiThemeProvider>
          <TextField
            className="px-2" 
            id="outlined-basic" label="totalPersons" variant="outlined"
            type="text"
            name="totalPersons"
            required
            placeholder="No of Persons"
            onChange={(event) => {
              setTotalPersons(event.target.value);
            }}
          />
          <br/>
          <TextField
            className="px-2"
            id="outlined-basic" label="fromDate" variant="outlined"
            type="date"
            name="fromDate"
            required
            placeholder="fromDate"
            onChange={(event) => {
              setFromDate(event.target.value);
            }}
          />
           <br/>
          <TextField
            className="px-2"
            id="outlined-basic" label="toDate" variant="outlined"
            type="date"
            name="toDate"
            required
            placeholder="toDate"
            onChange={(event) => {
              setToDate(event.target.value);
            }}
          />
          {/* <br/>
          <TextField
            className="px-2"
            id="outlined-basic" label="packageId" variant="outlined"
            type="text"
            name="packageId"
            required
            placeholder="packageId"
            onChange={(event) => {
              setpackageId(event.target.value);
            }}
          /> */}
           {/* <br/>
          <TextField
            className="px-2"
            id="outlined-basic" label="customerId" variant="outlined"
            type="text"
            name="customerId"
            required
            placeholder="customerId"
            onChange={(event) => {
              // setCustomerId(event.target.value);
              setCustomerId(localStorage.getItem('userId'));
            }} */}
          {/* /> */}
          </MuiThemeProvider>
  
          <br />
          <Button variant="contained" type="submit">
            Book Package
          </Button>
        </form>
      </div>

    );
}

export default Booking;
