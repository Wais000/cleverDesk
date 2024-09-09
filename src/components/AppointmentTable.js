import React, { useState, useEffect } from 'react';
import './AppointmentTable.css';

const AppointmentTable = () => {
  const hours = Array.from({ length: 12 }, (_, i) => 7 + i); // From 7AM to 6PM
  const [appointments, setAppointments] = useState([]);

  // Mock data for appointments (you can fetch this from API)
  useEffect(() => {
    const mockAppointments = [
      { time: '07:00', duration: 60, status: 'busy' }, // Example: busy at 7:00AM for 1 hour
      { time: '10:00', duration: 30, status: 'free' }, // Example: free at 10:00AM for 30 minutes
      // Add more appointment data as needed
    ];
    setAppointments(mockAppointments);
  }, []);

  const getAppointmentInfo = (hour) => {
    // Find appointment for the current hour
    const appointment = appointments.find((appt) => {
      const [apptHour] = appt.time.split(':');
      return parseInt(apptHour) === hour;
    });
    
    return appointment || { status: 'free', duration: 0, count: 0 };
  };

  return (
    <div className="appointment-table">
      {hours.map((hour) => {
        const { status, duration, count } = getAppointmentInfo(hour);
        return (
          <div key={hour} className={`hour-block ${status}`}>
            <div className="hour-label">{hour}:00</div>
            <div className="appointment-info">
              <span>Appointments: <b> {count}</b></span>
              <span>Duration: <b> {duration}</b>  mins</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentTable;
