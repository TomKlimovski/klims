import React, { useContext } from 'react';

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/solid';

import { RouterContext } from 'components/SearchResults/RouterContext';
import { IPagination } from 'shared/models/Pagination.model';

import { usePagination, DOTS } from './PaginationLogic';

const Pagination = ({
  paginationInfo: { currentPage, pageCount, pageSize },
}: {
  paginationInfo: IPagination;
}) => {
  const { router } = useContext(RouterContext);

  const paginationRange = usePagination({
    currentPage,
    totalPageCount: pageCount,
    siblingCount: 1,
    pageSize,
  });

  const paginationHandler = (page: number) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = String(page);

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const RenderPreviousButton = () => {
    if (currentPage === 1) {
      return null;
    }
    return (
      <div className="flex flex-1 w-0 -mt-px">
        <button
          type="button"
          onClick={() => paginationHandler(currentPage - 1)}
          className="pr-1 btn-pagination"
        >
          <ArrowNarrowLeftIcon
            className="w-5 h-5 mr-3 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </button>
      </div>
    );
  };

  const RenderNextButton = () => {
    if (currentPage === pageCount) {
      return null;
    }
    return (
      <div className="flex justify-end flex-1 w-0 -mt-px">
        <button
          type="button"
          onClick={() => paginationHandler(currentPage + 1)}
          className="pl-1 btn-pagination"
        >
          Next
          <ArrowNarrowRightIcon
            className="w-5 h-5 ml-3 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    );
  };

  return (
    <nav className="flex items-center justify-between px-4 mt-20 mb-10 border-t border-gray-200 sm:px-0">
      <RenderPreviousButton />

      <div className="hidden md:-mt-px md:flex">
        {paginationRange &&
          paginationRange.map((pageNumber) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return (
                <span className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent">
                  ...
                </span>
              );
            }
            return (
              <button
                type="button"
                key={pageNumber}
                className={`${
                  pageNumber === currentPage
                    ? 'btn-pagination-active'
                    : 'btn-pagination-default'
                } `}
                onClick={() => paginationHandler(Number(pageNumber))}
              >
                {pageNumber}
              </button>
            );
          })}
      </div>

      <RenderNextButton />
    </nav>
  );
};

export default Pagination;
