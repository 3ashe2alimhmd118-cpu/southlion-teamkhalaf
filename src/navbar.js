import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">South Lions</div>
      <ul className="nav-links">
        <li><a href="#home">الرئيسية</a></li>
        <li><a href="#about">عن الأكاديمية</a></li>
        <li><a href="#programs">برامجنا</a></li>
        <li><a href="#contact">اتصل بنا</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;