import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/registration.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
//import { Input } from "@mui/icons-material";

function Register() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [mobileno,setMobileno] = useState("");
  const [emailid,setEmailid] = useState("");
  const [dateofBirth,setDateofBirth] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [role, setRole] = useState("");
  const [doorNo,setdoorNo] = useState("");
  const [street,setStreetNo] = useState("");
  const [city , setCity] = useState("");
  const [state,setState] = useState("");
  const [pincode,setPincode] = useState("");
  const [isError, setIsError] = useState(false);
  
  
  

  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("pass",event.target.elements.confirm_password.value);

    try {
      if (localStorage.getItem("pass")===password){
        
      
      await axios.post("http://localhost:8080/customers", {
        firstName: firstName,
        lastName: lastName,
        mobileno: mobileno,
        emailid: emailid,
        dateofBirth: dateofBirth,
        user: {
          userName: userName,
          password: password,
          role: "customer"
        },
        address: [
          {
            doorNo: doorNo,
            street: street,
            city: city,
            state: state,
            pincode: pincode
          }
        ]
      });
      alert("User Registation Successfully");
      setFirstName("");
      setLastName("");
      setMobileno("");
      setEmailid("");
      setDateofBirth("");
      setUsername("");
      setPassword("");
      //setRole("");
      setdoorNo("");
      setStreetNo("");
      setCity("");
      setState("");
      setPincode("");
    }else{
      alert("password mismatch");
    }
    } catch (err) {
      alert("User Registation Failed");
    }
  
  }
  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="font-sans text-center text-4xl mt-10 mb-2 font-bold">
          Registration Form
        </h2>
        <p className="text-center capitalize mb-2 hover:uppercase">
          Fill the below registration form
        </p>
        <TextField
          className="px-2"
          id="outlined-basic" label="firstname" variant="outlined"
          type="text"
          name="firstName"
          required
          placeholder="firstName"
          inputProps={{
            maxLength: 30,
          }}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="lastname" variant="outlined"
          type="text"
          name="lastName"
          inputProps={{
            maxLength: 30,
          }}
          required
          placeholder="lastName"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
         <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="mobileno" variant="outlined"
          type="tel"
          error={isError}
          name="mobileno"
          inputProps={{
            maxLength: 10,
            
          }}
          
          required
          placeholder="mobileno"
          onChange={(event) => {
            setMobileno(event.target.value );
            if (event.target.value.length > 10) {
              setIsError(true);
            }
          }}
        />
         <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="emailid" variant="outlined"
          type="text"
          name="emailid"
          required
          placeholder="emailid"
          onChange={(event) => {
            setEmailid(event.target.value);
          }}
        />
         <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="DoB" variant="outlined"
          type="date"
          name="dateofBirth"
          required
          placeholder="dateofBirth"
          onChange={(event) => {
            setDateofBirth(event.target.value);
          }}
        />
         <br/>

        <TextField
          className="px-2"
          id="outlined-basic" label="username" variant="outlined"
          type="text"
          name="userName"
          inputProps={{
            maxLength: 15,
          }}
          required
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="password" variant="outlined"
          type="password"
          name="password"
          inputProps={{
            maxLength: 15,
          }}
          required
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
         <br/>
        {/* <TextField
          className="px-2"
          type="text"
          name="role"
          required
          placeholder="role"
          onChange={(event) => {
            setRole(event.target.value);
          }}
        />
         <br/> */}
         <TextField
         onPaste={(e)=>{
          e.preventDefault()
          return false;
        }} onCopy={(e)=>{
          e.preventDefault()
          return false;
        }}
          className="px-2"
          id="outlined-basic" label="confirm password" variant="outlined"
          type="password"
          name="confirm_password"
          inputProps={{
            maxLength: 15,
          }}
          required
          placeholder="confirm password"
          
          
        />
        <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="doorNo" variant="outlined"
          type="text"
          name="doorNo"
          inputProps={{
            maxLength: 6,
          }}
          required
          placeholder="doorNo"
          onChange={(event) => {
            setdoorNo(event.target.value);
          }}
        />
         <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="street" variant="outlined"
          type="text"
          name="street"
          inputProps={{
            maxLength: 15,
          }}
          required
          placeholder="street"
          onChange={(event) => {
            setStreetNo(event.target.value);
          }}
        />
         <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="city" variant="outlined"
          type="text"
          name="city"
          inputProps={{
            maxLength: 15,
          }}
          required
          placeholder="city"
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
         <br/>
         {/* <!--- India states --> */}
<select className="px-2 py-3"
          id="outlined-basic" label="State" variant="outlined" required
          placeholder="State" onChange={(event) => {
            setState(event.target.value);
          }}>
    <option value="AN">Andaman and Nicobar Islands</option>
    <option value="AP">Andhra Pradesh</option>
    <option value="AR">Arunachal Pradesh</option>
    <option value="AS">Assam</option>
    <option value="BR">Bihar</option>
    <option value="CH">Chandigarh</option>
    <option value="CT">Chhattisgarh</option>
    <option value="DN">Dadra and Nagar Haveli</option>
    <option value="DD">Daman and Diu</option>
    <option value="DL">Delhi</option>
    <option value="GA">Goa</option>
    <option value="GJ">Gujarat</option>
    <option value="HR">Haryana</option>
    <option value="HP">Himachal Pradesh</option>
    <option value="JK">Jammu and Kashmir</option>
    <option value="JH">Jharkhand</option>
    <option value="KA">Karnataka</option>
    <option value="KL">Kerala</option>
    <option value="LA">Ladakh</option>
    <option value="LD">Lakshadweep</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="MH">Maharashtra</option>
    <option value="MN">Manipur</option>
    <option value="ML">Meghalaya</option>
    <option value="MZ">Mizoram</option>
    <option value="NL">Nagaland</option>
    <option value="OR">Odisha</option>
    <option value="PY">Puducherry</option>
    <option value="PB">Punjab</option>
    <option value="RJ">Rajasthan</option>
    <option value="SK">Sikkim</option>
    <option value="TN">Tamil Nadu</option>
    <option value="TG">Telangana</option>
    <option value="TR">Tripura</option>
    <option value="UP">Uttar Pradesh</option>
    <option value="UT">Uttarakhand</option>
    <option value="WB">West Bengal</option>
   
</select>


        {/* <TextField
          className="px-2"
          id="outlined-basic" label="state" variant="outlined"
          type="text"
          name="state"
          required
          placeholder="state"
          onChange={(event) => {
            setState(event.target.value);
          }}
        /> */}
         <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="pincode" variant="outlined"
          type="text"
          name="pincode"
          inputProps={{
            maxLength: 6,
          }}
          required
          placeholder="pincode"
          onChange={(event) => {
            setPincode(event.target.value);
          }}
        />
        
       

        <br />
        <Button variant="contained" type="submit">
          REGISTER
        </Button>
        <Link className="py-3 text-center" to="/">
          Already have an account?{" "}
          <p className="text-blue-600">Click to Login</p>
        </Link>
      </form>
    </div>
  );
}
export default Register;