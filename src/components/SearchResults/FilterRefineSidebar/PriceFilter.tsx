import React, { useContext } from 'react';

import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

import { IFilters } from 'shared/models/Filters.model';
import { IPriceRange } from 'shared/models/PriceRange.model';

import { ResultsContext } from '../ResultsContext';

enum PriceRange {
  min = 'min',
  max = 'max',
}

const PriceFilter = () => {
  const { setFilters } = useContext(ResultsContext);

  const [priceRange, setPriceRange] = React.useState<IPriceRange>({
    min: undefined,
    max: undefined,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    identifier: PriceRange,
  ) => {
    event.preventDefault();
    const { value } = event.target;

    switch (identifier) {
      case PriceRange.min:
        setPriceRange({
          ...priceRange,
          min: value ? Number(value) : undefined,
        });
        break;
      case PriceRange.max:
        setPriceRange({
          ...priceRange,
          max: value ? Number(value) : undefined,
        });
        break;
      default:
        break;
    }
  };

  const RenderPriceRange = (identifier: PriceRange) => (
    <div className="sm:col-span-4">
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          min={identifier === PriceRange.min ? 1 : priceRange.min}
          step="any"
          name="price"
          id="price"
          className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
          aria-describedby="price-currency"
          placeholder={identifier}
          value={priceRange[identifier] || ''}
          onChange={(event) => handleChange(event, identifier)}
          required={!(priceRange.min || priceRange.max !== undefined)}
        />
      </div>
    </div>
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFilters((filters: IFilters) => ({ ...filters, price: priceRange }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        Price
      </label>
      <div className="grid items-center grid-cols-1 mt-2 gap-y-6 gap-x-4 sm:grid-cols-9">
        {RenderPriceRange(PriceRange.min)}
        {RenderPriceRange(PriceRange.max)}
        <div className="col-span-1 -mt-2 sm:mt-2">
          <button type="submit">
            <ChevronDoubleRightIcon className="w-5 h-5 text-gray-500 rounded-md hover:text-gray-900 focus:ring-indigo-500 focus:border-indigo-500" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PriceFilter;
