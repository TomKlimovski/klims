import React from 'react';

export interface ICardProp {
  title: string;
  href: string;
  category: {
    name: string;
    href: string;
  };
  description: string;
  date: string;
  datetime: string;
  imageUrl: string;
  readingTime: string;
  author: {
    name: string;
    href: string;
    imageUrl: string;
  };
}

const Card = ({ card }: { card: ICardProp }) => {
  const RenderFooter = () => (
    <div className="flex items-center mt-6">
      <div className="flex-shrink-0">
        <a href={card.author.href}>
          <span className="sr-only">{card.author.name}</span>
          <img
            className="w-10 h-10 rounded-full"
            src={card.author.imageUrl}
            alt=""
          />
        </a>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          <a href={card.author.href} className="hover:underline">
            {card.author.name}
          </a>
        </p>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime={card.datetime}>{card.date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{card.readingTime} read</span>
        </div>
      </div>
    </div>
  );

  return (
    <div
      key={card.title}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img className="object-cover w-full h-48" src={card.imageUrl} alt="" />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href={card.category.href} className="hover:underline">
              {card.category.name}
            </a>
          </p>
          <a href={card.href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{card.title}</p>
            <p className="mt-3 text-base text-gray-500">{card.description}</p>
          </a>
        </div>
        <RenderFooter />
      </div>
    </div>
  );
};

export default Card;
