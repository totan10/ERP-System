import React from 'react'
import { useState } from 'react';
import CalendarView from '../components/CalendarView'
const CalendarViewPage = () => {
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, expectedDeliveryDate: '2024-03-07' },
    { id: 2, expectedDeliveryDate: '2024-03-08' },
    // Add more mock data as needed
  ]);

  return (
    <div>
      <CalendarView orders={orders} />
    </div>
  );
}

export default CalendarViewPage