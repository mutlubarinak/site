import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const articles = [
  {
    title: 'Nasıl? bağış yapabilirim',
    content: 'dakikalar içerisinde nasıl bağış yapabileceğinizi öğrenin',
  },
  {
    title: 'Bağışımı nasıl? görürüm',
    content: 'bağışınızın nasıl bir aşamadan geçtiğini nasıl görebilirsiniz öğrenin',
  },
  {
    title: 'Gezi topluluklarına nasıl? katılırım',
    content: 'her ayın belirli günleri bölgelerde ki topluluklarımız ile nasıl iletişim halinde olabileceğinizi görün ',
  },
];

export default () => (
  <section className="blog" id="blog">
    <div className="blog__heading">
      <h2>Bilgi Merkezi </h2>
      <div className="border" />
    </div>
    <div className="blog__cards">
      {articles.map(({ title, content }) => (
        <article className="blog__card">
          <img src="./assets/blog.png" alt="blog post" />
          <h4>{title}</h4>
          <p>{content}</p>
          <Link href="/">
            <a href="/">
              Öğren
              {' '}
              <FiArrowRight style={{ verticalAlign: 'middle' }} />
            </a>
          </Link>
        </article>
      ))}
    </div>
    <button type="button" href="" className="btn btn-outline-big">
      Tümüm görüntüle
    </button>

  </section>
);
