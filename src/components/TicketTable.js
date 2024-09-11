import React, { useState, useEffect } from "react";
import './TicketTable.css'; // Ensure you link the correct styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faPencilAlt, faSms, faTrash } from "@fortawesome/free-solid-svg-icons"; // Importing the correct icons

// Helper function to truncate text
const truncateText = (text, length = 15) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const TicketTable = ({ tickets = [], serviceColors, handleBellClick }) => {
  const [updatedTickets, setUpdatedTickets] = useState(tickets);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    const updateWaitTimes = () => {
      const now = new Date();
      const newTickets = tickets.map(ticket => {
        const createdAtDate = new Date(ticket.createdAt);
        const diffInMinutes = Math.floor((now - createdAtDate) / 60000); // Calculate difference in minutes
        let waitTimeColor = "green";

        if (diffInMinutes > 15) {
          waitTimeColor = "red";
        } else if (diffInMinutes > 10) {
          waitTimeColor = "orange";
        }

        return {
          ...ticket,
          currentWaitTime: isNaN(diffInMinutes) ? "0 min" : `${diffInMinutes} min`,
          waitTimeColor
        };
      });

      setUpdatedTickets(newTickets);
    };

    updateWaitTimes(); // Initial update
    const intervalId = setInterval(updateWaitTimes, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [tickets]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Convert search term to lowercase for case-insensitive search
  };

  const filteredTickets = updatedTickets.filter(ticket => {
    const searchTextLower = searchTerm.toLowerCase();
    return (
      ticket.ticketNumber?.toLowerCase().includes(searchTextLower) ||
      ticket.name?.toLowerCase().includes(searchTextLower)
    );
  });

  return (
    <div className="ticket-table-container">
      {/* Title and Search Bar */}
      <div className="table-header">
  <div className="table-title">Ticket List</div> {/* Title on the left */}
  
  <div className="search-bar-container">
    <div className="search-input-wrapper">

      <input type="text" 
      className="search-input" 
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}/> 
 
      <i className="fas fa-search search-icon"></i> {/* FontAwesome search icon */}
    </div>
  </div>
</div>


      {/* Table */}
      <table className="ticket-table">
        <thead>
          <tr>
            <th>Call</th>
            <th>Ticket</th>
            <th>Desk</th>
            <th>Service</th>
            <th>Request</th>
            <th>Info</th>
            <th>Appointment Notes</th>
            <th>Current Wait Time Enqueued</th>
            <th>Current Wait Time</th>
            <th>Created At</th>
            <th>Called Since</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((ticket, index) => {
            const createdAtDate = new Date(ticket.createdAt);
            const createdAtFormatted = createdAtDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            return (
              <tr key={index}>
                <td>
                  <button
                    onClick={() => handleBellClick(ticket)}
                    style={{ backgroundColor: serviceColors[ticket.service] }}
                  >
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                </td>
                <td>{ticket.ticketNumber || "-"}</td>
                <td>{ticket.desk || "-"}</td>
                <td
                  className="service-cell"
                  style={{ backgroundColor: serviceColors[ticket.name], color:"#333", fontWeight:"600" }}
                >
                  {truncateText(ticket.name) || "-"}
                </td>
                <td>{ticket.request || "-"}</td>
                <td>{ticket.info || "-"}</td>
                <td>{ticket.appointmentNotes || "None"}</td>
                <td>{ticket.currentWaitTimeEnqueued || "-"}</td>
                <td
                  className="wait-time"
                  style={{ backgroundColor: ticket.waitTimeColor || "transparent" }}
                >
                  {ticket.currentWaitTime || "0 min"}
                </td>
                <td>{createdAtFormatted || "-"}</td>
                <td>{ticket.calledSince || "-"}</td>
                <td className="icon-actions">
                  <button className="icon-button edit-icon" aria-label="Edit">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                  <button className="icon-button sms-icon" aria-label="Send SMS">
                    <FontAwesomeIcon icon={faSms} />
                  </button>
                  <button className="icon-button delete-icon" aria-label="Delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
