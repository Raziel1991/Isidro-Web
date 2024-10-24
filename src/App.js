// src/App.js
import React, { useState } from 'react';

import FlipBook from './components/FlipBook';
import Menu from './components/Menu'; // Import the Menu component
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  const [selectedTab, setSelectedTab] = useState('Comics');

  const tabs = ['Comics', 'Character Design', 'FanArt and Commissions', 'Story Board', 'WebToon', 'WebToon-editing', 'Miscellaneous'];

  return (
    <div className="App">
      <Menu tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div className="content">
        <FlipBook selectedTab={selectedTab} />
      </div>

      <Footer /> {/* Use the Footer component */}
    </div>
  );
}

export default App;
