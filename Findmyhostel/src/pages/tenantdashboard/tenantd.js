import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';
import './tenantd.css';
import pic from "../../assets/user.png";

const TenantDashboard = () => {
  
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [attendance, setAttendance] = useState([]);
  const [messAvailability, setMessAvailability] = useState(false);

  useEffect(() => {
    const fetchCheckInStatus = () => {
      setTimeout(() => {
        setIsCheckedIn(true);
      }, 1000);
    };

    const fetchAttendance = () => {
      setTimeout(() => {
        const dummyAttendance = { date: 'May 1', attended: false };
        setAttendance(dummyAttendance);
      }, 1500);
    };

    const fetchMessAvailability = () => {
      setTimeout(() => {
        setMessAvailability(true);
      }, 2000);
    };

    fetchCheckInStatus();
    fetchAttendance();
    fetchMessAvailability();
  }, []);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
  };
  const handleMessAvailabilityChange = (event) => {
    setMessAvailability(event.target.value);
  };

  const handleAttendanceChange = (event) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      attended: event.target.checked,
    }));
  };
  return (
    <>
      <Navbar />
      <div className="tenant__container">
        <div className="tenant__details">
          <div className="tenant__status">
            <h3>Check-in/Check-out Status:</h3>
            {isCheckedIn ? (
              <button  className='check__button' onClick={handleCheckOut}>Check-out</button>
            ) : (
              <button  className='check__button'onClick={handleCheckIn}>Check-in</button>
            )}
          </div>

         
          <div className="tenant__attendance">
            <h3>Attendance:</h3>
            <label>
              Date: {attendance.date}
            </label>
            <label>
              <input
                type="checkbox"
                checked={attendance.attended}
                onChange={handleAttendanceChange}
              />
              Attended
            </label>
          </div>

          <div className="tenant__mess">
            <h3>Mess Availability:</h3>
            <label>
              <input
                type="checkbox"
                name="breakfast"
                checked={messAvailability.breakfast}
                onChange={handleMessAvailabilityChange}
              />
              Breakfast
            </label>
            <label>
              <input
                type="checkbox"
                name="lunch"
                checked={messAvailability.lunch}
                onChange={handleMessAvailabilityChange}
              />
              Lunch
            </label>
            <label>
              <input
                type="checkbox"
                name="dinner"
                checked={messAvailability.dinner}
                onChange={handleMessAvailabilityChange}
              />
              Dinner
            </label>

          </div>
        </div>
        <div className="tenant__profile">
          <div className="tProfile_pic">
            <img src={pic} alt="" />
          </div>
          <h2>Name</h2>
        </div>
        <Link to={{
          pathname: "/owner-dashboard",
          state: {
            attendance,
            messAvailability
          }
        }}></Link>
      </div>
    </>
  );
};

export default TenantDashboard;
