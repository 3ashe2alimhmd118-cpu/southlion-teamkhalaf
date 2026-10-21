import React, { useState } from 'react';

function ScheduleSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      padding: '20px 15px',
      maxWidth: '900px',
      margin: '20px auto',
      borderRadius: '12px',
      border: '2px solid #e50914',
      boxShadow: '0 6px 20px rgba(229, 9, 20, 0.3)',
      direction: 'rtl',
      textAlign: 'center'
    }}>
      {/* زر جدول الحصص الأسبوعي */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          backgroundColor: '#e50914',
          color: '#ffffff',
          border: 'none',
          padding: '14px 20px',
          fontSize: '18px',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(229, 9, 20, 0.4)',
          transition: 'all 0.3s ease'
        }}
      >
        <span>📅 جدول الحصص الأسبوعي - مواعيد التدريب لأكاديمية South Lions</span>
        <span style={{ fontSize: '20px', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
          ▼
        </span>
      </button>

      {/* الجدول الذي يظهر عند النقر */}
      {isOpen && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#141414',
          borderRadius: '8px',
          border: '1px solid #e50914',
          overflowX: 'auto'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            color: '#ffffff',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#e50914', color: '#ffffff' }}>
                <th style={{ padding: '12px', border: '1px solid #333' }}>الرياضة / البرنامج</th>
                <th style={{ padding: '12px', border: '1px solid #333' }}>الفئة</th>
                <th style={{ padding: '12px', border: '1px solid #333' }}>الأيام</th>
                <th style={{ padding: '12px', border: '1px solid #333' }}>الوقت</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#1a1a1a' }}>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>Kickboxing & Muay Thai</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>الكبار (Adults)</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>الثلاثاء، الخميس، السبت</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>6:30 PM - 7:30 PM</td>
              </tr>
              <tr style={{ backgroundColor: '#121212' }}>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>Kickboxing & Muay Thai</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>الأطفال (Kids)</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>الثلاثاء، الخميس، السبت</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>5:00 PM - 6:00 PM</td>
              </tr>
              <tr style={{ backgroundColor: '#1a1a1a' }}>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>Boxing</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>الكبار (Adults)</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>الإثنين، الأربعاء، الجمعة</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>6:00 PM - 7:00 PM</td>
              </tr>
              <tr style={{ backgroundColor: '#121212' }}>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>MMA</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>الكبار (Adults)</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>الإثنين، الأربعاء، الجمعة</td>
                <td style={{ padding: '10px', border: '1px solid #282828' }}>7:00 PM - 8:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ScheduleSection;