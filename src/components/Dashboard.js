// Dashboard.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from './Navbar';

const Dashboard = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [metrics, setMetrics] = useState({
    totalProducts: 50,
    totalOrders: 20,
    totalRevenue: 50000,
  });

  const toggleWelcome = () => {
    setShowWelcome(!showWelcome);
  };

  return (
    <div>
      <Navbar />
      <Container className="mt-4">
      
      <Row>
        <Col xs={12} md={6}>
          <Card className={`mt-3 ${showWelcome ? 'welcome-card' : ''}`}>
            <Card.Header>
              <h5>Welcome to Our ERP System</h5>
              <Button variant="primary" size="sm" onClick={toggleWelcome}>
                {showWelcome ? 'Show Less' : 'Show More'}
              </Button>
            </Card.Header>
            <Card.Body>{showWelcome && <p>Explore the powerful features designed to streamline your business operations.</p>}</Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>
              <h5>Dashboard Metrics</h5>
            </Card.Header>
            <Card.Body>
              <Card.Text>Total Products: {metrics.totalProducts}</Card.Text>
              <Card.Text>Total Orders: {metrics.totalOrders}</Card.Text>
              <Card.Text>Total Revenue: ${metrics.totalRevenue}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    
  );
};

export default Dashboard;
