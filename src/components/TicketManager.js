// CreateTicket.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import "./TicketManager.css";

const serviceColors = {
  "Registration matters": "#fecfa4",
  "Video consulting (Flexperto)": "#b2e1ef",
  "Passport matters": "#e0d2ff",
  "Video consulting (MS Teams)": "#c3f0eb",
  "Car registration": "#ede8c4",
};

const services = [
  "Registration matters",
  "Video consulting (Flexperto)",
  "Passport matters",
  "Video consulting (MS Teams)",
  "Car registration",
];

const CreateTicket = () => {
  const [tickets, setTickets] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handlePublish = (serviceName) => {
    setTickets((prevTickets) => {
      const existingTicket = prevTickets.find(
        (ticket) => ticket.name === serviceName
      );
      if (existingTicket) {
        // Update quantity if the ticket already exists
        return prevTickets.map((ticket) =>
          ticket.name === serviceName
            ? { ...ticket, quantity: ticket.quantity + quantity }
            : ticket
        );
      } else {
        // Add new ticket
        return [...prevTickets, { name: serviceName, quantity }];
      }
    });
    setQuantity(1); // Reset quantity
  };

  return (
    <div className="container">
      <div className="create-ticket">
        <div className="service">
          <h2>Service</h2>
          <div className="service-icons">
            <FontAwesomeIcon icon={faClock} />
            <FontAwesomeIcon icon={faTicketAlt} />
          </div>
        </div>

        {services.map((service) => (
          <div key={service} className="service-item">
            <p>{service}</p>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
            <button onClick={() => handlePublish(service)}>
              Publish Ticket
            </button>
          </div>
        ))}
      </div>

      <div className="alle-dienste">
        <div className="header">
          <div className="header-left">
            <h2>Alle Dienste</h2>
          </div>
        </div>

        {tickets.map((ticket) => (
          <div
            key={ticket.name}
            className="ticket-item"
            // Set background color based on service
          >
            <h3>{ticket.name}</h3>
            <div
              className="ticketQuantity"
              style={{ backgroundColor: serviceColors[ticket.name] || "aqua" }} // Set background color for quantity
            >
              <p>{ticket.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;
