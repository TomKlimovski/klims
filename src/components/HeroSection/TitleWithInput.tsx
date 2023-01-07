import React, { ReactElement, useState } from 'react';

import { ChevronRightIcon } from '@heroicons/react/solid';
import Router from 'next/router';

export interface ITitleWithInputProps {
  titleHelper: {
    mainText: string;
    actionText: string;
    url: string;
  };
  heading: {
    leading: string;
    trailing: string;
  };
  subtitle: {
    firstLine: string;
    leadingBoldWord: string;
    secondLine: string;
  };
  input: {
    accessibilityLabel: string;
    placeholder: string;
    buttonText: string;
  };
}

function TitleWithInput({
  copy: { titleHelper, heading, subtitle, input },
}: {
  copy: ITitleWithInputProps;
}): ReactElement {
  const RenderTitleHelper = () => (
    <a
      href={titleHelper.url}
      className="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
    >
      <span className="px-3 py-0.5 text-white text-xs font-medium leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
        {titleHelper.mainText}
      </span>
      <span className="ml-4 text-sm">{titleHelper.actionText}</span>
      <ChevronRightIcon
        className="w-5 h-5 ml-2 text-gray-500"
        aria-hidden="true"
      />
    </a>
  );

  const RenderMainHeading = () => (
    <h1 className="mt-4 tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
      <span className="block">{heading.leading}</span>
      <span className="block text-indigo-500">{heading.trailing}</span>
    </h1>
  );

  const RenderSubtitle = () => (
    <p className="mt-5 text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
      {subtitle.firstLine}
      <br />
      <br />
      <strong>{subtitle.leadingBoldWord}</strong> {subtitle.secondLine}
    </p>
  );

  const RenderInput = () => {
    const [keyword, setKeyword] = useState('');

    async function handleSubmit(event: any) {
      event.preventDefault();
      Router.push({
        pathname: '/search',
        query: { query: keyword, page: 1 },
      });
    }

    function handleKeywordChange(event: any) {
      setKeyword(event.target.value);
    }

    return (
      <form onSubmit={handleSubmit} className="sm:max-w-xl sm:mx-auto lg:mx-0">
        <div className="sm:flex">
          <div className="flex-1 min-w-0">
            <label htmlFor="text" className="sr-only">
              {input.accessibilityLabel}
            </label>
            <input
              value={keyword}
              onChange={handleKeywordChange}
              id="text"
              type="text"
              placeholder={input.placeholder}
              className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="block w-full px-4 py-3 text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
            >
              {input.buttonText}
            </button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <RenderTitleHelper />
      <RenderMainHeading />
      <RenderSubtitle />
      <div className="mt-10 sm:mt-12">
        <RenderInput />
      </div>
    </>
  );
}

export default TitleWithInput;
