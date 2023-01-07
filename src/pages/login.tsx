import React from 'react';

import Head from 'next/head';

import LoginSplitScreen from 'components/Login/LoginSplitScreen';

const Login = () => (
  <>
    <Head>
      <title>Log in | Epicarc</title>
      <meta name="description" content="home | epicarc.com.au" />
    </Head>
    <LoginSplitScreen />
  </>
);

export default Login;
