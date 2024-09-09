import './App.css';
import AppointmentTable from './components/AppointmentTable';
import HeaderComponent from './components/HeaderComponent';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTicketAlt, 
  faCalendarAlt, 
  faDesktop, 
  faBell, 
  faBars, 
  faTimes 
} from '@fortawesome/free-solid-svg-icons';
import TicketManager from './components/TicketManager';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleIconClick = (url) => {
    setShowSidebar(false); // Hide sidebar after clicking an item
    window.location.href = url; // Redirect to the desired link
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
      </header>

      <div className="content-area">
        <AppointmentTable />
      </div>

      <div className="main-content">
        {/* Sidebar */}
        <div className={`sidebar ${showSidebar ? 'visible' : ''}`}>
          <div className="icon-item" onClick={() => handleIconClick('https://your-ticket-link.com')}>
            <FontAwesomeIcon icon={faTicketAlt} className="custom-icon-size" />
            <p>Ticket Call</p>
          </div>
          <div className="icon-item" onClick={() => handleIconClick('https://your-appointments-link.com')}>
            <FontAwesomeIcon icon={faCalendarAlt} className="custom-icon-size" />
            <p>Appointments</p>
          </div>
          <div className="icon-item" onClick={() => handleIconClick('https://your-desk-appointments-link.com')}>
            <FontAwesomeIcon icon={faDesktop} className="custom-icon-size" />
            <p>Desk Appointments</p>
          </div>
          <div className="icon-item" onClick={() => handleIconClick('https://your-call-site-alarm-link.com')}>
            <FontAwesomeIcon icon={faBell} className="custom-icon-size" />
            <p>Call Site Alarm</p>
          </div>
        </div>

        {/* Sidebar toggle button */}
        <button onClick={toggleSidebar} className="toggle-sidebar-btn">
          <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
        </button>

        {/* Main Content (where other components will go, e.g., AppointmentTable) */}
      </div>
      <TicketManager/>
    </div>
  );
}

export default App;
