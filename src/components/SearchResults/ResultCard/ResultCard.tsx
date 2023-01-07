import React, { ReactElement } from 'react';

import { IResult } from 'shared/models/Result.model';

import ResultInfo from './ResultInfo';
import ResultPricingPreview from './ResultPricingPreview';

function ResultCard({ result }: { result: IResult }): ReactElement {
  return (
    <div
      key={result.id}
      className="grid grid-cols-1 overflow-hidden rounded-lg shadow-lg md:grid-cols-3"
    >
      <div className="flex-shrink-0">
        <img
          className="object-cover w-full h-full"
          src={result.imageUrl}
          alt={`Result related to ${result.title} by ${result.author}`}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 px-6 py-4 bg-white border-r">
        <ResultInfo result={result} />
      </div>
      <div className="flex flex-col items-center justify-between p-4">
        <ResultPricingPreview result={result} />
      </div>
    </div>
  );
}

export default ResultCard;
