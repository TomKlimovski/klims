import React, { ReactElement } from 'react';

interface IProps {
  keyword: string | string[] | undefined;
  resultsCount: number;
}

export default function ResultsText({
  keyword,
  resultsCount,
}: IProps): ReactElement {
  return (
    <div className="px-3 py-6 text-base text-center">
      You found {resultsCount} <em>{keyword}</em> results. All created by our
      Global Community of independent Architects and Engineers
    </div>
  );
}
