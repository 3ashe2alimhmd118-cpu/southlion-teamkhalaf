import React, { useState } from 'react';
import logo from './logo.gym.jpeg';
import Navbar from './navbar';
import HeroSection from './herosection';
import Programs from './programs';
import About from './About';
import Schedule from './schedule';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './contact';
import './App.css';
import EliteFighter from './elitefighter';
function App() {
  const [isEliteLoggedIn, setIsEliteLoggedIn] = useState(false);
  return (
    
    <div className="App">
     <Navbar />

      {isEliteLoggedIn ? (
  


        <EliteFighter />
      ) : (
        <div style={{
          backgroundColor: '#0a0a0a',
          border: '2px solid #e50914',
          borderRadius: '12px',
          padding: '30px',
          maxWidth: '450px',
          margin: '40px auto',
          textAlign: 'center',
          boxShadow: '0 8px 25px rgba(229, 9, 20, 0.4)',
          direction: 'rtl'
        }}>
          <h2 style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
            قسم النخبة - Elite Fighters
          </h2>
          <p style={{ color: '#cccccc', fontSize: '15px', marginBottom: '20px', lineHeight: '1.6' }}>
            هذه الصفحة مخصصة للاعبين المتقدمين فقط. الرجاء إدخال كلمة المرور للمتابعة.
          </p>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            const password = e.target.elements.passwordInput.value;
            if (password === '123' || password === 'southlions123') {
              setIsEliteLoggedIn(true);
            } else {
              alert('كلمة المرور غير صحيحة');
            }
          }}>
            <input 
              type="password" 
              name="passwordInput"
              placeholder="أدخل كلمة المرور" 
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: '#141414',
                border: '1px solid #333',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '16px',
                marginBottom: '15px',
                textAlign: 'center',
                outline: 'none'
              }}
            />
            <button 
              type="submit"
              style={{
                backgroundColor: '#e50914',
                color: '#ffffff',
                border: 'none',
                padding: '12px 25px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '100%',
                boxShadow: '0 4px 15px rgba(229, 9, 20, 0.5)',
                transition: 'all 0.3s ease'
              }}
            >
              تسجيل دخول النخبة
            </button>
          </form>
        </div>
      )}
)}
      <HeroSection />
      <Programs />
      <About />
      <Schedule />
      <Testimonials />
      <FAQ />
      <Contact />

      {/* زر الواتساب العائم بالأسفل */}
      <a
        href="https://wa.me/96170123456"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        💬 تواصل معنا
      </a>
    </div>
  );
}

export default App;