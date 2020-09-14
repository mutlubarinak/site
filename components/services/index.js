import React from 'react';

export default () => (
  <section className="services" id="services">
    <article className="services__heading">
      <h2>Mutlu Barınak Nedir ?</h2>
      <div className="border" />
      <p>
        Mutlu Barınak sokak hayvanlarına yardım etmek isteyen bağışcıları buluşturan bir topluluk projesidir
      </p>
    </article>
    <div className="services__cards">
      <div className="services__card">
        <img className="barinak" src="./assets/barinak.png" alt="search doctor" />

        <style jsx>
          {`
        .barinak {
          width:90px;
      }
      `}
        </style>
        <h4>İstediğin barınağa bağış yapabilirsin</h4>
        <p>İstediğiniz barınak ile iletişim halinde olabilirsiniz</p>
      </div>
      <div className="services__card">
        <img className="gezi" src="./assets/gezi.png" alt="online pharmacy" />
        <style jsx>
          {`
        .gezi {
          width:90px;
      }
      `}
        </style>
        <h4>Aylık Gezi organizasyonları</h4>
        <p>Her ay düzenli olarak belirlenen gezi tarihlerinde topluluklar ile buluşabilirsiniz</p>
      </div>
      <div className="services__card">
        <img className="temiz" src="./assets/temiz.png" alt="consultation" />
        <style jsx>
          {`
        .temiz {
          width:90px;
      }
      `}
        </style>
        <h4>Barınak ekipmanları alabilirsiniz</h4>
        <p>Bildiğiniz üzere barınak ve temizlik öneminde temizlik malzemeleri büyük rol oynuyor bağışınızı temizlik malzemesi olarak da yapabilirsiniz</p>

      </div>
    </div>
  </section>
);
