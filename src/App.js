import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import CalendarViewPage from './pages/CalendarViewPage';
import WelcomePage from './pages/WelcomePage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/Orders" element={<OrdersPage />} />
        <Route path="/Calendar" element={<CalendarViewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
