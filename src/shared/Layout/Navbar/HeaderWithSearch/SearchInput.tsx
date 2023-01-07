import React, { ReactElement, useState } from 'react';

import { SearchIcon } from '@heroicons/react/outline';

export default function SearchInput({
  keyword,
}: {
  keyword: string | string[];
}): ReactElement {
  const [currentKeyword, setCurrentKeyword] = useState(keyword);

  function handleKeywordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentKeyword(event.target.value);
  }

  return (
    <div className="relative z-0 flex items-center justify-center flex-1 px-2 sm:absolute sm:inset-0">
      <div className="w-full sm:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            value={currentKeyword}
            onChange={handleKeywordChange}
            id="search"
            name="search"
            className="block w-full py-2 pl-10 pr-3 text-sm text-gray-400 placeholder-gray-400 bg-gray-700 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
    </div>
  );
}
