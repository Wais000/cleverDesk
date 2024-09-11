// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClock,
//   faTicketAlt,
//   faCalculator,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";
// import "./TicketManager.css";

// const serviceColors = {
//   "Registration matters": "#fecfa4",
//   "Video consulting (Flexperto)": "#5ec0db",
//   "Passport matters": "#e0d2ff",
//   "Video consulting (MS Teams)": "#c3f0eb",
//   "Car registration": "#ede8c4",
// };

// const services = [
//   "Registration matters",
//   "Video consulting (Flexperto)",
//   "Passport matters",
//   "Video consulting (MS Teams)",
//   "Car registration",
// ];

// const CreateTicket = () => {
//   const [tickets, setTickets] = useState([]);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formVisible, setFormVisible] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [formData, setFormData] = useState({
//     salutation: "Mr.",
//     familyName: "",
//     givenName: "",
//     phoneNumber: "",
//     email: "",
//     info: "",
//     accepted: false,
//   });

//   // New state for toggling the lower part visibility
//   const [isLowerPartVisible, setIsLowerPartVisible] = useState(false);

//   const handlePublish = (serviceName) => {
//     setSelectedService(serviceName);
//     setFormVisible(true);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.accepted) {
//       alert("Please accept the information before submitting.");
//       return;
//     }

//     setTickets((prevTickets) => {
//       const existingTicket = prevTickets.find(
//         (ticket) => ticket.name === selectedService
//       );
//       if (existingTicket) {
//         return prevTickets.map((ticket) =>
//           ticket.name === selectedService
//             ? { ...ticket, quantity: ticket.quantity + quantity }
//             : ticket
//         );
//       }
//       return [...prevTickets, { name: selectedService, quantity }];
//     });

//     // Reset form
//     closeForm();
//   };

