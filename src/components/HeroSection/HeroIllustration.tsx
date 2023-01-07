import React from 'react';

const HeroIllustration = ({
  source,
  description,
}: {
  source: string;
  description: string;
}) => (
  <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
    <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
      <img
        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
        src={source}
        alt={description}
      />
    </div>
  </div>
);
export default HeroIllustration;
