import React, { ReactElement } from 'react';

interface IResultAuthorProps {
  author: {
    name: string;
    href: string;
    imageUrl: string;
  };
}

export default function ResultAuthor({
  author,
}: IResultAuthorProps): ReactElement {
  return (
    <>
      <div className="flex-shrink-0">
        <a href={author.href}>
          <span className="sr-only">{author.name}</span>
          <img
            className="w-10 h-10 rounded-full"
            src={author.imageUrl}
            alt=""
          />
        </a>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          <a href={author.href} className="hover:underline">
            {author.name}
          </a>
        </p>
      </div>
    </>
  );
}
