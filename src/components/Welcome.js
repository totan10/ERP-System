// Welcome.js
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import './Welcome.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  const handlePlayClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/Dashboard');
    }, 1000);
  };

  return (
    <div className="welcome-container">
      {loading ? (
        <div className="loader-container">
          <RingLoader css={override} size={150} color={'#123abc'} loading={loading} />
        </div>
      ) : (
        <div className="welcome-content">
          <h1>Welcome to Our ERP System</h1>
          <p>Explore the powerful features designed to streamline your business operations.</p>
          <Button
          variant="danger"
          size='lg'
          onClick={handlePlayClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" className="mr-2" />
              Loading...
            </>
          ) : (
            `Let's Play`
          )}
        </Button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