//   const closeForm = () => {
//     setFormVisible(false);
//     setQuantity(1);
//     setFormData({
//       salutation: "Mr.",
//       familyName: "",
//       givenName: "",
//       phoneNumber: "",
//       email: "",
//       info: "",
//       accepted: false,
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "form-overlay") {
//       closeForm();
//     }
//   };

//   // Toggle the visibility of the lower part (services)
//   const toggleLowerPart = () => {
//     setIsLowerPartVisible(!isLowerPartVisible);
//   };

//   return (
//     <div className="container">
//       {/* Button to toggle the lower part */}
//       <button className="toggle-button" onClick={toggleLowerPart}>
//         <i className="fas fa-ticket-alt"></i> Create Ticket
//       </button>

//       {isLowerPartVisible && (
//         <div className="create-ticket">
//           <div className="service">
//             <h2>Service</h2>
//             <div className="service-icons">
//               <FontAwesomeIcon icon={faClock} />
//               <FontAwesomeIcon icon={faTicketAlt} />
//             </div>
//           </div>

//           {services.map((service) => (
//             <div key={service} className="service-item">
//               <h3>{service}</h3>
//               <button onClick={() => handlePublish(service)}>
//                 <p
//                   style={{
//                     color: serviceColors[service] || "aqua",
//                     cursor: "pointer",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {" "}
//                   Publish Ticket
//                 </p>
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {formVisible && (
//         <div className="form-overlay" onClick={handleOverlayClick}>
//           <form onSubmit={handleFormSubmit} className="ticket-form">
//             <button className="exit-button" type="button" onClick={closeForm}>
//               <FontAwesomeIcon icon={faTimes} />
//             </button>

//             <div className="form-details">
//               <h2>{selectedService}</h2>
//               <label>
//                 Salutation:
//                 <select
//                   name="salutation"
//                   value={formData.salutation}
//                   onChange={handleInputChange}
//                 >
//                   <option value="Mr.">Mr.</option>
//                   <option value="Mrs.">Mrs.</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </label>
//               <label>
//                 Family Name:
//                 <input
//                   type="text"
//                   name="familyName"
//                   value={formData.familyName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Given Name:
//                 <input
//                   type="text"
//                   name="givenName"
//                   value={formData.givenName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Phone Number:
//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Email Address:
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Information:
//                 <textarea
//                   name="info"
//                   value={formData.info}
//                   onChange={handleInputChange}
//                 />
//               </label>

//               <input
//                 type="checkbox"
//                 name="accepted"
//                 checked={formData.accepted}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="request-details">
//               <h2>Requests</h2>
//               <div className="request-header">
//                 <FontAwesomeIcon icon={faCalculator} />
//                 <button type="button" onClick={() => setQuantity(quantity - 1)}>
//                   -
//                 </button>
//                 <button type="button" onClick={() => setQuantity(quantity + 1)}>
//                   +
//                 </button>
//               </div>
//             </div>

//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </form>
//         </div>
//       )}

//       <div className="alle-dienste">
//         <div className="header-left">
//           <h2>Alle Dienste</h2>
//         </div>

//         {tickets.map((ticket) => (
//           <div key={ticket.name} className="ticket-item">
//             <h3>{ticket.name}</h3>
//             <div
//               className="ticketQuantity"
//               style={{ backgroundColor: serviceColors[ticket.name] || "aqua" }}
//             >
//               <p>{ticket.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreateTicket;


import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTicketAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import TicketTable from "./TicketTable"; // Import the new component
import "./TicketManager.css"; // Ensure that your styles are imported

const serviceColors = {
  "Registration matters": "#fecfa4",
  "Video consulting (Flexperto)": "#5ec0db",
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

const TicketManager = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    salutation: "Mr.",
    familyName: "",
    givenName: "",
    phoneNumber: "",
    email: "",
    info: "",
    accepted: false,
  });

  const [isLowerPartVisible, setIsLowerPartVisible] = useState(false);

  const handlePublish = (serviceName) => {
    setSelectedService(serviceName);
    setFormVisible(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.accepted) {
      alert("Please accept the information before submitting.");
      return;
    }

    setTickets((prevTickets) => {
        const ticketNumber = `T${prevTickets.length + 1}`;
        const currentTime = new Date().toISOString(); // Use ISO string for precise time
      
        return [
          ...prevTickets,
          {
            name: selectedService,
            quantity,
            ticketNumber,
            createdAt: currentTime, // Store creation time in ISO format
            calledSince: null,
            currentWaitTime: "0 min",
            waitTimeColor: "green",
            desk: formData.desk || "-",
            request: formData.request || "-",
            info: formData.info || "-",
            appointmentNotes: formData.appointmentNotes || "-",
            currentWaitTimeEnqueued: formData.currentWaitTimeEnqueued || "-",
          },
        ];
      });
      
      closeForm();
      
  };

  const closeForm = () => {
    setFormVisible(false);
    setQuantity(1);
    setFormData({
      salutation: "Mr.",
      familyName: "",
      givenName: "",
      phoneNumber: "",
      email: "",
      info: "",
      accepted: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "form-overlay") {
      closeForm();
    }
  };

  const toggleLowerPart = () => {
    setIsLowerPartVisible(!isLowerPartVisible);
  };

  const handleBellClick = (ticket) => {
    console.log("Ticket bell clicked", ticket);
    // Logic to handle ticket call (color change, etc.)
  };

  return (
    <div className="container">
      <button className="toggle-button" onClick={toggleLowerPart}>
        <i className="fas fa-ticket-alt"></i> Create Ticket
      </button>

      {isLowerPartVisible && (
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
              <h3>{service}</h3>
              <button onClick={() => handlePublish(service)}>
                <p
                  style={{
                    color: serviceColors[service] || "aqua",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Publish Ticket
                </p>
              </button>
            </div>
          ))}
        </div>
      )}

      {formVisible && (
        <div className="form-overlay" onClick={handleOverlayClick}>
          <form onSubmit={handleFormSubmit} className="ticket-form">
            <button className="exit-button" type="button" onClick={closeForm}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="form-details">
              <h2>{selectedService}</h2>
              <div>
                <label>
                  Salutation:
                  <select
                    name="salutation"
                    value={formData.salutation}
                    onChange={handleInputChange}
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                </label>
                <label>
                  Family Name:
                  <input
                    type="text"
                    name="familyName"
                    value={formData.familyName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Given Name:
                  <input
                    type="text"
                    name="givenName"
                    value={formData.givenName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Info:
                  <textarea
                    name="info"
                    value={formData.info}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Appointment Notes:
                  <input
                    type="text"
                    name="appointmentNotes"
                    value={formData.appointmentNotes}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Current Wait Time Enqueued:
                  <input
                    type="text"
                    name="currentWaitTimeEnqueued"
                    value={formData.currentWaitTimeEnqueued}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Current Wait Time:
                  <input
                    type="text"
                    name="currentWaitTime"
                    value={formData.currentWaitTime}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="accepted"
                    checked={formData.accepted}
                    onChange={handleInputChange}
                  />
                  I accept the information provided
                </label>
              </div>
            </div>

            <div className="request-details">
              <h2>Requests</h2>
              <label>
                Quantity:
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                />
              </label>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Render the TicketTable component here and pass the ticket data */}
      <TicketTable tickets={tickets} serviceColors={serviceColors} handleBellClick={handleBellClick} />
    </div>
  );
};

export default TicketManager;
