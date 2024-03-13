// Orders.js
import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form, Pagination, Dropdown} from 'react-bootstrap';
import Navbar from './Navbar';
import './Welcome.css';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer 1', orderDate: '2024-01-01', status: 'Pending' },
    { id: 2, customerName: 'Customer 2', orderDate: '2024-01-02', status: 'Shipped' },
    { id: 3, customerName: 'Customer 1', orderDate: '2024-01-01', status: 'Pending' },
    { id: 4, customerName: 'Customer 2', orderDate: '2024-01-02', status: 'Shipped' },
    { id: 5, customerName: 'Customer 1', orderDate: '2024-01-01', status: 'Pending' },
    { id: 6, customerName: 'Customer 2', orderDate: '2024-01-02', status: 'Shipped' },
    { id: 7, customerName: 'Customer 1', orderDate: '2024-01-01', status: 'Pending' },
    { id: 8, customerName: 'Customer 2', orderDate: '2024-01-02', status: 'Shipped' },
    { id: 9, customerName: 'Customer 1', orderDate: '2024-01-01', status: 'Pending' },
    { id: 10, customerName: 'Customer 2', orderDate: '2024-01-02', status: 'Shipped' },
    { id: 11, customerName: 'Customer 1', orderDate: '2024-01-01', status: 'Pending' },
    { id: 12, customerName: 'Customer 2', orderDate: '2024-01-02', status: 'Shipped' },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [editedStatus, setEditedStatus] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedOrder({});
    setEditedStatus('');
  };

  const handleShowEditModal = (order) => {
    setSelectedOrder(order);
    setEditedStatus(order.status);
    setShowEditModal(true);
  };

  const editOrderStatus = () => {
    const updatedOrders = orders.map((order) =>
      order.id === selectedOrder.id ? { ...order, status: editedStatus } : order
    );
    setOrders(updatedOrders);
    handleCloseEditModal();
  };

  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };
  const handleRecordsPerPageChange = (selectedRecordsPerPage) => {
    setRecordsPerPage(selectedRecordsPerPage);
    setCurrentPage(1); 
  };
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentOrders = orders.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar/>
      <Container className="mt-4">
        <h2>Orders</h2>

        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td>
                  <Button variant="info" onClick={() => handleShowEditModal(order)}>
                    Edit Status
                  </Button>
                  {' '}
                  <Button variant="danger" onClick={() => deleteOrder(order.id)}>
                    Delete Order
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Dropdown className="ml-3">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {recordsPerPage}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleRecordsPerPageChange(5)}>5</Dropdown.Item>
          <Dropdown.Item onClick={() => handleRecordsPerPageChange(10)}>10</Dropdown.Item>
          <Dropdown.Item onClick={() => handleRecordsPerPageChange(15)}>15</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <Pagination className="justify-content-end">
          {Array.from({ length: Math.ceil(orders.length / recordsPerPage) }).map((_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>

        {/* Edit Order Status Modal */}
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Order Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formEditOrderStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter new status"
                  value={editedStatus}
                  onChange={(e) => setEditedStatus(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditModal}>
              Close
            </Button>
            <Button variant="primary" onClick={editOrderStatus}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Orders;
