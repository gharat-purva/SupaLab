import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray text-gray-800'}`}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`ml-0 md:ml-64 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
