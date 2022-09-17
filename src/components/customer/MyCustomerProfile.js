import { Button } from "@mui/material";
import CustomerHome from "./CustomerHome";
import { useState } from "react";
import axios from "axios";
import '../registration.css';

// import '../components/customer/MyCustomerProfile.css';

const MyCustomerProfile=()=>{
    const [getData,setData] = useState([]);
    const [getAddress,setAddress] = useState();
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8080/customers/"+localStorage.getItem("userId").toString());
            console.log(response);
            setData(response.data);
            setAddress(response.data.address[0]);
            console.log(getAddress.doorNo);
          } catch (error) {
            console.log(error);
          }
        };
        // setInterval(
        //   fetchData
        // , 10);
    return(
        <div > 
            <CustomerHome />
            <h3>My Profile</h3>
            <center>
            <div className="card">
                <div className="profile-container">
                <center>
            <Button onClick={fetchData}>Get</Button>
            <img src="https://png.pngtree.com/png-vector/20191125/ourlarge/pngtree-beautiful-profile-line-vector-icon-png-image_2035279.jpg" width="75" height="75"></img>
            <div>
              <br/>
            {/* <b>customerId</b>      =     {getData.customerId} */}
            </div>
            <div>
            <b>Firstname</b>       =     {getData.firstName}
            </div>
            <div>
            <b>Lastname</b>        =     {getData.lastName}
            </div>
            <div>
            <b>Mobile No</b>       =     {getData.mobileno}
            </div>
            <div>
            <b>Email Id</b>= {getData.emailid}
            </div>
            <div>
            <b>D.o.B</b>={getData.dateofBirth}
            </div>
            <br/>
            <br/>
            {/* <a class="nav-link" href="/SignOut">SignOut</a> */}
            <pre/> <Button
                  className="py-2"
                  variant="contained"
                  href="/SignOut"
                >
                  SignOut
                </Button>
                
            </center>
            </div>
        </div>
        </center>
        </div>
    )
}
export default MyCustomerProfile;