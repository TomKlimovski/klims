import React from 'react';

import { ShoppingCartIcon } from '@heroicons/react/solid';

import { IResult } from 'shared/models/Result.model';

import BookMarkHeartIcon from './BookmarkHeartIcon';
import ResultAuthor from './ResultAuthor';
import StarRating from './StarRating';

interface IResultPricingPreview {
  result: IResult;
}

const ResultPricingPreview = ({ result }: IResultPricingPreview) => {
  return (
    <>
      <div className="self-end hidden md:block">
        <div className="flex gap-2 place-items-center">
          <BookMarkHeartIcon
            isBookmarked={result.isBookmarked}
            isLiked={result.isLiked}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 place-items-center">
        <span className="text-lg font-medium">${result.price}</span>
        <div className="flex">
          <StarRating rating={result.starRating} />
        </div>
        <p className="text-xs text-gray-500">
          v{result.version} Published {result.publishedDate}{' '}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full mt-6 mb-2 md:w-auto md:mt-0 md:place-items-center">
        <div className="flex items-center md:hidden">
          <ResultAuthor author={result.author} />
        </div>
        <div className="relative">
          <ShoppingCartIcon className="absolute w-6 h-6 text-gray-500 cursor-pointer -left-10 top-2" />
          <button
            type="button"
            className="px-4 py-1 text-white bg-indigo-600 rounded-lg btn-with-ring hover:bg-indigo-700"
          >
            Preview
          </button>
        </div>
      </div>
    </>
  );
};

export default ResultPricingPreview;
