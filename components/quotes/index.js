/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useState } from 'react';

import image from '../../public/assets/user.png';

const quotes = [
  {
    client: 'can ',
    company: 'Developer',
    quote: 'Mutlu barınak bağış yapmak isteyen kullanıcıları bir topluluk haline getiren harika bir çalışma ',
    image,
  },

];

const Quotes = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="quotes-container" id="quotes">
      <div className="quotes">
        <h2>Yorumlar</h2>
        <div className="border" />
        <div className="quote">
          <div className="quote__author">
            <img className="user" src={quotes[current].image} alt="quote" />
            <style jsx>
              {`
        .user {
          width: 146px;
      }
      `}
            </style>

            <div className="quote__author-texts">
              <p>{quotes[current].client}</p>
              <p>{quotes[current].company}</p>
            </div>
          </div>
          <div className="quote__text-box">
            <p>{quotes[current].quote}</p>
          </div>
        </div>
      </div>
      <div className="circles">
        {quotes.map((_quote, index) => (
          <span
            role="button"
            key={`quote + ${index + 1}`}
            onClick={() => setCurrent(index)}
            onKeyDown={() => setCurrent(index)}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  );
};

export default Quotes;
