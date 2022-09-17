import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TextField } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Login.css";

function Login() {

  let navigate = useNavigate();
   const GotoNext = () => {
    navigate("/CustomerHome");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let userInp = e.target.elements.username.value;
    let passInp = e.target.elements.password.value;
    try{
       const result =  await axios.post("http://localhost:8080/login", {
        userName: userInp,
        password: passInp,
        role: "customer",
      });
      if(result.status === 200){
        localStorage.setItem("userId",result.data.userId-1);
        GotoNext();
      }else{
        console.log("failed");
      }

    }catch(err){
        alert("Incorrect username/Password");
    }
    
  }

  return (
    <>
      <center>
        <div className="Login-container">
          
          
            <form className="Login-form" onSubmit={handleSubmit}>
              {/* <fieldset className="field"> */}
                <h2 className="font-sans text-center text-4xl mt-10 mb-2 font-bold">Login Page</h2>
                <br />
                <div className="row">
                  <TextField
                    className="py-2 px-4"
                    id="outlined-basic" label="username" variant="outlined"
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                  />
                </div>
                <br/>
                <div className="row">
                  <TextField
                    className="py-2 px-4"
                    id="outlined-basic" label="password" variant="outlined"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>
                <br />
                <Button
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#20aca5",
                    padding: "8px 20px",
                    fontSize: "18px",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Login
                </Button>
                <br />
                <Button>
                  {/* <Link className="px-2" to="/Adminlogin">
                    Admin Login
                  </Link> */}
                </Button>
                <br />
                <p>
                  <Button
                  className="py-2"
                  variant="contained"
                  href="/Register"
                >
                  New Register
                </Button>

                
                <pre/> <Button
                  className="py-2"
                  variant="contained"
                  href="/AdminLogin"
                >
                  Admin Login
                </Button>
                </p>

              {/* </fieldset> */}
            </form>
            
          </div>

        {/* FOOTER SECTION */}

        <footer>
          <div>
            <div class="">
              <ul class="footer-nav">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  {/* <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">IOS App</a>
                </li>
                <li>
                  <a href="#">Android App</a> */}
                </li>
              </ul>
            </div>

            <div class="">
              <ul class="social-links">
                <li>
                  <a href="/">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <GoogleIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row-footer">
            <p>Copyright &copy; 2022 by cma. All rights reserved.</p>
          </div> 
        </footer>
      </center>
    </>
  );
}
export default Login;
