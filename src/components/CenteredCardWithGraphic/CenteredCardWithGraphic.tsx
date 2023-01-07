import React from 'react';

import CardDecoration from './CardDecoration';
import CardInput, { ICardInputProps } from './CardInput';

export interface ICardWithGraphicProps {
  title: string;
  subtitle: string;
  input: ICardInputProps;
}

const CenteredCardWithGraphic = ({
  data: { title, subtitle, input },
}: {
  data: ICardWithGraphicProps;
}) => {
  const RenderHeader = () => (
    <div className="sm:text-center">
      <h3 className="tracking-tight text-white sm:text-4xl">{title}</h3>
      <p className="max-w-2xl mx-auto mt-6 text-lg text-indigo-200">
        {subtitle}
      </p>
    </div>
  );

  return (
    <div className="py-16 bg-white sm:py-24">
      <div className="relative sm:py-16">
        <CardDecoration mobile />
        <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative px-6 py-10 overflow-hidden bg-indigo-600 shadow-xl rounded-2xl sm:px-12 sm:py-20">
            <CardDecoration />
            <div className="relative">
              <RenderHeader />
              <CardInput data={input} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredCardWithGraphic;
