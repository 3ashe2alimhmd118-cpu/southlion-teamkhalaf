import React, { useState } from 'react';

function InfoSections() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '20px auto',
      direction: 'rtl',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      
      {/* 1. قسم آراء وتجارب المشتركين */}
      <div style={{ backgroundColor: '#0a0a0a', padding: '10px', borderRadius: '12px', border: '2px solid #e50914', boxShadow: '0 6px 20px rgba(229, 9, 20, 0.3)' }}>
        <button 
          onClick={() => toggleSection('reviews')}
          style={{
            width: '100%', backgroundColor: '#e50914', color: '#ffffff', border: 'none', padding: '14px 20px',
            fontSize: '18px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}
        >
          <span>⭐ آراء وتجارب المشتركين</span>
          <span>{activeSection === 'reviews' ? '▲' : '▼'}</span>
        </button>

        {activeSection === 'reviews' && (
          <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#141414', borderRadius: '8px', color: '#dddddd', lineHeight: '1.6' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>"التدريب في South Lions غيّر مستواي الفني والبدني تماماً خلال أشهر قليلة. الاهتمام بالتفاصيل عالي جداً." <br/><strong style={{ color: '#e50914' }}>- أحد مقاتلي الفريق</strong></p>
            <p style={{ fontStyle: 'italic' }}>"ابني أصبح أكثر انضباطاً وثقة بنفسه بعد انضمامه لبرنامج الأطفال في الكيك بوكسينغ." <br/><strong style={{ color: '#e50914' }}>- ولي أمر متدرب</strong></p>
          </div>
        )}
      </div>

      {/* 2. قسم الأسئلة الشائعة (FAQ) */}
      <div style={{ backgroundColor: '#0a0a0a', padding: '10px', borderRadius: '12px', border: '2px solid #e50914', boxShadow: '0 6px 20px rgba(229, 9, 20, 0.3)' }}>
        <button 
          onClick={() => toggleSection('faq')}
          style={{
            width: '100%', backgroundColor: '#e50914', color: '#ffffff', border: 'none', padding: '14px 20px',
            fontSize: '18px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}
        >
          <span>❓ الأسئلة الشائعة</span>
          <span>{activeSection === 'faq' ? '▲' : '▼'}</span>
        </button>

        {activeSection === 'faq' && (
          <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#141414', borderRadius: '8px', color: '#dddddd', lineHeight: '1.6' }}>
            <p><strong style={{ color: '#ffb703' }}>هل التدريب يناسب المبتدئين تماماً؟</strong><br/>نعم، جميع برامجنا صممت لتتناسب مع كافة المستويات من الصفر وحتى الاحتراف.</p>
            <hr style={{ borderColor: '#333', margin: '10px 0' }}/>
            <p><strong style={{ color: '#ffb703' }}>هل أحتاج لمعدات خاصة في أول حصة؟</strong><br/>يمكنك البدء بملابس رياضية مريحة، وسيقوم المدرب بتوجيهك للمعدات المطلوبة لاحقاً.</p>
            <hr style={{ borderColor: '#333', margin: '10px 0' }}/>
            <p><strong style={{ color: '#ffb703' }}>كيف يتم تنسيق جلسات الـ Private؟</strong><br/>يتم حجز الموعد مسبقاً وتحديده بناءً على جدولك وتفرغ المدرب المختص.</p>
          </div>
        )}
      </div>

      {/* 3. قسم اتصل بنا */}
      <div style={{ backgroundColor: '#0a0a0a', padding: '10px', borderRadius: '12px', border: '2px solid #e50914', boxShadow: '0 6px 20px rgba(229, 9, 20, 0.3)' }}>
        <button 
          onClick={() => toggleSection('contact')}
          style={{
            width: '100%', backgroundColor: '#e50914', color: '#ffffff', border: 'none', padding: '14px 20px',
            fontSize: '18px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}
        >
          <span>📞 اتصل بنا</span>
          <span>{activeSection === 'contact' ? '▲' : '▼'}</span>
        </button>

        {activeSection === 'contact' && (
          <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#141414', borderRadius: '8px', color: '#dddddd', lineHeight: '1.8', textAlign: 'center' }}>
            <p style={{ margin: '5px 0' }}><strong>البريد الإلكتروني:</strong> mohammad.khalaf.11.8.1997@gmail.com</p>
            <p style={{ margin: '5px 0' }}><strong>الهاتف:</strong> +961 78809493</p>
            <p style={{ margin: '5px 0' }}><strong>إنستغرام:</strong> south lions team khalaf</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default InfoSections;