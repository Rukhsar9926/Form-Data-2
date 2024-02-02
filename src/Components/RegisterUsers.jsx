import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';




const RegisterUsers = () => {

  const location = useLocation();
  console.log(location.state, "+=======");

  const [ser, setser] = useState(location.state);

  console.log(location.state, "bhjabsdhsvdhsdvh");
  console.log(ser, "hello");



  return (
    <>
      <div className='user'>
         <h6> First Name: {ser.FirstInput} </h6>
         <h6> Last Name:  {ser.SecondInput} </h6>
         <h6> User Name: {ser.ThirdInput} </h6>
         <h6> City: {ser.FourthInput} </h6>
         <h6> Email: {ser.FifthInput} </h6>
         <h6> Password:{ser.SixthInput} </h6>
      </div>


    </>









  )
}

export default RegisterUsers