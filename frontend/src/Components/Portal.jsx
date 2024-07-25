import React,{useEffect} from "react";
import  './Portal.css';
import {useNavigate, useLocation} from 'react-router-dom';




function Portal(props){

    const location = useLocation();
    const { state } = location;
    const username = state ? state.username : '';



const navigate=useNavigate();

const logout=()=>{
   
    navigate('/');
    
}

return (
    <>
<div className="">

    <div className="nav_portal">
  
   <div className="portal_logo">
   <span><img id='kiitlogo' src="https://d2lk14jtvqry1q.cloudfront.net/media/small_Kalinga_Institute_of_Industrial_Technology_KIIT_University_17335b6db0_ce378cd5fb_c4bfd9e839_5ec82024ff.png"/></span>
   </div>
   <div className="portal_settings">
  <span id='settings_btns'><a href="https://schedulebuilder.org/"><button id="sbtn">Schedule</button></a></span>
  <span id='settings_btns'><a href="http://localhost:3000/feedback"><button id="sbtn">Feedback</button></a></span>
  <span id='settings_btns'><a href="http://localhost:3000/attendance"><button id="sbtn">Attendance</button></a></span>
  <span id='settings_btns'><a href="http://localhost:3000/grading"><button id="sbtn">Grading</button></a></span>
  </div>
  
</div>

<div className="logout_section"><button id="logoutbtn" onClick={logout}>Logout</button></div>

</div>

<h1 className="exploreheading">Explore KIIT</h1>

    <div className="portal_main">
<div class="image-container">
    <img src="https://i.ytimg.com/vi/3WkLsGukrco/maxresdefault.jpg" alt="Image description"/>
    <a href="https://kiit.ac.in/tour/" class="button">360 View</a>
</div>
<div class="image-container-one">
    <img src="http://kiit.ac.in/wp-content/uploads/2017/12/KIIT-Students-Cover-1024x683.jpg" alt="Image description"/>
    <a href="https://kiit.ac.in/students/" class="buttonone">Student Life</a>
</div>
 </div> 

 <div className="footer_portal">
    <div className="Help"><h2 id="help">Policies</h2></div>
    <div className="EAM">
        <span id="footertext">To Know More<a href="https://kiit.ac.in/policies/"><button id="eamdiv">Click Here</button></a></span>
    </div>
   </div>

    </>
)

}

export default Portal;