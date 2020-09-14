import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

export default () => (
  <section className="contents" id="contents">
    <article className="providers">
      <div className="providers__draw">
        <img
          src="./assets/89.png"
          alt="illustration"
        />
      </div>
      <div className="providers__text-box">
        <h1>Sevgini daima paylaş</h1>
        <div className="border" />
        <p>
          uzakta olsan bile mutlu barınak web sayfası üzerinden bağış yapabileceğin bir barınak bulabilirsin
        </p>
        <button type="button" className="btn btn-outline-big">
          Detaylar
        </button>
      </div>
    </article>
    <div className="providers">
      <div className="providers__text-box">
        <h1>
          Güvenli bağış sistemi !
        </h1>
        <div className="border" />
        <p>
          Bağış sistemimiz parasal olarak değil satın alıcağınız mamalar ve ekipmanlar üzerinden yapılmaktadır böylece daha güvenli bir bağış yöntemi olmaktadır
        </p>
        <button type="button" className="btn btn-outline-big">
          Detaylar
          <FiArrowDown style={{ verticalAlign: 'middle', marginLeft: '5px', marginTop: '-2px' }} />
        </button>
      </div>
      <div className="providers__draw">
        <img
          src="./assets/donate.png"
          alt="illustration"
        />
      </div>
    </div>
  </section>
);
