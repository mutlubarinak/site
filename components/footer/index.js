import React from 'react';
import Logo from './logo';

export default () => (
  <footer className="footer" id="footer">
    <div className="logo-container">
      <Logo />
      <p>
        Sokak hayvanlarına gıda yardımı yapmak isteyen bağışcıları buluşturuyoruz
      </p>
      <p>©Mutlu Barınak  2020. All rights reserved</p>
    </div>
    <div className="footer__links">
      <ul>
        <p>Mutlu Barınak</p>
        <li>
          <a href="/#footer">Hakkımızda</a>
        </li>
        <li>
          <a href="/#quotes">Yorumlar</a>
        </li>
        <li>
          <a href="/#services">Amacımız</a>
        </li>
        <li>
          <a href="/#content">Neden mutlu barınak</a>
        </li>
      </ul>
      <ul>
        <p>Bölgeler</p>
        <li>
          <a href="/">Mutlu Barınak izmir</a>
        </li>
        <li>
          <a href="/">Mutlu Barınak istanbul</a>
        </li>
        <li>
          <a href="/">Mutlu Barınak muğla</a>
        </li>
        <li>
          <a href="/">Mutlu Barınak ankara</a>
        </li>
      </ul>
      <ul>
        <p>Yardım</p>
        <li>
          <a href="/">Yardım Merkezi</a>
        </li>
        <li>
          <a href="/">İletişim & destek </a>
        </li>
        <li>
          <a href="/">Instructions</a>
        </li>
        <li>
          <a href="/">Çalışmalar</a>
        </li>
      </ul>
    </div>
  </footer>

);
