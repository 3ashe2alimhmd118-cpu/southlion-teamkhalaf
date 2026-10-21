import React, { useState } from 'react';

function AboutSection() {
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
      {/* الزر الرئيسي للاكاديمية والمدربين */}
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
          justify: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(229, 9, 20, 0.4)',
          transition: 'all 0.3s ease'
        }}
      >
        <span>عن الأكاديمية والمدربين 🥊</span>
        <span style={{ fontSize: '20px', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
          ▼
        </span>
      </button>

      {/* المحتوى الخفي الذي يظهر فقط عند الضغط */}
      {isOpen && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#141414',
          borderRadius: '8px',
          borderRight: '4px solid #e50914',
          textAlign: 'right',
          color: '#dddddd',
          lineHeight: '1.8'
        }}>
          <p style={{ fontSize: '15px', marginBottom: '15px' }}>
            أكاديمية <strong style={{ color: '#e50914' }}>South Lions</strong> هي المركز المتخصص في الجنوب لإعداد الأبطال والمقاتلين وتطوير اللياقة البدنية والدفاع عن النفس بأعلى المعايير الاحترافية.
          </p>

          <div style={{ marginBottom: '15px', borderBottom: '1px solid #262626', paddingBottom: '12px' }}>
            <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '16px' }}>الكابتن محمد خلف</h4>
            <p style={{ color: '#ffb703', margin: 0, fontSize: '14px', fontWeight: 'bold' }}>المؤسس والمدرب الرئيسي</p>
            <p style={{ fontSize: '13px', color: '#aaaaaa', margin: '4px 0 0 0' }}>
              مدرب ومنافس Kickboxing, Muay Thai, Boxing & MMA مع خبرة واسعة في إعداد الفايترز وتجهيزهم للنزالات المحلية والدولية.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '16px' }}>الكابتن علي قبيسي</h4>
            <p style={{ color: '#ffb703', margin: 0, fontSize: '14px', fontWeight: 'bold' }}>مدرب الفنون القتالية لفئة الأولاد</p>
            <p style={{ fontSize: '13px', color: '#aaaaaa', margin: '4px 0 0 0' }}>
              تخصص في التدريب الفردي وتطوير التكنيك واللياقة القتالية العالية لجميع الفئات والأعمار.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutSection;