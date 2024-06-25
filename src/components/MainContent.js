import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaCircleInfo } from 'react-icons/fa6';
import { FaCalendar, FaCalendarAlt, FaFilter } from 'react-icons/fa';


const MainContent = ({ timeframe, setTimeframe, data }) => {

  const handleTimeframeChange = (selectedTimeframe) => {
    setTimeframe(selectedTimeframe);
  };

  // Mock data for Payments and Revenue
  const paymentsData = [
    { month: 'January', amount: 25000 },
    { month: 'February', amount: 28000 },
    { month: 'March', amount: 30000 },
    { month: 'April', amount: 35000 },
    { month: 'May', amount: 32000 },
    { month: 'June', amount: 28000 },
    { month: 'July', amount: 30000 },
  ];

  const revenueData = [
    { month: 'January', amount: 40000 },
    { month: 'February', amount: 42000 },
    { month: 'March', amount: 45000 },
    { month: 'April', amount: 48000 },
    { month: 'May', amount: 47000 },
    { month: 'June', amount: 43000 },
    { month: 'July', amount: 45000 },
  ];

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  return (
    <div className="">
      <main className="p-8">
        <section className="mb-8">
        <div className="flex justify-start items-center mb-4">
              <button
                onClick={() => handleTimeframeChange('12 months')}
                className={`px-4 py-2 rounded-l border border-darkgray bg-white text-customBlue font-medium focus:outline-none ${timeframe === '12 months' ? 'font-bold' : ''}`}
              >
                12 months
              </button>
              <button
                onClick={() => handleTimeframeChange('30 days')}
                className={`px-4 py-2 border border-darkgray bg-white text-customBlue font-medium focus:outline-none ${timeframe === '30 days' ? 'font-bold' : ''}`}
              >
                30 days
              </button>
              <button
                onClick={() => handleTimeframeChange('7 days')}
                className={`px-4 py-2 border border-darkgray bg-white text-customBlue font-medium focus:outline-none ${timeframe === '7 days' ? 'font-bold' : ''}`}
              >
                7 days
              </button>
              <button
                onClick={() => handleTimeframeChange('24 hours')}
                className={`px-4 py-2 rounded-r mr-5 border border-darkgray bg-white text-customBlue font-medium focus:outline-none ${timeframe === '24 hours' ? 'font-bold' : ''}`}
              >
                24 hours
              </button>
              <button
                className={`px-4 py-2 mr-5 border border-darkgray bg-white text-black font-medium flex focus:outline-none ${timeframe === '7 days' ? 'font-bold' : ''}`}
              ><FaCalendarAlt className="text-xl font-bold" />Select Dates</button>
              <button
                className={`px-4 py-2 border border-darkgray bg-white text-black font-medium flex focus:outline-none ${timeframe === '7 days' ? 'font-bold' : ''}`}
              ><FaFilter className="text-xl font-bold" />Filter</button>
            </div>
            
          <div className="mt-4 bg-white p-4 rounded">
          <h3 className="text-xl font-semibold text-Black flex">Total Product Sales &nbsp;
          <span><FaCircleInfo className="text-darkest font-bold" /></span>
          </h3>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data[timeframe]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}k`} domain={[0, 'dataMax']} />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#6B46C1" />
                <Line type="monotone" dataKey="customers" stroke="#2563EB" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Four Boxes Section */}
        <div className="flex mb-8">
          <div className="flex-1 bg-white p-4 rounded mr-4">
            <h3 className="text-4xl font-semibold text-Black">958.042</h3>
            <p className="text-customBlue">Total Sales</p>
            <button className="text-darkgreen bg-green rounded-full p-1 text-sm">+12,7%</button>
          </div>
          <div className="flex-1 bg-white p-4 rounded mr-4">
            <h3 className="text-4xl font-semibold text-Black">958.042</h3>
            <p className="text-customBlue">Total Sales</p>
            <button className="text-darkgreen bg-green rounded-full p-1 text-sm">+12,7%</button>
          </div>
          <div className="flex-1 bg-white p-4 rounded mr-4">
            <h3 className="text-4xl font-semibold text-Black">958.042</h3>
            <p className="text-customBlue">Total Sales</p>
            <button className="text-darkgreen bg-green rounded-full p-1 text-sm">+12,7%</button>
          </div>
          <div className="flex-1 bg-white p-4 rounded mr-4">
            <h3 className="text-4xl font-semibold text-Black">958.042</h3>
            <p className="text-customBlue">Total Sales</p>
            <button className="text-darkgreen bg-green rounded-full p-1 text-sm">+12,7%</button>
          </div>
        </div>

        {/* Payments and Revenue Section in Two Columns */}
        <div className="flex">
          {/* Payments Section */}
          <div className="flex-1 mr-4">
            <section className="mb-4">
              
              
              <div className="mt-4 bg-white p-4 rounded">
              <h3 className="text-xl font-semibold text-Black">Payments
              <button className="text-darkgreen bg-green rounded-full p-1 text-sm">+12,7%</button>
              </h3>
                <div className=" mb-4">
                  <h4 className="text-2xl font-bold text-Black">31.214</h4>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={paymentsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `${value}k`} domain={[0, 60000]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#6B46C1" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>

          {/* Revenue Section */}
          <div className="flex-1">
          <section className="mb-4">
              
              
              <div className="mt-4 bg-white p-4 rounded">
              <h3 className="text-xl font-semibold text-Black">Revenue
              <button className="text-darkgreen bg-green rounded-full p-1 text-sm">+12,7%</button>
              </h3>
                <div className=" mb-4">
                  <h4 className="text-2xl font-bold text-Black">$122.340,50</h4>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={paymentsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `${value}k`} domain={[0, 60000]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#6B46C1" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContent;
