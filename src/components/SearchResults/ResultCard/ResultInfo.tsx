import React, { ReactElement } from 'react';

import { IResult } from 'shared/models/Result.model';

import BookMarkHeartIcon from './BookmarkHeartIcon';
import ResultAuthor from './ResultAuthor';

interface IResultInfoProps {
  result: IResult;
}

function ResultInfo({ result }: IResultInfoProps): ReactElement {
  const RenderTags = () =>
    result.tags &&
    result.tags.map((tag) => (
      <a
        key={tag.id}
        href={tag.href}
        className="px-2 border-2 border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-indigo-50"
      >
        {tag.name}
      </a>
    ));

  return (
    <>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="flex gap-2 text-sm font-medium text-indigo-600">
            {RenderTags()}
          </p>
          <div className="block md:hidden">
            <div className="flex gap-2 place-items-center">
              <BookMarkHeartIcon
                isBookmarked={result.isBookmarked}
                isLiked={result.isLiked}
              />
            </div>
          </div>
        </div>
        <a href="#" className="block mt-2">
          <p className="text-lg font-semibold text-gray-900">{result.title}</p>
          <p className="hidden mt-3 text-sm text-gray-500 sm:block">
            {result.description}
          </p>
        </a>
      </div>
      <div className="items-center hidden mt-4 md:flex">
        <ResultAuthor author={result.author} />
      </div>
    </>
  );
}

export default ResultInfo;
