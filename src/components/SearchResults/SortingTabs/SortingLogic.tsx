import stringSimilarity from 'string-similarity';

import { IResult } from 'shared/models/Result.model';

import { Tabs } from './Tabs.enum';

interface Props {
  results: IResult[];
  filter: Tabs;
  query: string | string[];
  isPriceLowToHigh: boolean;
}

function findSimilarity(query: string | string[], result: string) {
  const queryClassification = typeof query === 'string' ? [query] : query;
  const queryFlatten = queryClassification.join();
  return stringSimilarity.compareTwoStrings(queryFlatten, result);
}

// flatten object and convert values to string
function getImportantResultValues(result: IResult) {
  return `${result.author.name} ${result.title} ${result.description} ${
    result.price
  } ${result.tags.map((tag) => tag.name)}`;
}

function sortBySimilarity(results: IResult[], query: string | string[]) {
  return results.sort((a, b) => {
    const similarityA = findSimilarity(query, getImportantResultValues(a));
    const similarityB = findSimilarity(query, getImportantResultValues(b));
    return similarityB - similarityA;
  });
}

export function SortingLogic({
  results,
  filter,
  query,
  isPriceLowToHigh,
}: Props): IResult[] {
  switch (filter) {
    case Tabs.BestMatch:
      return sortBySimilarity(results, query);
    case Tabs.Trending:
      return results.sort((a, b) => b.popularityScore - a.popularityScore);
    case Tabs.Price:
    case Tabs.PriceHighToLow:
    case Tabs.PriceLowToHigh:
      if (isPriceLowToHigh) {
        return results.sort((a, b) => a.price - b.price);
      }
      return results.sort((a, b) => b.price - a.price);
    case Tabs.BestRated:
      return results.sort((a, b) => b.starRating - a.starRating);
    default:
      return results;
  }
}
