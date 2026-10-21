import React, { useState } from 'react';

function EliteFighter() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const CORRECT_PASSWORD = '123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('كلمة المرور غير صحيحة، حاول مرة أخرى.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const eliteProgramWeeks = [
    {
      weekTitle: 'الأسبوع الأول',
      days: [
        {
          name: 'اليوم الأول',
          focus: 'التحمل الهوائي والقوة الانفجارية',
          morning: 'إحماء (10 د جري خفيف + إطالة ديناميكية) + جري فترات 6 جولات (800 م بأقصى سرعة 85-90% + 400 م مشي) + تهدئة 10 د إطالة ثابتة.',
          evening: 'قوة انفجارية (4 مجموعات × 8 تكرارات: Clean & Press، Box Jumps، Plank Variations) + تدريب كيك بوكسينغ (5 جولات كيس ثقيل 3 د) + سبارنج مشروط خفيف (جولتان).'
        },
        {
          name: 'اليوم الثاني',
          focus: 'القوة الخاصة والتكتيك الهجومي',
          morning: 'إحماء (10 د قفز حبل + إطالة مفصلية) + ركض مائل تلة أو درج (10 جولات × 30 ثانية + 90 ثانية مشي نزولاً) + تعافي حركي (15 د).',
          evening: 'تدريب وسائد (6 جولات × 3 د مع كومبو سريع وركلات منخفضة) + تكتيك ودفاع (4 جولات دفاع وهجوم مضاد) + إعداد بدني (3 مجموعات ضغط هندوسي وسحب حتى الإجهاد).'
        },
        {
          name: 'اليوم الثالث',
          focus: 'التحمل اللاهوائي والسرعة',
          morning: 'إحماء (10 د ركض خفيف) + تمرين Fartlek (30 دقيقة: دقيقة أقصى سرعة، دقيقة هرولة، دقيقة مشي) + تهدئة وتنفس (10 د).',
          evening: 'كيس سريع وثقيل (6 جولات × 3 د كثافة عالية) + تمارين جذع ووسط (15 د بطن مكثفة: Russian Twists, Leg Raises, Medicine Ball Slams) + مصارعة كلينش (3 جولات).'
        },
        {
          name: 'اليوم الرابع',
          focus: 'قوة تحمل الساقين والسبارنج',
          morning: 'إحماء (10 د إطالات ديناميكية) + جري طويل متدرج (8 كم مع تسريع في الكيلو الأخير) + قفز حبل سريع (3 مجموعات × 5 د).',
          evening: 'سبارنج متكامل (6 إلى 8 جولات × 3 د مع تغيير الزملاء) + تقوية ساقين (4 مجموعات × 12 تكرار: Barbell Squats + Romanian Deadlifts) + تهدئة (15 د).'
        },
        {
          name: 'اليوم الخامس',
          focus: 'الانفجارية والتاكتيك المتقدم',
          morning: 'إحماء (10 د ركض وتنشيط) + سبرنتات 100 متر (8 جولات مع راحة كاملة مشي دقيقتين) + توازن ورشاقة سلم (15 د).',
          evening: 'تدريب وسائد (5 جولات مكثفة ثنائيات وتركيبات) + ضربات الجسم والكيس الثقيل (4 جولات) + ضغط وظهر (4 مجموعات قوة متفجرة بوزن الجسم).'
        },
        {
          name: 'اليوم السادس',
          focus: 'التحمل الذهني والتجميعي',
          morning: 'تحمل عام (60 دقيقة مدمجة: 20 د مشي على منحدر، 20 د جري متوسط، 20 د هرولة خفيفة).',
          evening: 'ظلال Shadow Boxing (4 جولات أمام المرآة تصحيح أخطاء) + إطالة عميقة يوغا وموبيلتي (30 د).'
        },
        {
          name: 'اليوم السابع',
          focus: 'راحة تامة واستشفاء (Active Recovery)',
          morning: 'راحة تامة من التدريبات الشاقة واستشفاء اختياري.',
          evening: 'مشي خفيف جداً (20-30 د)، تدليك، حمام ثلج أو سونا، وترطيب وتغذية.'
        }
      ]
    },
    {
      weekTitle: 'الأسبوع الثاني',
      days: [
        {
          name: 'اليوم الأول',
          focus: 'التحمل الهوائي الفائق والقوة الانفجارية',
          morning: 'إحماء (15 د جري خفيف + إطالة ديناميكية) + جري HIIT (8 جولات × 400 م بأقصى طاقة 95% + 200 م مشي سريع جداً) + تهدئة (10 د).',
          evening: 'تمارين بدنية (5 مجموعات × 6 تكرارات Power Cleans، Box Jumps، ثبات جذع) + كيس ثقيل (6 جولات × 3 د براحة 45 ثانية) + سبارنج بحدة عالية (3 جولات).'
        },
        {
          name: 'اليوم الثاني',
          focus: 'القوة العضلية والتحمل العضلي',
          morning: 'تحمل قوة ميدانية: صعود مرتفعات أو درج بشدة قصيرة وسريعة (30 د متواصلة).',
          evening: 'تدريب تقني كيك بوكسينغ (تركيز على رد الفعل والدفاع والهجوم المضاد 45 د) + تحمل موضعى (بلانك، ضغط انفجاري، Battle Ropes لمدة 20 د بدون توقف).'
        },
        {
          name: 'اليوم الثالث',
          focus: 'الاستشفاء النشط',
          morning: 'جلسة إطالات عميقة وتدليك رياضي للعضلات.',
          evening: 'حمام ثلج لتحفيز الاستشفاء السريع للجسم وتعافي الأنسجة.'
        },
        {
          name: 'اليوم الرابع',
          focus: 'التحمل القلبي التنفسي والقوة المهارية',
          morning: 'جري مسافة 10 كيلومترات بنسق ثابت ومتقدم.',
          evening: 'ملاكمة وتمرير وسائد مع مدرب (5 جولات بحد أقصى من السرعة والقوة) + تقوية ساقين وتحمل ركلات (Leg Conditioning).'
        },
        {
          name: 'اليوم الخامس',
          focus: 'القوة الانفجارية والرشاقة العالية',
          morning: 'تدريبات رشاقة وسرعة باستخدام السلالم الرياضية وقفز الحبل السريع (30 د).',
          evening: 'جولات سبارنج حقيقية بقوة تنافسية (4 جولات × 3 د) + تدريبات قوة تحملية للبطن والجذع.'
        },
        {
          name: 'اليوم السادس',
          focus: 'المهارات التكتيكية المتقدمة',
          morning: 'جري فترات طويلة: 6 كيلومترات مع تغيير السرعة كل كيلومتر.',
          evening: 'محاكاة للنزال الكامل: جولات متتالية بدون راحة تحاكي سيناريو البطولة الحقيقي (5 جولات متواصلة).'
        },
        {
          name: 'اليوم السابع',
          focus: 'الاستعداد الذهني والراحة التامة',
          morning: 'استراحة كاملة لإتاحة المجال للجسم لإعادة بناء الأنسجة.',
          evening: 'راحة تامة استعداداً للأسبوع التالي وتصفية الذهن.'
        }
      ]
    },
    {
      weekTitle: 'الأسبوع الثالث',
      days: [
        {
          name: 'اليوم الأول',
          focus: 'الكارديو المتقطع والتحمل',
          morning: 'جري متقطع (8 كم: 4 دقائق سرعة، دقيقتان هرولة) + 20 دقيقة إطالات و30 دقيقة Core.',
          evening: '5 جولات كيس ملاكمة (سرعة مع تغيير زوايا) + 4 جولات سبارينغ تقني + 30 تمرين Push-up.'
        },
        {
          name: 'اليوم الثاني',
          focus: 'دائرة الكارديو وبناء المقاومة',
          morning: 'دائرة كارديو بدون أوزان (بوربيز، وثبات، وتمارين حبال).',
          evening: '6 جولات Pad Work + 20 دقيقة Shadowboxing + 100 تمرين Hanging Leg Raises.'
        },
        {
          name: 'اليوم الثالث',
          focus: 'السباحة والقتال المباشر',
          morning: '45 دقيقة سباحة مكثفة وعميقة.',
          evening: '5 جولات سبارينغ حي + 3 جولات Thai pad + 50 تمرين Sit-up.'
        },
        {
          name: 'اليوم الرابع',
          focus: 'الإيقاع الثابت والتقنيك',
          morning: '6 كم جري إيقاعي ثابت ومنتظم.',
          evening: '6 جولات كيس ملاكمة + 4 جولات سبارينغ تقني + 30 تمرين Pull-up.'
        },
        {
          name: 'اليوم الخامس',
          focus: 'الاستشفاء والكلينش',
          morning: '50 دقيقة يوغا واستشفاء عضلي.',
          evening: '4 جولات Pad work + 4 جولات Clinch + 100 تمرين Hanging Leg Raises.'
        },
        {
          name: 'اليوم السادس',
          focus: 'السبرنت المحاكي للنزال',
          morning: '10 جولات تكرار Sprint عالي الشدة.',
          evening: '6 جولات سبارينغ محاكاة + 4 جولات Speed bag.'
        },
        {
          name: 'اليوم السابع',
          focus: 'الراحة التامة والاستشفاء',
          morning: 'راحة تامة تامة.',
          evening: 'استرخاء ونوم مبكر.'
        }
      ]
    },
    {
      weekTitle: 'الأسبوع الرابع',
      days: [
        {
          name: 'اليوم الأول',
          focus: 'السبرنتات والقوة الانفجارية القصوى',
          morning: 'إحماء (15 د جري + إطالات) + 10 جولات سبرنت 100 م بأقصى سرعة (100% طاقة) + قوة انفجارية (Box Jumps، Thrusters، Plyometric Push-ups، Pull-ups).',
          evening: 'حبل (15 د) + كيس ثقيل (6 جولات × 3 د) + سبارنج تقني (4 جولات × 3 د) + 100 تمرين Hanging Leg Raises.'
        },
        {
          name: 'اليوم الثاني',
          focus: 'التحمل القلبي والتكرار الفائق',
          morning: 'إحماء + Intervals (6 جولات × 800 م بسريعة 90% + 200 م مشي) + دائرة تحمل عضلي (Burpees، Kettlebell Swings، Jump Squats، بلانك بأوزان).',
          evening: 'عمل وسائد Pad Work مع مدرب (6 جولات × 3 د) + كلينش والاتحام (20 د) + Shadowboxing (3 جولات).'
        },
        {
          name: 'اليوم الثالث',
          focus: 'الاستشفاء النشط والسيطرة',
          morning: '45 دقيقة سباحة خفيفة أو إطالات عميقة وتدليك للعضلات.',
          evening: '30 دقيقة Shadowboxing خفيف مع تركيز ذهني وحمام ثلج.'
        },
        {
          name: 'اليوم الرابع',
          focus: 'سبرنتات التلال والقوة الشديدة',
          morning: 'سبرنتات مرتفعات/تلال (12 جولة صعود سريعة لمدة 30 ثانية) + قوة مركبة (Deadlift، Battle Ropes، بطن بالوزن).',
          evening: 'كيس ثقيل (5 جولات × 3 د ركلات سفلية Low Kicks) + سبارنج محاكاة للنزال (5 جولات × 3 د بحدة قتالية).'
        },
        {
          name: 'اليوم الخامس',
          focus: 'الرشاقة وسرعة الاستجابة',
          morning: 'تدريبات سلم الرشاقة وسبرنتات التغيير المفاجئ (40 د) + وزان الجسم التكرارية (100 ضغط، 50 عقلة، 100 سكوات).',
          evening: 'Pad Work وسرعة رد الفعل (5 جولات × 3 د) + تمريرات الكيس الخفيف Speed Bag (30 د).'
        },
        {
          name: 'اليوم السادس',
          focus: 'الاختبار القتالي الشامل',
          morning: 'جري مسافة 8 كم إيقاعي مع سبرنت 100 متر بنهاية كل كيلو.',
          evening: 'محاكاة البطولة: 5 جولات سبارينغ كاملة بقوانين البطولة الرسمية بدون تساهل.'
        },
        {
          name: 'اليوم السابع',
          focus: 'راحة تامة واستشفاء للأنسجة',
          morning: 'استراحة كاملة لإعادة بناء الأنسجة.',
          evening: 'استرخاء ت تام استعداداً للأسبوع التالي.'
        }
      ]
    },
    {
      weekTitle: 'الأسبوع الخامس',
      days: [
        {
          name: 'اليوم الأول',
          focus: 'التحمل الهوائي المتقطع والمهارة',
          morning: 'إحماء (15 د جري + إطالات) + جري متقطع Intervals (6 كم إجمالي: 4 د سريع + 2 د هرولة) + 100 تمرين Hanging Leg Raises.',
          evening: 'حبل (15 د) + كيس ثقيل (5 جولات × 3 د) + ملاكمة تكتيكية Shadowboxing (4 جولات) + 50 ضغط و50 عقلة.'
        },
        {
          name: 'اليوم الثاني',
          focus: 'الانفجارية والتحمل الخاص',
          morning: 'بلايومتريك (45 د مكثفة: Box Jumps، Burpees، Broad Jumps) + تهدئة وإطالات (15 د).',
          evening: 'عمل الوسائد (4 جولات × 3 د) + كلينش (4 جولات) + Shadowboxing (20 د) + ثبات جذع (15 د).'
        },
        {
          name: 'اليوم الثالث',
          focus: 'الاستشفاء النشط والسباحة',
          morning: '40 دقيقة سباحة مكثفة وبوتيرة ثابتة وعالية.',
          evening: 'جلسة إطالات طويلة (45 دقيقة) أو تدليك رياضي متخصص.'
        },
        {
          name: 'اليوم الرابع',
          focus: 'محاكاة الإيقاع والضغط',
          morning: 'جري إيقاعي Tempo Run (6 كم جري متواصل بسرعة تحاكي إيقاع النزال).',
          evening: 'كيس ثقيل للقوة (4 جولات × 3 د) + سبارنج دفاعي (4 جولات × 3 د) + 60 ضغط و60 عقلة.'
        },
        {
          name: 'اليوم الخامس',
          focus: 'المرونة ورد الفعل',
          morning: 'يوغا ومرونة (50 دقيقة تركيز على إطالات الحوض والظهر).',
          evening: 'عمل الوسائد للاستجابة (6 جولات × 3 د) + سبارنج مواقف Scenario Sparring (4 جولات) + سيركت جذع بدون توقف (20 د).'
        },
        {
          name: 'اليوم السادس',
          focus: 'التحمل القلبي الشاق والسبارينغ',
          morning: 'سبرنتات التلال Hill Sprints (10 تكرارات صعود تلال بأقصى سرعة).',
          evening: 'سبارينغ مكثف Hard Sparring (6 جولات × 3 د بحدة عالية) + Speed Bag (3 جولات) + 100 تمرين Hanging Leg Raises.'
        },
        {
          name: 'اليوم السابع',
          focus: 'الراحة التامة والتخيل الذهني',
          morning: 'راحة سلبية وتخيل ذهني Visualization.',
          evening: 'تمدد خفيف جداً واستعداد نفسي.'
        }
      ]
    },
    {
      weekTitle: 'الأسبوع السادس',
      days: [
        { name: 'اليوم الأول', focus: 'إيقاع القتال والشحذ', morning: 'جري خفيف وتهيئة عامة.', evening: 'ميتات وسلاسل سريعة وتكنيك عالي.' },
        { name: 'اليوم الثاني', focus: 'قوة قصيرة ومدى', morning: 'قفز ورمي خفيف للبلايومتريك.', evening: 'مهارات الرد السريع والدفاع.' },
        { name: 'اليوم الثالث', focus: 'حركة وتكتيك', morning: 'موبيلتي ومرونة مفاصل.', evening: 'محاكاة نزال بجهد متوسط.' },
        { name: 'اليوم الرابع', focus: 'تنشيط خفيف', morning: 'حركة مفاصل سريعة.', evening: 'مراجعة كلمات الركن والتعليمات.' },
        { name: 'اليوم الخامس', focus: 'طاقة وسرعة', morning: 'سبرنتات قصيرة ومدروسة.', evening: 'ميتات خفيفة وموجهة.' },
        { name: 'اليوم السادس', focus: 'استعداد ذهني', morning: 'مشي هادئ في الطبيعة.', evening: 'تجهيز الحقيبة الجاهزية النفسية والجسدية.' },
        { name: 'اليوم السابع', focus: 'الراحة الكبرى', morning: 'استرخاء تام وتغذية سليمة.', evening: 'نوم عميق ومريح.' }
      ]
    },
    {
      weekTitle: 'أسبوع النزال',
      days: [
        { name: 'اليوم الأول', focus: 'تنشيط خفيف', morning: 'إحماء وموبيلتي.', evening: 'مراجعة الخطة والتعليمات النهائية.' },
        { name: 'اليوم الثاني', focus: 'حركة ونشاط', morning: 'مشي هادئ.', evening: 'شادو خفيف جداً لفك العضلات.' },
        { name: 'اليوم الثالث', focus: 'استجابة', morning: 'تنشيط عضلات خفيف.', evening: 'تركيز وتهدئة تامة.' },
        { name: 'اليوم الرابع', focus: 'راحة تامة', morning: 'استرخاء تام.', evening: 'نوم مبكر واستعداد.' },
        { name: 'اليوم الخامس', focus: 'تحضير نهائي', morning: 'حركة بسيطة جداً.', evening: 'مراجعة المواعيد والتعليمات.' },
        { name: 'اليوم السادس', focus: 'يوم النزال الكبير 🏆', morning: 'إحماء النزال والتنشيط السريع.', evening: 'خوض النزال وتحقيق النصر المنشود!' },
        { name: 'اليوم السابع', focus: 'التعافي والاحتفال', morning: 'راحة واستشفاء شامل.', evening: 'الاحتفال بالنجاح والتعافي.' }
      ]
    }
  ];

  if (!isAuthenticated) {
    return (
      <div style={{ backgroundColor: '#0a0a0a', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', direction: 'rtl' }}>
        <div style={{ backgroundColor: '#141414', border: '2.5px solid #e50914', borderRadius: '12px', padding: '35px 25px', maxWidth: '450px', width: '100%', textAlign: 'center', boxShadow: '0 8px 25px rgba(229, 9, 20, 0.3)' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🥊</div>
          <h2 style={{ color: '#ffffff', fontSize: '24px', margin: '0 0 10px 0' }}>قسم النخبة - TEAM TK KHALAF</h2>
          <p style={{ color: '#cccccc', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px' }}>هذه الصفحة مخصصة للمقاتلين المتقدمين. أدخل كلمة المرور لعرض البرنامج التدريبي.</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #333', backgroundColor: '#1f1f1f', color: '#fff', fontSize: '15px', marginBottom: '15px', boxSizing: 'border-box', textAlign: 'center', outline: 'none' }}
            />
            <button
              type="submit"
              style={{ width: '100%', padding: '12px', backgroundColor: '#e50914', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(229, 9, 20, 0.4)' }}
            >
              دخول النخبة 🔓
            </button>
          </form>
          {error && <p style={{ color: '#ff4d4d', fontSize: '13px', marginTop: '12px' }}>{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', padding: '30px 15px', minHeight: '100vh', direction: 'rtl', fontFamily: 'sans-serif' }}>
      
      {/* الهيدر وزر الخروج */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto 25px auto', borderBottom: '1px solid #222', paddingBottom: '15px' }}>
        <h2 style={{ margin: 0, color: '#e50914', fontSize: '22px' }}>TEAM TK KHALAF - ELITE FIGHTERS 🥊</h2>
        <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '6px', cursor: 'pointer' }}>
          قفل الصفحة 🔒
        </button>
      </div>

      <header style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h1 style={{ fontSize: '28px', color: '#fff', marginBottom: '10px' }}>برنامج إعداد وتجهيز المقاتلين المحترفين</h1>
        <p style={{ color: '#aaa', fontSize: '15px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          "قَدرُ الرَّجُلِ عَلى قَدرِ هِمَّتِهِ" — جدول معسكر النزال الشامل والمنظم حسب الأسابيع والأيام بكل احترافية بدون تواريخ أو أسماء.
        </p>
      </header>

      {/* عرض البرنامج الأسابيع والأيام */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '30px' }}>
        {eliteProgramWeeks.map((week, wIndex) => (
          <div key={wIndex} style={{ backgroundColor: '#121212', border: '2px solid #e50914', borderRadius: '12px', padding: '25px', boxShadow: '0 6px 20px rgba(229, 9, 20, 0.2)' }}>
            
            <h2 style={{ color: '#e50914', marginTop: 0, marginBottom: '20px', fontSize: '22px', borderBottom: '1px solid #222', paddingBottom: '10px', textAlign: 'center' }}>
              🔥 {week.weekTitle} 🔥
            </h2>

            <div style={{ display: 'grid', gap: '15px' }}>
              {week.days.map((day, dIndex) => (
                <div key={dIndex} style={{ backgroundColor: '#1a1a1a', border: '1px solid #282828', borderRight: '5px solid #e50914', borderRadius: '8px', padding: '15px' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <h3 style={{ color: '#fff', margin: 0, fontSize: '17px' }}>{day.name}</h3>
                    <span style={{ backgroundColor: '#262626', color: '#ffb703', padding: '3px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>
                      التركيز: {day.focus}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                    <div style={{ backgroundColor: '#141414', padding: '10px 12px', borderRadius: '6px', borderRight: '3px solid #e50914' }}>
                      <h4 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '14px' }}>🌅 الفترة الصباحية:</h4>
                      <p style={{ color: '#ccc', margin: 0, fontSize: '13px', lineHeight: '1.5' }}>{day.morning}</p>
                    </div>

                    <div style={{ backgroundColor: '#141414', padding: '10px 12px', borderRadius: '6px', borderRight: '3px solid #b20710' }}>
                      <h4 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '14px' }}>🌆 الفترة المسائية:</h4>
                      <p style={{ color: '#ccc', margin: 0, fontSize: '13px', lineHeight: '1.5' }}>{day.evening}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}

        {/* قسم التغذية والدعم */}
        <div style={{ backgroundColor: '#141414', border: '1px solid #262626', borderRight: '6px solid #25D366', borderRadius: '10px', padding: '25px', textAlign: 'center', marginTop: '10px' }}>
          <h3 style={{ color: '#25D366', marginTop: 0, fontSize: '20px' }}>الدعم الغذائي وإدارة الوزن للنزال</h3>
          <p style={{ color: '#ccc', marginBottom: '18px', fontSize: '14px' }}>تنسيق الخطة الغذائية وتكتيك الوزن بالتعاون مع أخصائية التغذية.</p>
          <a
            href="https://wa.me/96176994394"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#25D366', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}
          >
            تواصل مع أخصائية التغذية كوثر سعادي 💬
          </a>
        </div>
      </div>
    </div>
  );
}

export default EliteFighter;