import React, { useContext, Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { FilterIcon } from '@heroicons/react/solid';

import { ResultsContext } from '../ResultsContext';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import Tags from './Tags';

const FilterRefineSidebar = () => {
  const { initialResults, setFilters, setResults } = useContext(ResultsContext);

  const [filtersKey, setFiltersKey] = React.useState(0);
  const resetAllFilters = () => {
    setResults(initialResults);
    setFilters({
      categories: [],
      price: {},
      tags: [],
    });
    // Adjusting the key prop of a component causes it to re-render
    setFiltersKey(filtersKey + 1);
  };

  const RenderHeading = ({
    title,
    close,
  }: {
    title: string;
    close?: (
      focusableElement?:
        | HTMLElement
        | React.MutableRefObject<HTMLElement | null>
        | undefined,
    ) => void;
  }) => (
    <div className="relative flex items-center gap-x-4">
      <XIcon
        className="absolute hidden w-4 h-4 text-gray-500 cursor-pointer md:inline-block -left-5 hover:text-gray-900"
        onClick={() => resetAllFilters()}
      />
      <p className="text-sm text-gray-900">{title}</p>
      <div className="block ml-auto md:hidden">
        <button
          type="button"
          className="mr-4 text-sm text-gray-900"
          onClick={() => resetAllFilters()}
        >
          Clear all
        </button>
        <button
          type="button"
          className="px-2 text-sm rounded-sm btn-with-ring"
          onClick={() => close && close()}
        >
          Done
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile  */}
      <div className="block md:hidden">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="btn-filter">
                <FilterIcon
                  className="w-5 h-5 mr-2 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
                Filter
              </Popover.Button>
              <Popover.Overlay
                className={`${
                  open ? 'opacity-30 fixed inset-0' : 'opacity-0'
                } bg-black`}
              />
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute z-10 flex flex-col px-10 py-6 mt-4 bg-white rounded-md w-max">
                  {({ close }) => (
                    <>
                      <RenderHeading title="Filter and Refine" close={close} />
                      <div className="mt-4 space-y-6" key={filtersKey}>
                        <CategoryFilter />
                        <Tags />
                        <PriceFilter />
                      </div>
                    </>
                  )}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
      {/* Desktop */}
      <div id="filtering-panel" className="hidden mt-4 md:block">
        <RenderHeading title="Filter and Refine" />
        <div className="mt-4 space-y-6" key={filtersKey}>
          <CategoryFilter />
          <Tags />
          <PriceFilter />
        </div>
      </div>
    </>
  );
};

export default FilterRefineSidebar;
