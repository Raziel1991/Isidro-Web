// src/components/Menu.js
import React from 'react';
import './Menu.css'; // Import the CSS file

const Menu = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <nav className="menu">
      {tabs.map((tab) => (
        <button 
          key={tab} 
          onClick={() => setSelectedTab(tab)} 
          className={selectedTab === tab ? 'active' : ''}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
