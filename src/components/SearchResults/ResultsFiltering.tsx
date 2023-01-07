import { IFilters } from 'shared/models/Filters.model';
import { IPriceRange } from 'shared/models/PriceRange.model';
import { IResult } from 'shared/models/Result.model';

const priceFiltering = (priceRange: IPriceRange, price: number) => {
  const minValue = priceRange.min ? priceRange.min : 0;
  const maxValue = priceRange.max ? priceRange.max : Number.MAX_SAFE_INTEGER;
  return Number(price) >= minValue && Number(price) <= maxValue;
};

export const FilterResults = (results: IResult[], filters: IFilters) => {
  if (
    !filters.categories.length &&
    !filters.tags.length &&
    !filters.price.min &&
    !filters.price.max
  ) {
    return results;
  }

  const filteredResults = results
    .filter(
      (result) =>
        !filters.tags.length ||
        result.tags.some((tag) => filters.tags.includes(tag.id)),
    )
    .filter(
      (result) =>
        !filters.categories.length ||
        filters.categories.some((id) => id === result.category.id),
    )
    .filter(
      ({ price }) =>
        !(filters.price.min || filters.price.max) ||
        priceFiltering(filters.price, price),
    );

  return [...filteredResults];
};
