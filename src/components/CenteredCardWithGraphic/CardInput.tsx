import React, { useState } from 'react';

export interface ICardInputProps {
  label: string;
  placeholder: string;
  buttonLabel: string;
}

const CardInput = ({
  data: { label, placeholder, buttonLabel },
}: {
  data: ICardInputProps;
}) => {
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <form
      action="#"
      className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
      method="POST"
      name="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="user-submitted-email" value={emailAddress} />
      <div className="flex-1 min-w-0">
        <label htmlFor="cta-email" className="sr-only">
          {label}
        </label>
        <input
          id="cta-email"
          type="email"
          className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          placeholder={placeholder}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-3">
        <button
          type="submit"
          className="block w-full px-5 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
};

export default CardInput;
