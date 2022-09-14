import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navigation from './navigation';
import Footer from './footer';

type Props = {
  children: ReactNode;
};

const NavContainer = (props: Props) => {
  return (
    <div>
      <Head>{''}</Head>

      <Navigation />

      <div>{props.children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NavContainer;
