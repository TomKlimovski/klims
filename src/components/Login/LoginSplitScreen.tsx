import React from 'react';

import Link from 'next/link';

import LoginForm from './LoginForm';
import SocialLogins from './SocialLogins';

const LoginSplitScreen = () => {
  const RenderHeaderWithLogo = () => (
    <div>
      <Link href="/" passHref>

        <img
          className="w-auto h-12"
          src="images/epicarc-logo-original.svg"
          alt="Epicarc"
        />

      </Link>
      <h2 className="mt-6 text-3xl font-bold">Sign in to your account</h2>
    </div>
  );

  const RenderContinueDivider = () => (
    <div className="relative mt-6">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 text-gray-500 bg-white">Or continue with</span>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <RenderHeaderWithLogo />
          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium ">Sign in with</p>
                <SocialLogins />
              </div>
              <RenderContinueDivider />
            </div>
            <div className="mt-6">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1988&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginSplitScreen;
