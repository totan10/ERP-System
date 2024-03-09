import React, { useState } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Welcome.css';

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePlayClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/Dashboard');
    }, 2000);
  };

  return (
    <Container className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to ERP System</h1>
        <Button
          variant="primary"
          onClick={handlePlayClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" className="mr-2" />
              Loading...
            </>
          ) : (
            'Play'
          )}
        </Button>
      </div>
    </Container>
  );
};

export default Welcome;
