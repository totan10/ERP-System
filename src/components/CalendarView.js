// CalendarView.js
import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar from './Navbar';

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [events, setEvents] = useState([
    { title: 'Test Event', start: moment().toDate(), end: moment().add(1, 'hour').toDate() },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedDate(event.start);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar/>
      <Container className="mt-4">
        <h2>Calendar View</h2>

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          views={['month', 'week', 'day', 'agenda']}
          popup
        />

        {/* Detailed Orders Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detailed Orders for {selectedDate && moment(selectedDate).format('DD-MM-YYYY')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Display detailed orders using a table or any other suitable format */}
            <ul>
              {events.map((order, index) => (
                <li key={index}>{order.title}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default CalendarView;
