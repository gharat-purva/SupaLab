import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectsPage from './pages/ProjectsPage';
import ReportsPage from './pages/ReportsPage';
import StatementsPage from './pages/StatementsPage';
import HomePage from './pages/HomePage';
import InboxPage from './pages/InboxPage';
import WalletPage from './pages/WalletPage';
import NewsfeedPage from './pages/NewsfeedPage';
import AnalyticsPage from './pages/AnalyticsPage';
import MarketPage from './pages/MarketPage';
import ArchivePage from './pages/ArchivePage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="statements" element={<StatementsPage />} />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="newsfeed" element={<NewsfeedPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="market" element={<MarketPage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
