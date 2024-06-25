import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent'; // Import MainContent component
import SalesChart from './SalesChart';

// Define your data here or import it from another file
const data = {
  '12 months': [
    { name: 'Jan', sales: 4000, customers: 2400 },
    { name: 'Feb', sales: 3000, customers: 2210 },
    { name: 'Mar', sales: 2000, customers: 2290 },
    { name: 'Apr', sales: 2780, customers: 2000 },
    { name: 'May', sales: 1890, customers: 2181 },
    { name: 'Jun', sales: 2390, customers: 2500 },
    { name: 'Jul', sales: 3490, customers: 2100 },
    { name: 'Aug', sales: 2000, customers: 2400 },
    { name: 'Sep', sales: 2780, customers: 2000 },
    { name: 'Oct', sales: 1890, customers: 2181 },
    { name: 'Nov', sales: 2390, customers: 2500 },
    { name: 'Dec', sales: 3490, customers: 2100 },
  ],
  '30 days': [
    // Add mock data for the last 30 days
  ],
  '7 days': [
    // Add mock data for the last 7 days
  ],
  '24 hours': [
    // Add mock data for the last 24 hours
  ]
};

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('12 months');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to toggle dark mode in your application
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray text-gray-800'}`}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} setTimeframe={setTimeframe} />
      <div className="ml-64">
        <Header toggleDarkMode={toggleDarkMode} />
        <MainContent timeframe={timeframe} setTimeframe={setTimeframe} data={data} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Dashboard;
