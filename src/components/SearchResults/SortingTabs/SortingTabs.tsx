import React, { ReactElement, useContext, useEffect, useState } from 'react';

import { ArrowNarrowDownIcon, ArrowNarrowUpIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

import { ResultsContext } from '../ResultsContext';
import { SortingLogic } from './SortingLogic';
import { Tabs } from './Tabs.enum';

const tabs = [
  { name: Tabs.BestMatch, isDesktop: true, isMobile: true },
  { name: Tabs.BestRated, isDesktop: true, isMobile: true },
  { name: Tabs.Trending, isDesktop: true, isMobile: true },
  { name: Tabs.Price, isDesktop: true, isMobile: false },
  { name: Tabs.PriceLowToHigh, isDesktop: false, isMobile: true },
  { name: Tabs.PriceHighToLow, isDesktop: false, isMobile: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function SortingTabs(): ReactElement {
  const router = useRouter();
  const { query } = router.query;

  const [currentTab, setCurrentTab] = useState(0);
  const [isPriceLowToHigh, setIsPriceLowToHigh] = useState(false);
  const { initialResults, resultsInView, setResults } =
    useContext(ResultsContext);
  const defaultFilter = Tabs.BestMatch;

  useEffect(() => {
    const bestMatchResults = SortingLogic({
      results: initialResults,
      filter: defaultFilter,
      query: query || '',
      isPriceLowToHigh,
    });
    setResults([...bestMatchResults]);
  }, [initialResults]);

  const onTabChange = (tab: number | React.ChangeEvent<HTMLSelectElement>) => {
    let localPriceLowToHigh = isPriceLowToHigh;
    const tabIndex = (
      typeof tab === 'number' ? tab : tab.target.value
    ) as number;

    setCurrentTab(tabIndex as number);
    if (tabs[tabIndex].name === Tabs.Price) {
      localPriceLowToHigh = !isPriceLowToHigh;
    }

    if (tabs[tabIndex].name === Tabs.PriceLowToHigh) {
      localPriceLowToHigh = true;
    }

    if (tabs[tabIndex].name === Tabs.PriceHighToLow) {
      localPriceLowToHigh = false;
    }

    const sortedResults = SortingLogic({
      results: resultsInView,
      filter: tabs[tabIndex].name,
      query: query || '',
      isPriceLowToHigh: localPriceLowToHigh,
    });

    const cloneResults = [...sortedResults];
    setIsPriceLowToHigh(localPriceLowToHigh);
    setResults(cloneResults);
  };

  const RenderMobileSortingFilters = () => (
    <div className="flex items-center w-full md:hidden">
      <label htmlFor="tabs" className="mr-2 text-xs whitespace-nowrap">
        Sort by
      </label>
      <select
        id="tabs"
        name="tabs"
        className="block text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        defaultValue={currentTab}
        onChange={onTabChange}
      >
        {tabs &&
          tabs.map(
            (tab, idx) =>
              tab.isMobile && (
                <option value={idx} key={tab.name}>
                  {tab.name}
                </option>
              ),
          )}
      </select>
    </div>
  );

  const RenderPriceIcons = () => {
    if (isPriceLowToHigh) {
      return (
        <div className="flex ml-1.5">
          <ArrowNarrowUpIcon className="inline w-4 h-4 " aria-hidden="true" />
          <ArrowNarrowDownIcon
            className="inline w-4 h-4 mt-1 -ml-2 opacity-25"
            aria-hidden="true"
          />
        </div>
      );
    }

    return (
      <div className="flex ml-1.5">
        <ArrowNarrowUpIcon
          className="inline w-4 h-4 opacity-25"
          aria-hidden="true"
        />
        <ArrowNarrowDownIcon
          className="inline w-4 h-4 mt-1 -ml-2 "
          aria-hidden="true"
        />
      </div>
    );
  };

  const RenderTab = (
    tab: {
      name: string;
    },
    tabIdx: number,
  ) => (
    <button
      type="button"
      key={tab.name}
      onClick={() => onTabChange(tabIdx)}
      className={classNames(
        tabIdx === currentTab
          ? 'text-gray-900'
          : 'text-gray-500 hover:text-gray-700',
        tabIdx === 0 ? 'rounded-l-lg' : '',
        tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
        'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-md font-medium text-center hover:bg-gray-50 focus:z-10',
      )}
      aria-current={tabs[currentTab] ? 'page' : undefined}
    >
      <span className="flex flex-row items-center whitespace-nowrap">
        {tab.name} {tab.name === Tabs.Price && RenderPriceIcons()}
      </span>
      <span
        aria-hidden="true"
        className={classNames(
          tabIdx === currentTab ? 'bg-indigo-500' : 'bg-transparent',
          'absolute inset-x-0 bottom-0 h-0.5',
        )}
      />
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-end gap-5 md:flex-row">
      <span className="hidden text-gray-500 whitespace-nowrap md:block">
        All figures are in USD and exclude tax
      </span>
      <div>
        <RenderMobileSortingFilters />
        <div className="hidden md:block">
          <nav
            className="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow"
            aria-label="Tabs"
          >
            {tabs.map((tab, tabIdx) => tab.isDesktop && RenderTab(tab, tabIdx))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SortingTabs;
