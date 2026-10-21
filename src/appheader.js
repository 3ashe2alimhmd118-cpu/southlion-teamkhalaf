import React, { useState } from 'react';
import logo from './logo.gym.jpeg';
import { programsData } from './programs';
import './App.css';

function AppHeader() {
  const [showPrograms, setShowPrograms] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          alt="South Lions Logo" 
          style={{ height: '80px', width: 'auto', marginBottom: '15px' }} 
        />
        <p>
          welcome to the south lions academy team khalaf.
        </p>

        {/* زر انضم إلينا */}
        <button onClick={() => setShowPrograms(!showPrograms)}>
          انضم إلينا اليوم
        </button>

        {/* عرض الجداول عند الضغط */}
       {showPrograms && (
  <div className="programs-container">
    {programsData.map((program, index) => (
      <div key={index} className="program-card">
        <h3>{program.title}</h3>
        {/* باقي تفاصيل الجدول أو الكارد */}
      </div>
    ))}
  </div>
)}
      </header>
    </div>
  );
}

export default AppHeader;