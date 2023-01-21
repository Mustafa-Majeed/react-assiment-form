import React, { useState, useEffect } from 'react'

function Form() {

const [studentArray,setStudentArray]=useState([])

const [YourName,setYourName]=useState("");
const [YourSurname,setYourSurname]=useState("");
const [YourEmail,setYourEmail]=useState("");
const [YourSubject,setYourSubject]=useState("");
const [YourMessage,setYourMessage]=useState(""); 

function submitFormFunc(){
    setStudentArray([...studentArray,
{
    YourName,
   YourSurname,
    YourEmail,
   YourSubject,
   YourMessage

}
]);

  
}

useEffect(()=>{
    console.log(studentArray)
},[studentArray])
  return (
    <>
    <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <h1 className="mb-3 row justify-content-center">Mustafa Khan</h1>
 
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="your-name" className="form-label"> Name</label>
              <input type="text" className="form-control" id="your-name" name="your-name" required   
              onChange={(e)=>{
                setYourName(e.target.value);
              }}
              
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="your-surname" className="form-label">Surname</label>
              <input type="text" className="form-control" id="your-surname" name="your-surname" required    
              onChange={(e)=>{
                setYourSurname(e.target.value);
              }}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="your-email" className="form-label">Email</label>
              <input type="email" className="form-control" id="your-email" name="your-email" required 
              onChange={(e)=>{
                setYourEmail(e.target.value);
              }}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="your-subject" className="form-label"> Subject</label>
              <input type="text" className="form-control" id="your-subject" name="your-subject" 
              onChange={(e)=>{
                setYourSubject(e.target.value);
              }}/>
            </div>
            <div className="col-12">
              <label htmlFor="your-message" className="form-label">Message</label>
              <input className="form-control" id="your-message" name="your-message"  required 
              onChange={(e)=>{
                setYourMessage(e.target.value);
              }}/>
            </div>
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-md-6 ">
                  <button onClick={submitFormFunc} data-res="<?php echo $sum; ?>" type="submit" className="btn btn-danger w-100 fw-bold" >Send</button>
                </div>
              </div>
            </div>
          </div>
 
      </div>
    </div>
  </div>


    </>
  )
}

export default Form