

import { UserContext } from './UserContext';
import './PersonalInfo.css';
import { useContext, useEffect, useState } from 'react';

const PersonalInfo = () => {


const {userDetails,setUserDetails,validationError} = useContext(UserContext);

const [touched,setTouched]=useState(false)

// useEffect(()=>{
//          touched && validatePersonalInfo();
// },[userDetails.personalInfo]);


// const validatePersonalInfo =()=>{
//       setValidationError((prev)=> ({...prev, personalInfo:{...prev.personalInfo, name:userDetails.personalInfo.name.length<3}}));
//       setValidationError((prev)=>({...prev, personalInfo: {...prev.personalInfo, email:!(userDetails.personalInfo.email.includes("@")&&userDetails.personalInfo.email.includes(".com"))} }));
//        setValidationError((prev)=>({...prev,personalInfo: {...prev.personalInfo,phone:userDetails.personalInfo.phone.length<7}}))
//   }
    return (
        <div className='personalinfo'>
            <div>Personal Info</div>
            <div>Please provide your name, email address and phone number.</div>
            <div className='personaldetails'>
                <p>Name{validationError.personalInfo.name &&<span className='errormsg'>This field is required</span>}</p>
                <input id="name" name="name" value={userDetails.personalInfo.name} autoComplete='given-name' placeholder="e.g. Stephen King" 
                onChange={(e)=>{setUserDetails((prev)=>({...prev, personalInfo:{...prev.personalInfo,name:e.target.value}}));setTouched(true)}}
                className = {validationError.personalInfo.name ? "error" : ""}>
                
                </input>
                <p>Email Address {validationError.personalInfo.email &&<span className='errormsg'>This field is required</span>}</p>
                <input id="email" name="email" value={userDetails.personalInfo.email} autoComplete='email' placeholder="e.g. stephenking@lorem.com" 
                onChange={(e)=>{setUserDetails((prev)=>({...prev, personalInfo:{...prev.personalInfo,email:e.target.value}}));setTouched(true)}}
                className = {validationError.personalInfo.email ? "error" : ""}></input>
                <p>Phone Number {validationError.personalInfo.phone &&<span className='errormsg'>This field is required</span>}</p>
                <input id="phone" name="phone" value={userDetails.personalInfo.phone} autoComplete='mobile tel' placeholder="e.g. +1 234 567 890" 
                onChange={(e)=>{setUserDetails((prev)=>({...prev, personalInfo:{...prev.personalInfo, phone:e.target.value}}));setTouched(true)}}
                className = {validationError.personalInfo.phone ? "error" : ""}></input>
            </div>
        </div>
    )
}

export default PersonalInfo;
