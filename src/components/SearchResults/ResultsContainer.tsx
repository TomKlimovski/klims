import React, { ReactElement, useEffect, useState } from 'react';

import { ExclamationIcon } from '@heroicons/react/outline';

import { IFilters } from 'shared/models/Filters.model';
import { IPagination } from 'shared/models/Pagination.model';
import { IResult } from 'shared/models/Result.model';

import FilterRefineSidebar from './FilterRefineSidebar/FilterRefineSidebar';
import Pagination from './Pagination/Pagination';
import ResultCard from './ResultCard/ResultCard';
import { ResultsContext } from './ResultsContext';
import { FilterResults } from './ResultsFiltering';
import SortingTabs from './SortingTabs/SortingTabs';

function ResultsContainer({
  results: initialResults,
  paginationInfo,
  error,
}: {
  results: IResult[];
  error: Error;
  paginationInfo: IPagination;
}): ReactElement {
  if (error) {
    return <div>{error.message}</div>;
  }
  const [resultsInView, setResults] = useState(initialResults);
  const [filters, setFilters] = useState<IFilters>({
    categories: [],
    tags: [],
    price: { min: undefined, max: undefined },
  });

  useEffect(() => {
    const filteredResults = FilterResults(initialResults, filters);
    setResults(filteredResults);
  }, [filters]);

  return (
    <ResultsContext.Provider
      value={{ initialResults, resultsInView, setResults, setFilters }}
    >
      {/* Mobile Tabs */}
      <div className="flex flex-col items-center justify-center gap-y-4 md:hidden">
        <div className="flex justify-between w-full px-6 gap-x-2">
          <FilterRefineSidebar />
          <SortingTabs />
        </div>
        <span className="self-start block pl-6 text-gray-500 whitespace-nowrap md:hidden">
          All figures are in USD and exclude tax
        </span>
      </div>
      <div className="container grid justify-center min-h-full grid-flow-col mb-10 grid-col-8 gap-x-8">
        {/* Desktop Tabs */}
        <div className="hidden md:block md:col-span-6">
          <FilterRefineSidebar />
        </div>
        <div className="col-span-8 md:col-span-6">
          <div className="hidden md:block">
            <SortingTabs />
          </div>
          <div className="grid gap-8 mt-6 md:mt-12 last:mb-20">
            {resultsInView &&
              resultsInView.map((result) => (
                <ResultCard key={result.id} result={result} />
              ))}
          </div>
          {!resultsInView.length && (
            <div className="flex flex-col items-center justify-center space-y-2 h-60">
              <ExclamationIcon className="text-indigo-500 w-14 h-14" />
              <p className="text-lg text-center text-gray-500">
                No Results Found! Please refine your search.
              </p>
            </div>
          )}
          {resultsInView.length ? (
            <Pagination paginationInfo={paginationInfo} />
          ) : null}
        </div>
      </div>
    </ResultsContext.Provider>
  );
}

export default ResultsContainer;
