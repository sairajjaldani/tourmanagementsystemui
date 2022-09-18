import { Rating } from '@mui/material';
import React from 'react'
import "../components/registration.css";
import { Button } from "@mui/material";



const Feedback = () => {
    // let navigate = useNavigate();
    function submit(){
        try{
           alert('Thanks for your feedback');
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div class="col-75">    
    <h3>Feedback</h3>
    <centre>
        <form onSubmit={submit}>
        <fieldset className='fieldset'>
        <Rating ></Rating>
        <br></br>
        <label>Describe your journey experience</label>
        
        <br></br>
    <textarea id="subject" name="subject" placeholder="Write something.." required ></textarea>
    <br></br>
    <Button variant="contained" type="submit">Submit</Button>
    </fieldset>
    </form>
    </centre>  
  </div> 

  );
}

export default Feedback