import React from 'react';
import './ownerd.css';

const OwnerDashboard = () => {
  // Hardcoded student data
  const students = [
    {
      name: 'John Doe',
      checkIn: true,
      checkOut: false,
      messAvailability: {
        breakfast: true,
        lunch: true,
        dinner: false,
      },
      attendance: true,
    },
    {
      name: 'Jane Smith',
      checkIn: false,
      checkOut: true,
      messAvailability: {
        breakfast: false,
        lunch: true,
        dinner: true,
      },
      attendance: false,
    },
        {
          name: 'Niranjana',
          checkIn: true,
          checkOut: false,
          messAvailability: {
            breakfast: true,
            lunch: true,
            dinner: false,
          },
          attendance: true,
        },
        {
            name: 'john scena',
            checkIn: true,
            checkOut: false,
            messAvailability: {
              breakfast: true,
              lunch: true,
              dinner: false,
            },
            attendance: true,
          },
  
  ];

  return (
    <div>
      <h1>Owner Dashboard</h1>
      <table  className="dashboard_table">
        <thead>
          <tr className='table__row'>
            <th>Name</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Mess Availability</th>
            <th>Attendance</th>
          </tr>
          <tr>
            {/* <th colSpan="5"><hr className="header-divider" /></th> */}
          </tr>
        </thead>
        
        <tbody>
          {students.map((student, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{student.name}</td>
                <td>{student.checkIn ? 'Checked-in' : 'Not Checked-in'}</td>
                <td>{student.checkOut ? 'Checked-out' : 'Not Checked-out'}</td>
                <td>
                  {student.messAvailability.breakfast && 'Breakfast, '}
                  {student.messAvailability.lunch && 'Lunch, '}
                  {student.messAvailability.dinner && 'Dinner'}
                </td>
                <td>{student.attendance ? 'Attended' : 'Absent'}</td>
              </tr>
              
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OwnerDashboard;
