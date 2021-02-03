import React from 'react';

export default function Header() {
  return (
    <header class="header">
      <ul className="contacts">
        <li className="contacts__item">Почта</li>
        <li className="contacts__item">Телеграм</li>
        <li className="contacts__item">Head Hunter</li>
      </ul>
      <div className="popup-button"></div>
    </header>
  )
}
