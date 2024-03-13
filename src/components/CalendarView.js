import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar from './Navbar';
import './Welcome.css';

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const events = [
    { title: 'Order 1', start: moment().toDate(), end: moment().add(1, 'hour').toDate() },
    { title: 'Order 2', start: moment().add(1, 'day').toDate(), end: moment().add(1, 'day').add(1, 'hour').toDate() },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedDate(event.start);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: isSelected ? 'rgba(255, 0, 0, 0.7)' : 'rgba(0, 123, 255, 0.7)',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '1px solid #ddd',
      cursor: 'pointer',
    };

    if (event.title.hovered) {
      style.backgroundColor = 'rgba(255, 0, 6, 0.9)';
    }

    return {
      style,
    };
  };

  return (
    <div>
      <Navbar />
      <Container className="mt-4">
        <h2>Calendar View</h2>

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          showMultiDayTimes
          step={60}
          views={['week', 'day', 'work_week', 'agenda']}
          popup
          defaultView="week"
          eventPropGetter={eventStyleGetter}
        />

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detailed Orders for {selectedDate && moment(selectedDate).format('DD-MM-YYYY')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {events
              .filter((order) => moment(order.start).isSame(selectedDate, 'day'))
              .map((order, index) => (
                <div key={index}>
                  <h5>{order.title}</h5>
                  <p>Order ID: {order.orderId}</p>
                  <p>Start Time: {moment(order.start).format('HH:mm')}</p>
                  <p>End Time: {moment(order.end).format('HH:mm')}</p>
                </div>
              ))}
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
