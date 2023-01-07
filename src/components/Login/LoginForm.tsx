import React, { ReactElement, useRef, useState } from 'react';

import Link from 'next/link';
import Router from 'next/router';

function LoginForm(): ReactElement {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(false);

  const sampleLogin = {
    email: 'admin@epicarc.com',
    password: '1234',
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const validEmail = emailRef.current.value === sampleLogin.email;
      const validPassword = passwordRef.current.value === sampleLogin.password;

      const isValidCredentials = validEmail && validPassword;
      if (isValidCredentials) {
        Router.push('/');
        setInputError(false);
      }

      if (!isValidCredentials) {
        setInputError(true);
      }
    }
  };

  const RenderSubmission = () => (
    <>
      {inputError && (
        <p className="text-sm text-red-500">
          Wrong email or password. <br />
          Try again or click ‘Forgot password’ to reset it.
        </p>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="block ml-2 text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link
            href="/forgot-password"
            passHref
            className="font-medium text-indigo-600 hover:text-indigo-500">
            
              Forgot your password?
            
          </Link>
        </div>
      </div>

      <div>
        <button type="submit" className="btn-submit">
          Sign in
        </button>
      </div>
    </>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            ref={emailRef}
            autoComplete="email"
            required
            className="form-input"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            ref={passwordRef}
            autoComplete="current-password"
            required
            className="form-input"
          />
        </div>
      </div>
      <RenderSubmission />
    </form>
  );
}

export default LoginForm;
