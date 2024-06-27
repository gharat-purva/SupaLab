import React, { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Header = ({ toggleSidebar }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (index, isDropdownClick) => {
    setSelectedItem(index);
    if (!isDropdownClick) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white p-4 flex justify-between items-center flex-wrap">
      <div className="flex items-center w-full md:w-auto">
        <FaBars className="text-customBlue cursor-pointer md:hidden" onClick={toggleSidebar} />
        <nav className="ml-4 hidden md:flex space-x-4">
          <Link
            to="/"
            className={classNames(
              'text-customBlue rounded-2xl px-3 py-1',
              { 'bg-blue-100 text-white': selectedItem === 0 }
            )}
            onClick={() => handleClick(0)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={classNames(
              'text-customBlue rounded-2xl px-3 py-1',
              { 'bg-blue-100 text-white': selectedItem === 1 }
            )}
            onClick={() => handleClick(1)}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={classNames(
              'text-customBlue rounded-2xl px-3 py-1',
              { 'bg-blue-100 text-white': selectedItem === 2 }
            )}
            onClick={() => handleClick(2)}
          >
            Portfolio
          </Link>
          <Link
            to="/projects"
            className={classNames(
              'text-customBlue rounded-2xl px-3 py-1',
              { 'bg-blue-100 text-white': selectedItem === 3 }
            )}
            onClick={() => handleClick(3)}
          >
            Projects
          </Link>
          <Link
            to="/reports"
            className={classNames(
              'text-customBlue rounded-2xl px-3 py-1',
              { 'bg-blue-100 text-white': selectedItem === 4 }
            )}
            onClick={() => handleClick(4)}
          >
            Reports
          </Link>
          <Link
            to="/statements"
            className={classNames(
              'text-customBlue rounded-2xl px-3 py-1',
              { 'bg-blue-100 text-white': selectedItem === 5 }
            )}
            onClick={() => handleClick(5)}
          >
            Statements
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4 mt-4 md:mt-0 w-full md:w-auto">
        <div className="relative w-full md:w-auto">
          <input
            id="search"
            type="text"
            className="w-full md:w-64 px-4 py-2 bg-gray text-gray-800 rounded"
            placeholder="Search..."
          />
          <FaSearch className="absolute top-2 right-2 text-gray-600" />
        </div>
      </div>

      {/* Dropdown for mobile screens */}
      <div className="md:hidden relative mt-4 md:mt-0 w-full md:w-auto">
        <button
          onClick={toggleDropdown}
          className={classNames(
            'text-customBlue rounded-2xl px-3 py-1 focus:outline-none w-full',
            { 'bg-blue-100 text-white': isDropdownOpen }
          )}
        >
          Menu
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white rounded shadow-lg py-2 z-10">
            <Link
              to="/"
              className={classNames(
                'block px-4 py-2 text-customBlue',
                { 'bg-blue-100 text-white': selectedItem === 0 }
              )}
              onClick={() => handleClick(0, true)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={classNames(
                'block px-4 py-2 text-customBlue',
                { 'bg-blue-100 text-white': selectedItem === 1 }
              )}
              onClick={() => handleClick(1, true)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={classNames(
                'block px-4 py-2 text-customBlue',
                { 'bg-blue-100 text-white': selectedItem === 2 }
              )}
              onClick={() => handleClick(2, true)}
            >
              Portfolio
            </Link>
            <Link
              to="/projects"
              className={classNames(
                'block px-4 py-2 text-customBlue',
                { 'bg-blue-100 text-white': selectedItem === 3 }
              )}
              onClick={() => handleClick(3, true)}
            >
              Projects
            </Link>
            <Link
              to="/reports"
              className={classNames(
                'block px-4 py-2 text-customBlue',
                { 'bg-blue-100 text-white': selectedItem === 4 }
              )}
              onClick={() => handleClick(4, true)}
            >
              Reports
            </Link>
            <Link
              to="/statements"
              className={classNames(
                'block px-4 py-2 text-customBlue',
                { 'bg-blue-100 text-white': selectedItem === 5 }
              )}
              onClick={() => handleClick(5, true)}
            >
              Statements
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
