import React, { useState } from 'react';

function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', age: '', weight: '', height: '',
    emergencyContact: '', martialArtsExperience: 'لا', backgroundSport: '',
    injuries: '', source: 'إستغرام / تيك توك', disclaimer: false
  });

  const handleOpenModal = (programName) => setSelectedProgram(programName);
  const handleCloseModal = () => setSelectedProgram(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '96178809493';
    const message = `تسجيل جديد في الأكاديمية:\n\n` +
      `البرنامج: ${selectedProgram}\n` +
      `الاسم: ${formData.name}\n` +
      `رقم الهاتف: ${formData.phone}\n` +
      `العمر: ${formData.age}\n` +
      `الوزن: ${formData.weight} kg\n` +
      `الطول: ${formData.height} cm\n` +
      `جهة اتصال الطوارئ: ${formData.emergencyContact}\n` +
      `مارس الفنون القتالية سابقاً: ${formData.martialArtsExperience}\n` +
      `نوع الرياضة السابقة: ${formData.backgroundSport}\n` +
      `إصابات: ${formData.injuries}\n` +
      `كيف عرفت عن الأكاديمية: ${formData.source}\n` +
      `إقرار رفع المسؤولية: ${formData.disclaimer ? 'موافق' : 'غير موافق'}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleCloseModal();
  };

return (
    <section className="programs-section" id="programs-section">
      <h2>برامجنا التدريبية</h2>
      <div className="programs-grid">
        {/* كرت Kickboxing */}
        <div className="program-card">
          <h3>Kickboxing</h3>
          <div className="category-section">
            <h4>Adults (البالغين)</h4>
            <p>الأيام: الثلاثاء، الخميس، السبت</p>
            <p>الوقت: 6:30 - 7:30 مساءً</p>
            <button onClick={() => handleOpenModal('Kickboxing - Adults')}>سجل الآن</button>
          </div>
          <div className="category-section">=
            <h4>Kids (الأطفال)</h4>
            <p>الأيام: الثلاثاء، الخميس، السبت</p>
            <p>الوقت: 5:00 - 6:00 مساءً</p>
            <button onClick={() => handleOpenModal('Kickboxing - Kids')}>سجل الآن</button>
          </div>
        </div>
        {/* كرت Boxing */}
        <div className="program-card">
          <h3>Boxing</h3>
          <div className="category-section">
            <h4>Adults (البالغين)</h4>
            <p>الأيام: الإثنين، الأربعاء، الجمعة</p>
            <p>الوقت: 6:00 - 7:00 مساءً</p>
            <button onClick={() => handleOpenModal('Boxing - Adults')}>سجل الآن</button>
          </div>
          <div className="category-section">
            <h4>Kids (الأطفال)</h4>
            <p>الأيام: يحدد لاحقاً</p>
            <p>الوقت: يحدد لاحقاً</p>
            <button onClick={() => handleOpenModal('Boxing - Kids')}>سجل الآن</button>
          </div>
        </div>
        {/* كرت MMA */}
        <div className="program-card">
          <h3>MMA</h3>
          <div className="category-section">
            <h4>Adults (البالغين)</h4>
            <p>الأيام: الإثنين، الأربعاء، الجمعة</p>
            <p>الوقت: 7:00 - 8:00 مساءً</p>
            <button onClick={() => handleOpenModal('MMA - Adults')}>سجل الآن</button>
          </div>
          <div className="category-section">
            <h4>Kids (الأطفال)</h4>
            <p>الأيام: يحدد لاحقاً</p>
            <p>الوقت: يحدد لاحقاً</p>
            <button onClick={() => handleOpenModal('MMA - Kids')}>سجل الآن</button>
          </div>
        </div>
        {/* كرت Private Sessions */}
        <div className="program-card">
          <h3>Private Sessions</h3>
          <div className="category-section">
            <h4>تدريب شخصي خاص</h4>
            <p>لتحسين اللياقة، مهارات الدفاع عن النفس، وتجهيز المقاتلين.</p>
            <button onClick={() => handleOpenModal('Private Sessions')}>سجل الآن</button>
          </div>
        </div>
      </div>
    
          

    
      {selectedProgram && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center',
          alignItems: 'center', zIndex: 1000, padding: '1rem', overflowY: 'auto'
        }}>
          <div style={{
            backgroundColor: '#111111', border: '1px solid #ffd166', padding: '2rem',
            borderRadius: '10px', width: '100%', maxWidth: '500px', color: '#fff',
            maxHeight: '90vh', overflowY: 'auto'
          }}>
            <h3 style={{ color: '#ffd166', marginBottom: '1rem', textAlign: 'center' }}>التسجيل في: {selectedProgram}</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>الاسم الكامل:</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ marginBottom: '1rem', flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>رقم الهاتف:</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }} />
                </div>
                <div style={{ marginBottom: '1rem', flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>العمر:</label>
                  <input type="number" required value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ marginBottom: '1rem', flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>الوزن (kg):</label>
                  <input type="number" required value={formData.weight} onChange={(e) => setFormData({...formData, weight: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }} />
                </div>
                <div style={{ marginBottom: '1rem', flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>الطول (cm):</label>
                  <input type="number" required value={formData.height} onChange={(e) => setFormData({...formData, height: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }} />
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>جهة اتصال الطوارئ (الاسم والرقم):</label>
                <input type="text" required value={formData.emergencyContact} onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>هل مارست الفنون القتالية سابقاً؟</label>
                <select value={formData.martialArtsExperience} onChange={(e) => setFormData({...formData, martialArtsExperience: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }}>
                  <option value="لا">لا</option>
                  <option value="نعم">نعم</option>
                </select>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>من أي نوع رياضة جاي لعندي؟</label>
                <input type="text" placeholder="مثلاً: الملاكمة، كرة القدم، لا يوجد" value={formData.backgroundSport} onChange={(e) => setFormData({...formData, backgroundSport: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }} />
              </div>
               <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>هل تعاني من إصابات حالية أو مزمنة؟</label>
                <input type="text" placeholder="اكتب 'لا' إن لم يوجد" value={formData.injuries} onChange={(e) => setFormData({...formData, injuries: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem' }}>كيف عرفت عن الأكاديمية؟</label>
                <select value={formData.source} onChange={(e) => setFormData({...formData, source: e.target.value})} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #415a77', backgroundColor: '#0d1b2a', color: '#fff' }}>
                  <option value="إستغرام / تيك توك">إستغرام / تيك توك</option>
                  <option value="صديق أو معارف">صديق أو معارف</option>
                  <option value="المرور بجانب النادي">المرور بجانب النادي</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.8rem' }}>
                <input type="checkbox" required checked={formData.disclaimer} onChange={(e) => setFormData({...formData, disclaimer: e.target.checked})} style={{ marginTop: '0.2rem' }} />
                <label style={{ fontSize: '0.75rem', lineHeight: '1.3', color: '#e0e1dd' }}>
                  أقر بأنني سليم صحياً لممارسة الرياضة، وأتحمل المسؤولية الشخصية، وأوافق على شروط الأكاديمية.
                </label>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="submit" style={{ flex: 1, padding: '0.6rem', backgroundColor: '#ffd166', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                  إرسال عبر واتساب
                </button>
                <button type="button" onClick={handleCloseModal} style={{ flex: 1, padding: '0.6rem', backgroundColor: '#415a77', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Programs;
