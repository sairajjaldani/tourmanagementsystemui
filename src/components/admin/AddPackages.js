import axios from "axios";
import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";



function AddPackages(){
    
    const [packageName,setpackageName] = useState("");
    const [description,setdescription] = useState("");
    const [destination,setdestination] = useState("");
    const [modeofTravel,setmodeofTravel] = useState("");
    const [packageCostPerPerson,setpackageCostPerPerson] = useState("");
    const [hotelName,sethotelName] = useState("");
    const [roomCostPerPerson,setroomCostPerPerson] = useState("");
    const [city,setcity] = useState("");
   
    async function handleSubmit(event) {
        event.preventDefault();
        try{
             await axios.post("http://localhost:8080/tours",
             {
              "packageId": 0,
              "packageName": packageName,
              "description": description,
              "destination": destination,
              "modeofTravel": modeofTravel,
              "packageCostPerPerson": packageCostPerPerson,
              "accommodation": {
                "hotelName": hotelName,
                "roomCostPerPerson": roomCostPerPerson,
                "city": city
              },
              "userId": 2
            }
             );
             alert("Package Added successfully");
             setpackageName("");
             setdescription("");
             setdestination("");
             setmodeofTravel("");
             setpackageCostPerPerson("");
             sethotelName("");
             setroomCostPerPerson("");
             setcity("");
            //  setuserId("");
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <TextField
          className="px-2"
          id="outlined-basic" label="packagename" variant="outlined"
          type="text"
          name="packagename"
          required
          placeholder="packagename"
          onChange={(event) => {
            setpackageName(event.target.value);
          }}
    
        />
        <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="description" variant="outlined"
          type="text"
          name="description"
          required
          placeholder="description"
          onChange={(event) => {
            setdescription(event.target.value);
          }}

        />
         <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="destination" variant="outlined"
          type="text"
          name="destination"
          required
          placeholder="destination"
          onChange={(event) => {
            setdestination(event.target.value);
          }}

        />
         <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="modeoftravel" variant="outlined"
          type="text"
          name="modeoftravel"
          required
          placeholder="modeoftravel"
          onChange={(event) => {
            setmodeofTravel(event.target.value);
          }}
        />
         <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="packagecostperperson" variant="outlined"
          type="text"
          name="packagecostperperson"
          required
          placeholder="packagecostperperson"
          onChange={(event) => {
            setpackageCostPerPerson(event.target.value);
          }}
          
          
        />
        <TextField
          className="px-2"
          id="outlined-basic" label="hotelName" variant="outlined"
          type="text"
          name="hotelName"
          required
          placeholder="hotelName"
          onChange={(event) => {
            sethotelName(event.target.value);
          }}
        />
        <TextField
          className="px-2"
          id="outlined-basic" label="roomCostPerPerson" variant="outlined"
          type="text"
          name="roomCostPerPerson"
          required
          placeholder="roomCostPerPerson"
          onChange={(event) => {
            setroomCostPerPerson(event.target.value);
          }}
        />
        <TextField
          className="px-2"
          id="outlined-basic" label="city" variant="outlined"
          type="text"
          name="city"
          required
          placeholder="city"
          onChange={(event) => {
            setcity(event.target.value);
          }}
        />
        
        <Button variant="contained" type="submit">Add</Button>
        </form>
        </div>
    )

}



export default AddPackages