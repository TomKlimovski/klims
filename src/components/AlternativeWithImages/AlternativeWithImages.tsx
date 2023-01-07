import React from 'react';

import BackgroundDeco from './BackgroundDeco';
import { IFeatureItem, RenderFeatures } from './RenderFeatures';

export interface IAlternativeWithImagesProp {
  title: string;
  subtitle: string;
  features: {
    title: string;
    subtitle: string;
    image: {
      src: string;
      alt: string;
    };
    featureList: IFeatureItem[];
  }[];
}

const AlternativeWithImages = ({
  data: { title, subtitle, features },
}: {
  data: IAlternativeWithImagesProp;
}) => {
  const RenderTitle = () => (
    <div className="relative">
      <h2 className="leading-8 tracking-tight text-center sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center">{subtitle}</p>
    </div>
  );

  const RenderFeatureTitle = (
    featureTitle: string,
    featureSubtitle: string,
  ) => (
    <>
      <h3 className="tracking-tight sm:text-3xl">{featureTitle}</h3>
      <p className="mt-3 text-lg ">{featureSubtitle}</p>
    </>
  );

  const RenderFeatureImage = (src: string, alt: string) => (
    <img className="relative mx-auto" width={490} src={src} alt={alt} />
  );

  const { featureList: firstFeatureSet, image: firstImage } = features[0];
  const { featureList: secondFeatureSet, image: secondImage } = features[1];

  return (
    <div className="py-16 overflow-hidden bg-gray-50 lg:py-24">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <BackgroundDeco right />
        <RenderTitle />

        {/* First Feature Set */}
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            {RenderFeatureTitle(features[0].title, features[0].subtitle)}
            <dl className="mt-10 space-y-10">
              <RenderFeatures features={firstFeatureSet} />
            </dl>
          </div>
          <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
            <BackgroundDeco right mobile />
            {RenderFeatureImage(firstImage.src, firstImage.alt)}
          </div>
        </div>
        <BackgroundDeco left />

        {/* Second Feature Set */}
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              {RenderFeatureTitle(features[1].title, features[1].subtitle)}
              <dl className="mt-10 space-y-10">
                <RenderFeatures features={secondFeatureSet} />
              </dl>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
              <BackgroundDeco left mobile />
              {RenderFeatureImage(secondImage.src, secondImage.alt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativeWithImages;
