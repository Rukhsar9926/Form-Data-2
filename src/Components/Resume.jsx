import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Resume = () => {
 

  const location = useLocation();
  const [user, setUser] = useState(location.state);
  console.log(user)



  const location1=useLocation();
  const [same,setSame]=useState(location.state);
  console.log(same)

  const navigate =useNavigate();


  const handleSubmit = () => {
    setUser(""); 
    

  }

const handleChange=()=>{
    navigate('/registerUsers');


}



  return (
    <>
      <div>
        <div className='box'>
          <h5 className='same'> Find Your Information </h5>
          <div className='main'>First Name: { (user && user.FirstInput)}</div> <br />
          <div className='main'>Last Name: { (user && user.SecondInput)}</div> <br />
          <div className='main'>User Name: { (user && user.ThirdInput)}</div> <br />
          <div className='main'>City Name: { (user && user.FourthInput)}</div> <br />
          <div className='main'>Email Add: {(user && user.FifthInput)} </div> <br />
          <div className='main'>Password: { (user && user.SixthInput)}</div> <br />
          <button type="button" className="btn btn-secondary btn-lg mt-3" id='btn1' onClick={handleSubmit}>Click Here To Clear Data</button>
          

        <div class="d-grid gap-2">
          <button class="btn btn-dark mt-5" type="button"  onClick={handleChange}> Disply The List OF Registered Users</button>
        </div>
        



        </div>
      </div>
    </>
  )
}
