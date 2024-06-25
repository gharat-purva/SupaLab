import React, { useState } from 'react';
import { FaTachometerAlt, FaEnvelope, FaUserPlus, FaWallet, FaNewspaper, FaChartLine, FaStoreAlt, FaArchive, FaCog, FaPlus, FaMoon } from 'react-icons/fa';

const Sidebar = ({ darkMode, toggleDarkMode }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-customBlue">SupaLab</h1>
        <nav className="mt-8">
          <ul>
            <li className={`mb-4 p-3 flex items-center cursor-pointer rounded-2xl ${selectedItem === 0 ? 'bg-blue-100' : ''}`} onClick={() => handleClick(0)}>
              <FaTachometerAlt className={`text-customBlue mr-2 ${selectedItem === 0 ? 'text-618af3' : ''}`} />
              <a href="github.com" className={`text-customBlue font-medium ${selectedItem === 0 ? 'text-618af3' : ''}`}>Dashboard</a>
            </li>
            <li className={`mb-4 p-3 flex items-center cursor-pointer rounded-2xl ${selectedItem === 1 ? 'bg-blue-100' : ''}`} onClick={() => handleClick(1)}>
              <FaEnvelope className={`text-customBlue mr-2 ${selectedItem === 1 ? 'text-618af3' : ''}`} />
              <a href="github.com" className={`text-customBlue ${selectedItem === 1 ? 'text-618af3' : ''}`}>Inbox</a>
            </li>
            <li className={`mb-4 p-3 flex items-center cursor-pointer rounded-2xl ${selectedItem === 2 ? 'bg-blue-100' : ''}`} onClick={() => handleClick(2)}>
              <FaWallet className={`text-customBlue mr-2 ${selectedItem === 2 ? 'text-618af3' : ''}`} />
              <a href="github.com" className={`text-customBlue ${selectedItem === 2 ? 'text-618af3' : ''}`}>Wallet</a>
            </li>
            <li className={`mb-4 p-3 flex items-center cursor-pointer rounded-2xl ${selectedItem === 3 ? 'bg-blue-100' : ''}`} onClick={() => handleClick(3)}>
              <FaNewspaper className={`text-customBlue mr-2 ${selectedItem === 3 ? 'text-618af3' : ''}`} />
              <a href="github.com" className={`text-customBlue ${selectedItem === 3 ? 'text-618af3' : ''}`}>Newsfeed</a>
            </li>
            <li className={`mb-4 p-3 flex items-center cursor-pointer rounded-2xl ${selectedItem === 4 ? 'bg-blue-100' : ''}`} onClick={() => handleClick(4)}>
              <FaChartLine className={`text-customBlue mr-2 ${selectedItem === 4 ? 'text-618af3' : ''}`} />
              <a href="github.com" className={`text-customBlue ${selectedItem === 4 ? 'text-618af3' : ''}`}>Analytics</a>
            </li>
            <li className={`mb-4 p-3 flex items-center cursor-pointer rounded-2xl ${selectedItem === 5 ? 'bg-blue-100' : ''}`} onClick={() => handleClick(5)}>
              <FaStoreAlt className={`text-customBlue mr-2 ${selectedItem === 5 ? 'text-618af3' : ''}`} />
              <a href="github.com" className={`text-customBlue ${selectedItem === 5 ? 'text-618af3' : ''}`}>Market</a>
            </li>
            <li className={`mb-4 p-3 flex items-center cursor-pointer rounded-2xl ${selectedItem === 6 ? 'bg-blue-100' : ''}`} onClick={() => handleClick(6)}>
              <FaArchive className={`text-customBlue mr-2 ${selectedItem === 6 ? 'text-618af3' : ''}`} />
              <a href="github.com" className={`text-customBlue ${selectedItem === 6 ? 'text-618af3' : ''}`}>Archive</a>
            </li>
            <li className={`mb-4 p-3 flex items-center cursor-pointer rounded-2xl ${selectedItem === 7 ? 'bg-blue-100' : ''}`} onClick={() => handleClick(7)}>
              <FaCog className={`text-customBlue mr-2 ${selectedItem === 7 ? 'text-618af3' : ''}`} />
              <a href="github.com" className={`text-customBlue ${selectedItem === 7 ? 'text-618af3' : ''}`}>Settings</a>
            </li>
            <li className={`mb-4 p-3 flex items-center cursor-pointer rounded-2xl ${selectedItem === 8 ? 'bg-blue-100' : ''}`} onClick={() => handleClick(8)}>
              <FaUserPlus className={`text-customBlue mr-2 ${selectedItem === 8 ? 'text-618af3' : ''}`} />
              <a href="github.com" className={`text-customBlue ${selectedItem === 8 ? 'text-618af3' : ''}`}>Profile</a>
            </li>
            <li className="mb-4 p-3 flex items-center cursor-pointer rounded-2xl" onClick={handleClick}>
              <div className="bg-618af3 w-12 h-12 flex items-center justify-center rounded-full mr-2">
                <FaPlus className="text-white" />
              </div>
              <span className="text-customBlue">Add new product</span>
            </li>
            <li className="mb-4 p-3 flex items-center cursor-pointer rounded-2xl" onClick={handleClick}>

              <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
              <FaMoon className="text-customBlue" /> &nbsp;
                <span className="text-customBlue">Dark mode</span>
                <div className={`w-12 h-6 flex items-center rounded-full bg-gray-300 p-1 relative ${darkMode ? 'bg-blue-600' : ''}`}>
                  <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? 'translate-x-6' : ''}`}></div>
                </div>
              </label>
              <input type="checkbox" id="darkModeToggle" className="hidden" onChange={toggleDarkMode} checked={darkMode} />
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
