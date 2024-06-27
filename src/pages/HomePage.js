import React, { useState } from 'react';
import MainContent from '../components/MainContent';
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
  '30 days': [],
  '7 days': [],
  '24 hours': [],
};

const HomePage = () => {
  const [timeframe, setTimeframe] = useState('12 months');
  const [darkMode] = useState(false);
  return <div>
    
    <MainContent timeframe={timeframe} setTimeframe={setTimeframe} data={data} darkMode={darkMode} />
    </div>;
};

export default HomePage;
