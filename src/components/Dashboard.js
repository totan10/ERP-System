import React, { useState } from 'react';
import { Container, Card, Button, Modal, Form } from 'react-bootstrap';
import Navbar from './Navbar';
import './Welcome.css';

const Dashboard = () => {
  const initialMetrics = {
    totalProducts: 50,
    totalOrders: 20,
    totalRevenue: 50000,
  };

  const [metrics, setMetrics] = useState(initialMetrics);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMetrics((prevMetrics) => ({
      ...prevMetrics,
      [name]: value,
    }));
  };

  const handleModifyMetrics = () => {
    // Add logic to handle modifying metrics, for example, sending an API request
    console.log('Metrics modified:', metrics);
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <Container className="mt-4">
        <Card className="dashboard-card">
          <Card.Header className="bg-primary text-white">
            <h2 className="mb-0">Dashboard Metrics</h2>
            <Button variant="warning" onClick={() => setShowModal(true)}>
              Modify Metrics
            </Button>
          </Card.Header>
          <Card.Body className="dashboard-card-body">
            <Card.Text className="mb-2">
              <strong>Total Products:</strong> {metrics.totalProducts}
            </Card.Text>
            <Card.Text className="mb-2">
              <strong>Total Orders:</strong> {metrics.totalOrders}
            </Card.Text>
            <Card.Text className="mb-0">
              <strong>Total Revenue:</strong> ${metrics.totalRevenue}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Modify Metrics Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton className="bg-primary text-white">
            <Modal.Title>Modify Metrics</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Total Products:</Form.Label>
                <Form.Control
                  type="number"
                  name="totalProducts"
                  value={metrics.totalProducts}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Total Orders:</Form.Label>
                <Form.Control
                  type="number"
                  name="totalOrders"
                  value={metrics.totalOrders}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Total Revenue:</Form.Label>
                <Form.Control
                  type="number"
                  name="totalRevenue"
                  value={metrics.totalRevenue}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="success" onClick={handleModifyMetrics}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Dashboard;
