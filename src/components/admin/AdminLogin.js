import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TextField } from "@mui/material";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import InstagramIcon from "@mui/icons-material/Instagram";

function AdminLogin() {
  let navigate = useNavigate();
   const GotoNext = () => {
    navigate("/Home");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let userInp = e.target.elements.username.value;
    let passInp = e.target.elements.password.value;
    try{
       const result =  await axios.post("http://localhost:8080/signin/admin", {
        userName: userInp,
        password: passInp,
        
      });
      if(result.status=== 200){
        GotoNext();
      }else{
        console.log(result);
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
              
                <h2 className="font-sans text-center text-4xl mt-10 mb-2 font-bold">Admin Login Page</h2>
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
                    borderRadius: 35,
                    backgroundColor: "#20aca5",
                    padding: "8px 20px",
                    fontSize: "18px",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Admin Login
                </Button>
                <br />
                <Button>
                  {/* <Link className="px-2" to="/Adminlogin">
                    Admin Login
                  </Link> */}
                </Button>
                <br />
                {/* <Button
                  className="py-4"
                  variant="contained"
                  href="/Register"
                >
                  New Register
                </Button> */}
              
            </form>
            
          </div>
        

        {/* FOOTER SECTION */}

        <footer>
          <div>
            <div class="">
              <ul class="footer-nav">
                <li>
                  {/* <a href="#">About Us</a> */}
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
                  {/* <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GoogleIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramIcon />
                  </a> */}
                </li>
              </ul>
            </div>
          </div>

          {/* <div class="row">
            <p>Copyright &copy; 2022 by cma. All rights reserved.</p>
          </div>  */}
        </footer>
      </center>
    </>
  );
}
export default AdminLogin;
