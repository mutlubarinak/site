import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Quotes, Hero, Blog, Navbar, Footer,
} from '../components';

export default () => (
  <div>
    <Head>
      <title>Mutlu Barınak </title>
    </Head>
    <Navbar />
    <Hero />
    <Services />
    <Contents />
    <Quotes />
    <Blog />
    <Footer />
  </div>
);
