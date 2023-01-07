import React from 'react';

import Header, { IHeaderProps } from './Header';

export interface IOverlappingCardProps {
  header: IHeaderProps;
  cards: {
    name: string;
    href: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
}

const OverlappingCardsWithBackground = ({
  header: { title, subtitle, image },
  cards,
}: IOverlappingCardProps) => {
  const RenderCards = cards.map((card) => (
    <div
      key={card.name}
      className="flex flex-col bg-white shadow-xl rounded-2xl"
    >
      <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
        <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 bg-gray-900 shadow-lg rounded-xl">
          <card.icon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <h4 className="font-medium text-gray-900">{card.name}</h4>
        <p className="mt-4 text-base text-gray-500">{card.description}</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
        <a
          href={card.href}
          className="text-base font-medium text-indigo-700 hover:text-indigo-600"
        >
          Explore<span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  ));

  return (
    <>
      <Header title={title} subtitle={subtitle} image={image} />
      <section
        className="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8">
          {RenderCards}
        </div>
      </section>
    </>
  );
};

export default OverlappingCardsWithBackground;
