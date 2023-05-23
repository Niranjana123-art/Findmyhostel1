import React from 'react'
import Navbar from '../../components/navbar/navbar'
import { useNavigate } from 'react-router-dom'
import './landing.css'


const Landing = () => {
  const navigate=useNavigate();
  return (
    <>
     <Navbar/>
    <div className='landing__container'>
    {/* <img src="../../assets/vector.png" /> */}
      <div className='landing__content'>
      <div>
        <h1 >Simplify Your Stay with Easy </h1>
        <h1 className='bold_header'>Check-in, Attendance, </h1>
        <h1 className='bold_header'> and Mess Availability Tracking</h1>
      </div>
      <button className='landing__button' onClick={()=>{
              navigate('/signup')
            }}>
        Get Started
      </button>
      </div>
      <div className='landing__image'>

      </div>
    </div>
    </>
  )
}

export default Landing