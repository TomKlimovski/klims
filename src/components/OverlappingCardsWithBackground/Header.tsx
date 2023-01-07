import React from 'react';

export interface IHeaderProps {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
}

const Header = ({ title, subtitle, image: { src, alt } }: IHeaderProps) => {
  return (
    <div className="relative pb-32 bg-gray-800">
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src={src} alt={alt} />
        <div
          className="absolute inset-0 bg-gray-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <h2 className="tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="max-w-3xl mt-6 text-xl text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
