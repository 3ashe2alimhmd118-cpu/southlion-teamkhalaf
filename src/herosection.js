import React from 'react';
import logo from './logo.gym.jpeg';

function HeroSection() {
  return (
    <div className="hero-container" style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
      
      {/* الصور الأربعة الخلفية مستدعاة مباشرة من مجلد public */}
      <div className="hero-images" style={{ display: 'flex', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <img src="/image1.jpg" alt="Hero 1" style={{ width: '25%', height: '100%', objectFit: 'cover' }} />
        <img src="/image2.jpg" alt="Hero 2" style={{ width: '25%', height: '100%', objectFit: 'cover' }} />
        <img src="/image3.jpg" alt="Hero 3" style={{ width: '25%', height: '100%', objectFit: 'cover' }} />
        <img src="/image4.jpg" alt="Hero 4" style={{ width: '25%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* المحتوى منسق بحجم ممتاز ومرتب */}
      <div className="hero-content" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 2,
        width: '85%',
        maxWidth: '650px',
        background: 'rgba(10, 10, 10, 0.82)',
        padding: '15px 20px',
        borderRadius: '10px',
        border: '1.5px solid #e50914',
        boxShadow: '0 6px 20px rgba(229, 9, 20, 0.4)'
      }}>
        
        {/* اللوجو بحجم مناسب */}
        <img 
          src={logo} 
          alt="South Lions Logo" 
          style={{ 
            height: '200px', 
            width: 'auto', 
            marginBottom: '8px',
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            filter: 'drop-shadow(0 0 8px rgba(229, 9, 20, 0.7))'
          }} 
        />

        <h2 style={{ fontSize: '1.5rem', color: '#ffffff', margin: '0 0 5px 0' }}>أطلق طاقتك في</h2>
        <h1 className="brand-title" style={{ fontSize: '2.2rem', color: '#e50914', margin: '0 0 8px 0', fontWeight: 'bold' }}>South Lions</h1>
        <p style={{ fontSize: '0.9rem', color: '#cccccc', margin: '0 0 12px 0' }}>نقدم تدريباً احترافياً في Kickboxing, Muay Thai, Boxing و MMA.</p>
        <button 
  className="hero-button" 
  onClick={() => {
    const section = document.getElementById('programs-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  style={{
    backgroundColor: '#e50914',
    color: '#ffffff',
    border: 'none',
    padding: '8px 20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 3px 10px rgba(229, 9, 20, 0.5)'
  }}
>
  انضم إلينا اليوم
</button>
      </div>
    </div>
  );
}

export default HeroSection;