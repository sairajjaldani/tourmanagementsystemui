import React from "react";
import axios from "axios";
import { useState } from "react";
import TextField from "material-ui/TextField";
import { Button } from "@mui/material";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function Payment(){
    const [bankName,setbankName] = useState("");
    const [cardType,setcardType] = useState("");
    const [cardNo,setcardNo] = useState("");
    const [bookingId,setbookingId] = useState("");
    // const [customerId,setcustomerId] = useState("");
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      try {
          
        
        await axios.post("http://localhost:8080/payments",
        {
            "paymentId": 0,
            "totalcost": 0,
            "bankName": bankName,
            "cardType": cardType,
            "cardNo": cardNo,
            "paymentStatus": "string",
            "bookingId": bookingId,
            "customerId": localStorage.getItem("userId")
          }
          );
        alert(" Payment Successfull" );
        setbankName("");
        setcardType("");
        setcardNo("");
        setbookingId("");
        // setcustomerId("");
      } catch (err) {
        alert("Payment Failed");
      }
    
    }
    return (
      <div className="payment-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <h2 className="font-sans text-center text-4xl mt-10 mb-2 font-bold">
            payment
          </h2>
          <p className="text-center capitalize mb-2 hover:uppercase">
            Fill in the Information Below
          </p>
          <MuiThemeProvider>
          <TextField
            className="px-2" 
            id="outlined-basic" label="bankName" variant="outlined"
            type="text"
            name="bankName"
            required
            placeholder="bankName"
            onChange={(event) => {
              setbankName(event.target.value);
            }}
          />
          <br/>
          <TextField
            className="px-2"
            id="outlined-basic" label="cardType" variant="outlined"
            type="text"
            name="cardType"
            required
            placeholder="cardType"
            onChange={(event) => {
              setcardType(event.target.value);
            }}
          />
           <br/>
          <TextField
            className="px-2"
            id="outlined-basic" label="cardNo" variant="outlined"
            type="text"
            name="cardNo"
            required
            placeholder="cardNo"
            onChange={(event) => {
              setcardNo(event.target.value);
            }}
          />
          <br/>
          <TextField
            className="px-2"
            id="outlined-basic" label="bookingId" variant="outlined"
            type="text"
            name="bookingId"
            required
            placeholder="bookingId"
            onChange={(event) => {
              setbookingId(event.target.value);
            }}
          />
          <br/>
          {/* <TextField
            className="px-2"
            id="outlined-basic" label="customerId" variant="outlined"
            type="text"
            name="customerId"
            required
            placeholder="customerId"
            onChange={(event) => {
              setcustomerId(event.target.value);
            }}
          /> */}
          
          
          </MuiThemeProvider>
  
          <br />
          <Button variant="contained" type="submit">
            pay amount
          </Button>
          <br/>
          <Button href="/feedback" variant="contained" color="success">Feedback Form</Button>
        </form>
      </div>

    );
}

export default Payment;
