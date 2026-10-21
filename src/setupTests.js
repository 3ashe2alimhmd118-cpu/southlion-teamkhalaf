import React from 'react';

function Schedule() {
  return (
    <section id="schedule" className="schedule-section">
      <h2>الجدول الأسبوعي المجمع</h2>
      <div className="table-responsive">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>اليوم</th>
              <th>الأطفال (5:00 - 6:00 م)</th>
              <th>الكبار (6:00 - 7:30 م)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>الإثنين / الأربعاء / الجمعة</td>
              <td>Boxing / MMA (يحدد لاحقاً)</td>
              <td>Boxing (6:00) / MMA (6:30)</td>
            </tr>
            <tr>
              <td>الثلاثاء / الخميس / السبت</td>
              <td>Kickboxing / Muay Thai</td>
              <td>Kickboxing / Muay Thai (6:30)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Schedule;