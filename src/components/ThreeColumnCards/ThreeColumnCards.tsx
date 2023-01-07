import React from 'react';

import Card, { ICardProp } from './Card';

export interface IThreeColumnCardProps {
  title: string;
  subtitle: string;
  articles: ICardProp[];
}

const ThreeColumnCards = ({
  data: { title, subtitle, articles },
}: {
  data: IThreeColumnCardProps;
}) => {
  const RenderTitle = () => (
    <div className="text-center">
      <h2 className="text-3xl tracking-tight sm:text-4xl">{title}</h2>
      <p className="max-w-2xl mx-auto mt-3 text-xl sm:mt-4">{subtitle}</p>
    </div>
  );

  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <RenderTitle />
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {articles.map((article) => (
            <Card card={article} key={article.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnCards;
