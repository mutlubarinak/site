import React from 'react';

export default () => (
  <section className="header" id="hero">
    <div className="header__text-box">
      <h1> Sokak hayvanlarına gıda yardımı yapmak isteyen bağışcıları buluşturuyoruz</h1>
      <p />
      <button type="button" className="btn btn-rounded-big">
        Çok Yakında
      </button>
    </div>
    <div className="header__draw">
      <img
        src="./assets/29.png"
        alt="illustration"
      />
      <style jsx>
        {`
        .header__draw img {
          width: 390px;
          margin-left: 146px;
      }
      `}
      </style>
    </div>
  </section>
);
