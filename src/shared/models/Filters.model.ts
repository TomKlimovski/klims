import { IPriceRange } from './PriceRange.model';

export interface IFilters {
  categories: string[];
  tags: string[];
  price: IPriceRange;
}
