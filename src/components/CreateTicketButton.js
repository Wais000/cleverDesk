import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
// import './CreateTicketButton.css';

const CreateTicketButton = ({ toggleLowerPart }) => {
  return (
    <button className="toggle-button" onClick={toggleLowerPart}>
      <FontAwesomeIcon icon={faTicketAlt} style={{ marginRight: '8px' }} />
      Create Ticket
    </button>
  );
};

export default CreateTicketButton;
