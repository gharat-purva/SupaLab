import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Local state to manage selected item

  const handleClick = (index) => {
    setSelectedItem(index); // Update selected item based on click
  };

  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <nav className="flex space-x-4">
        <a href="#" className={`text-customBlue rounded-2xl px-3 py-1 ${selectedItem === 0 ? 'bg-blue-100 text-618af3' : ''}`} onClick={() => handleClick(0)}>Home</a>
        <a href="#" className={`text-customBlue rounded-2xl px-3 py-1 ${selectedItem === 1 ? 'bg-blue-100 text-618af3' : ''}`} onClick={() => handleClick(1)}>About</a>
        <a href="#" className={`text-customBlue rounded-2xl px-3 py-1 ${selectedItem === 2 ? 'bg-blue-100 text-618af3' : ''}`} onClick={() => handleClick(2)}>Portfolio</a>
        <a href="#" className={`text-customBlue rounded-2xl px-3 py-1 ${selectedItem === 3 ? 'bg-blue-100 text-618af3' : ''}`} onClick={() => handleClick(3)}>Projects</a>
        <a href="#" className={`text-customBlue rounded-2xl px-3 py-1 ${selectedItem === 4 ? 'bg-blue-100 text-618af3' : ''}`} onClick={() => handleClick(4)}>Reports</a>
        <a href="#" className={`text-customBlue rounded-2xl px-3 py-1 ${selectedItem === 5 ? 'bg-blue-100 text-618af3' : ''}`} onClick={() => handleClick(5)}>Statements</a>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" className="px-4 py-2 bg-gray text-gray-800 rounded" placeholder="Search..." />
          <FaSearch className="absolute top-2 right-2 text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
